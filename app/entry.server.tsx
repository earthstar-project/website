import ReactDOMServer from "react-dom/server";
import type { EntryContext, HandleDataRequestFunction } from "remix";
import { RemixServer } from "remix";
import etag from "./etag.server";

export let handleDataRequest: HandleDataRequestFunction = async (
  response: Response,
  { request },
) => {
  let body = await response.text(); // parse the response body as text

  if (request.method.toLowerCase() === "get") {
    response.headers.set("etag", etag(body));

    if (request.headers.get("If-None-Match") === response.headers.get("ETag")) {
      return new Response("", { status: 304, headers: response.headers });
    }
  }

  return response; // return the response
};

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  let markup = ReactDOMServer.renderToString(
    <RemixServer context={remixContext} url={request.url} />,
  );

  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("ETag", etag(markup));

  if (request.headers.get("If-None-Match") === responseHeaders.get("ETag")) {
    // and send an empty Response with status 304 and the headers.

    return new Response("", { status: 304, headers: responseHeaders });
  }

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}

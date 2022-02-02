import type { LinksFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useTransition,
} from "remix";
import Nav from "./components/nav";

import stylesUrl from "./styles/global.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function Document({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="mask-icon" href="/favicon.svg" color="#AD3BFF" />
        <meta property="og:image" content="/og_image.png" />
        <Meta />
        <Links />
      </head>
      <body className="grid grid-cols-standard lg:grid-cols-large bg-gray-50">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  const transition = useTransition();

  return (
    <Document>
      <Nav />
      <div
        className={`px-2 py-1 md:px-4 md:py-2 overflow-auto lg:w-full lg:m-0 ${
          transition.type === "normalLoad" ? "opacity-50" : ""
        } transition-opacity`}
      >
        <Outlet />
      </div>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <Nav />
          <h1>
            {caught.status} {caught.statusText}
          </h1>
        </Document>
      );

    default:
      throw new Error(
        `Unexpected caught response with status: ${caught.status}`,
      );
  }
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  );
}

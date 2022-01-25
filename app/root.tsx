import type { LinksFunction } from "remix";
import { Meta, Links, Scripts, LiveReload, useCatch, Outlet, ScrollRestoration } from "remix";
import Nav from "./components/nav";

import stylesUrl from "./styles/global.css";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
        
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
        
        <link rel="mask-icon" href="/favicon.svg" color="#AD3BFF"/>

        
        {title ? <title>{title}</title> : null}
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
  return (
    <Document>
      <Nav />
      <div className="p-2 md:p-4 overflow-auto   lg:w-full lg:m-0 ">
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
        `Unexpected caught response with status: ${caught.status}`
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

import type { LinksFunction, MetaFunction } from "remix";
import Incantation from "../components/incantation";

import stylesUrl from "../styles/index.css";

const description =
  "Storage for private, distributed, offline-first applications. Earthstar is a specification and JavaScript library for building connected applications owned and run by their users.";

export let meta: MetaFunction = () => {
  return {
    title: "Earthstar",
    description,
    "og:description": description,
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

function Explainer(
  { imgSrc, children }: { imgSrc: string; children: React.ReactNode },
) {
  return (
    <div className="flex flex-row gap-4 items-center md:flex-col">
      <img
        src={imgSrc}
        className="flex-shrink h-24 md:h-40"
      />
      <p className="text-lg max-w-prose ">
        {children}
      </p>
    </div>
  );
}

function CallToAction(
  { className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>,
) {
  return (
    <a
      className={`${className} border-2 rounded-md p-2 text-md mr-2 text-center `}
      {...props}
    />
  );
}

export default function Index() {
  return (
    <div>
      <div className="gap-2 flex flex-col items-start my-4 md:my-8">
        <p className="text-2xl md:text-4xl max-w-prose font-display">
          Storage for private, distributed, offline-first applications.
        </p>
        <p className="text-gray-700">
          Earthstar is a specification and JavaScript library for building
          connected applications owned and run by their users.
        </p>

        <div className="bg-gray-200 max-w-prose my-4" style={{ "height": 400 }}>
        </div>

        <div className="flex items-stretch md:items-baseline flex-col md:flex-row space-y-2 self-stretch">
          <CallToAction
            href="/docs/what-is-it"
            className="text-es-purple border-es-purple"
          >
            Learn more
          </CallToAction>

          <CallToAction
            href="/docs/browser-playground"
            className="border-es-blue text-es-blue"
          >
            Check out the JavaScript API
          </CallToAction>
          <CallToAction
            href="/specs/data-spec-es5"
            className="border-es-green text-es-green"
          >
            Read the spec
          </CallToAction>
          <CallToAction
            href="/specs/data-spec-es5"
            className="border-es-yellow text-es-yellow"
          >
            Create a chat app
          </CallToAction>
        </div>
      </div>

      <ul className="pl-0 text-lg max-w-prose mb-2">
        <FItem>Works offline.</FItem>
        <FItem>Undiscoverable.</FItem>
        <FItem>Store music, photos, video.</FItem>
        <FItem>Use one or many identities.</FItem>
        <FItem>Actually delete stuff.</FItem>
        <FItem>Temporary documents.</FItem>
        <FItem>Sneakernets.</FItem>
        <FItem>Always self-hosted.</FItem>
        <FItem>Servers optional.</FItem>
        <FItem>No blockchain.</FItem>
        <FItem>No tokens.</FItem>
        <FItem>Free forever, in every sense.</FItem>
      </ul>
      <ul className="pl-0 text-lg max-w-prose">
        <FItem>Verification with ed25519.</FItem>
        <FItem>Works in the browser.</FItem>
        <FItem>Grant read-only access.</FItem>
        <FItem>Efficient sync.</FItem>
        <FItem>One identity across many devices.</FItem>
        <FItem>Multiwriter.</FItem>
        <FItem>Storage drivers.</FItem>
        <FItem>Document write permissions.</FItem>
        <FItem>Discovery with zero knowledge proofs.</FItem>
        <FItem>Deno.</FItem>
        <FItem>Node.</FItem>
      </ul>

      <hr className="my-4 md:my-8" />
      <div>
        <Incantation />
      </div>
    </div>
  );
}

function FItem(
  { children, hidden }: { children: React.ReactNode; hidden?: boolean },
) {
  return (
    hidden
      ? null
      : (
        <li className="inline-block even:text-gray-1000 odd:text-gray-600 mr-1 last:mr-0">
          {children}
        </li>
      )
  );
}

import type { LinksFunction, MetaFunction } from "remix";
import Incantation from "../components/incantation";

import stylesUrl from "../styles/index.css";

const description =
  "Sync stuff you care about with people you know. Earthstar is a specification and Javascript library for building online tools you can truly call your own.";

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
          Sync stuff you care about with people you know.
        </p>
        <p className="text-gray-700">
          Earthstar is a specification and Javascript library for building
          online tools you can <strong>truly call your own</strong>.
        </p>

        <div className="flex items-stretch md:items-baseline flex-col md:flex-row space-y-2 self-stretch">
          <CallToAction
            href="/get-started/how-it-works"
            className="text-es-purple border-es-purple"
          >
            Learn more
          </CallToAction>

          <CallToAction
            href="/get-started/install-cli"
            className="border-es-blue text-es-blue"
          >
            Install the CLI
          </CallToAction>
          <CallToAction
            href="/get-started/replica-server"
            className="border-es-green text-es-green"
          >
            Run a replica server
          </CallToAction>
          <CallToAction
            href="/tutorials/start-a-webshare"
            className="border-es-yellow text-es-yellow"
          >
            Start a webshare
          </CallToAction>
        </div>
      </div>

      <hr className="my-4 md:my-6" />

      <div className="flex flex-col md:flex-row items-baseline gap-6">
        <Explainer imgSrc="/landing/share.svg">
          <p className="text-lg max-w-prose ">
            A <span className="text-es-purple">share</span>{" "}
            is a collection of data — messages, blog posts, photos,{" "}
            <em>anything</em> — synchronised across the devices of its users.
          </p>
        </Explainer>

        <Explainer imgSrc="/landing/replica.svg">
          <p className=" max-w-prose text-lg">
            Your data is here for the long haul. Everyone keeps a working{" "}
            <span className="text-es-blue text-bold">replica</span>{" "}
            of their share, so servers are just a nice-to-have.
          </p>
        </Explainer>

        <Explainer imgSrc="/landing/interface.svg">
          <p className=" max-w-prose text-lg">
            Interact with your <span className="text-es-green">documents</span>
            {" "}
            however you want: through home-cooked browser apps, command-line
            interfaces, or native apps.
          </p>
        </Explainer>
      </div>

      <hr className="my-4 md:my-6" />

      <ul className="pl-0 text-lg max-w-prose mb-4">
        <FItem>Works offline.</FItem>
        <FItem>Undiscoverable.</FItem>
        <FItem>No blockchain.</FItem>
        <FItem>No tokens.</FItem>
        <FItem>Use one or many identities.</FItem>
        <FItem>Actually delete stuff.</FItem>
        <FItem>Temporary documents.</FItem>
        <FItem>Sneakernets.</FItem>
        <FItem>Always self-hosted.</FItem>
        <FItem>Servers optional.</FItem>
        <FItem>Free forever, in every sense.</FItem>
      </ul>
      <ul className="pl-0 text-lg max-w-prose">
        <FItem>Author verification with ed25519.</FItem>
        <FItem hidden>Resumable sync.</FItem>
        <FItem>Protocol-agnostic sync.</FItem>
        <FItem>One identity across many devices.</FItem>
        <FItem>Multiwriter.</FItem>
        <FItem>Swappable storage drivers.</FItem>
        <FItem>Document write permissions.</FItem>
        <FItem>Works in the browser.</FItem>
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

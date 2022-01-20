import type { MetaFunction, LinksFunction, LoaderFunction } from "remix";
import { useLoaderData, Link } from "remix";

import stylesUrl from "../styles/index.css";

export let meta: MetaFunction = () => {
  return {
    title: "Earthstar",
    description: "A distributed, syncable database.",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div>
      <div className=" gap-2 flex flex-col items-center my-8">
        <p className="text-4xl max-w-prose font-display">
          Private and independent networks for you, your friends, or community with <span className="text-es-purple">Earthstar</span>.
        </p>
      </div>
      <hr className="my-8" />

      <div className="flex flex-col md:flex-row items-baseline gap-6">
        <div className="flex flex-row gap-4 items-center md:flex-col">
          <img
            src="/landing/share.svg"
            className="flex-shrink h-32 md:h-40"
          />
          <p className="text-lg max-w-prose ">
            A <span className="text-es-purple">share</span> is a collection
            of data — messages, blog posts, photos, <strong>anything</strong> —
            synchronised across the devices of its users.
          </p>
          
        </div>
        <div className="flex flex-row gap-4 items-center  md:flex-col">
          <img src="/landing/replica.svg" className="flex-shrink h-32 md:h-40" />
          <p className=" max-w-prose text-lg">
            Your data is here for the long haul. Everyone keeps a working
            replica of their share, so servers are just a nice-to-have.
          </p>
          
        </div>
        <div className="flex flex-row gap-4 items-center md:flex-col">
          <img src="/landing/interface.svg" className="flex-shrink h-32 md:h-40" />
          <p className=" max-w-prose text-lg">
            Interact with your share however you want: through home-cooked
            browser apps, command-line interfaces, or native apps.
          </p>
          
        </div>
      </div>

      <a
        href="/get-started/how-does-earthstar-work"
        className="text-es-blue text-2xl block text-center py-2 md:w-96 lg:hidden font-bold m-auto border-2 border-es-blue my-6"
      >
        Learn more
      </a>

      <hr className="my-8" />

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
      </ul>
      <ul className="pl-0 text-lg max-w-prose">
        <FItem>Author verification with ed25519.</FItem>
        <FItem>Resumable sync.</FItem>
        <FItem>Protocol-agnostic sync.</FItem>
        <FItem>One identity across many devices.</FItem>
        <FItem>Multiwriter.</FItem>
        <FItem>Swappable storage drivers.</FItem>
        <FItem>Document write permissions.</FItem>
        <FItem>Works in the browser.</FItem>
        <FItem>Deno.</FItem>
        <FItem>Node.</FItem>
      </ul>
    </div>
  );
}

function FItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="inline-block even:text-gray-1000 odd:text-gray-600 mr-1 last:mr-0">
      {children}
    </li>
  );
}

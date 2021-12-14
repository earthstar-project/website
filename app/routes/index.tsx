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
        <p className=" font-bold text-4xl max-w-prose">
          A decentralised data commons for just you, your friends, or community
          with <span className="text-purple-500">Earthstar</span>.
        </p>
      </div>
      <hr className="my-8" />

      <div className="flex flex-col md:flex-row items-baseline gap-6">
        <div className="flex flex-row gap-4 items-center md:flex-col">
          <p className="text-xl max-w-prose order-1 md:order-2">
            A <span className="text-purple-500">commons</span> is a collection
            of data — messages, blog posts, photos, <strong>anything</strong> —
            synchronised across the devices of its users.
          </p>
          <img
            src="commons.jpg"
            className="flex-shrink order-2 w-48 md:order-1"
          />
        </div>
        <div className="flex flex-row gap-4 items-center  md:flex-col">
          <p className=" max-w-prose text-xl  order-1 md:order-2">
            Your data is here for the long haul. Everyone keeps a working
            replica of their commons, so servers are just a nice-to-have.
          </p>
          <img src="" className="flex-shrink w-48 order-2 md:order-1" />
        </div>
        <div className="flex flex-row gap-4 items-center md:flex-col">
          <p className=" max-w-prose text-xl order-1 md:order-2">
            Interact with your commons however you want: through home-cooked
            browser apps, command-line interfaces, or native apps.
          </p>
          <img src="apps.jpg" className="flex-shrink w-48 order-2 md:order-1" />
        </div>
      </div>

      <a
        href="/get-started/how-does-earthstar-work"
        className="text-purple-500 text-2xl block text-center py-2 md:w-96 lg:hidden font-bold m-auto border-2 border-purple-500 my-6"
      >
        Learn more
      </a>

      <hr className="my-8" />

      <ul className="pl-0 text-xl max-w-prose mb-4">
        <FItem>Works offline.</FItem>
        <FItem>No blockchain.</FItem>
        <FItem>No tokens.</FItem>
        <FItem>Use one or many identities.</FItem>
        <FItem>Actually delete stuff.</FItem>
        <FItem>Self-destructing documents.</FItem>
        <FItem>Sneakernets.</FItem>
        <FItem>Always self-hosted.</FItem>
        <FItem>Servers optional.</FItem>
      </ul>
      <ul className="pl-0 text-xl max-w-prose">
        <FItem>Author verification with ed25519.</FItem>
        <FItem>Resumable sync.</FItem>
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
    <li className="inline-block even:text-gray-500 odd:text-gray-7j00 mr-1 last:mr-0 font-bold">
      {children}
    </li>
  );
}

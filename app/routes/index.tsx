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
    <div className="text-4xl">
      <p className="leading-loose">
        Run your own
        <div className="bg-yellow-100">
          chat / message board / file share / anything
        </div>
        for
        <div className="bg-green-100">you / your friends / your community</div>
        over the
        <div className="bg-blue-100">internet / sneakernet </div>
        with Earthstar.
      </p>
      <p className="">
        <Link
          className="underline bg-purple-500 text-white p-3 rounded"
          to="get-started/how-does-earthstar-work"
        >
          Find out how it works
        </Link>
      </p>
    </div>
  );
}

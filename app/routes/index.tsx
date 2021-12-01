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
      <p>
        Run your own
        <div>chat / message board / file share / anything</div>
        for
        <div>you / your friends / your community</div>
        over the
        <div>internet / sneakernet </div>
        with Earthstar.
      </p>
      <p>
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

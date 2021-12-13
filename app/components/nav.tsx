import * as React from "react";
import { Link } from "remix";

type Sitemap = Record<string, string | Record<string, string>>;

const sitemap: Sitemap = {
  // Blog: "/blog",
  "Get started": {
    "How it works": "/get-started/how-it-works",
    "Why it's decentralised": "/get-started/why-decentralised",
    Roadmap: "/get-started/roadmap",
  },
  APIs: {
    earthstar: "/api/earthstar",
  },
  Specifications: {
    "Data specification": "/specs/data-spec",
  },
  Community: {
    "Contribute code": "/community/contribute",
    Donate: "/community/donate",
    "Code of Conduct": "/community/code-of-conduct",
    "Our backers": "/community/our-backers",
  },
  Links: {
    "Open Collective": "https://opencollective.com/earthstar",
    Discord: "https://discord.gg/EFJnuyKbTv",
    Github: "https://github.com/earthstar-project/earthstar",
  },
};

function LinkOrSection({
  title,
  item,
  collapseDetails,
}: {
  title: string;
  item: string | Record<string, string>;
  collapseDetails: () => void;
}) {
  if (typeof item === "string") {
    return (
      <li className="text-purple-800 underline">
        <Link
          className="visited:text-purple-500"
          to={item}
          onClick={collapseDetails}
        >
          {title}
        </Link>
      </li>
    );
  }

  return (
    <li className="mb-2">
      <span className="font-bold text-sm text-gray-700">{title}</span>
      <ul className="pl-2">
        {Object.entries(item).map(([title, url]) => (
          <li key={title}>
            {url.startsWith("http") ? (
              <a
                className="text-purple-800 underline visited:text-purple-500"
                href={url}
              >
                {title}
              </a>
            ) : (
              <Link
                className="text-purple-800 underline visited:text-purple-500"
                to={url}
                onClick={collapseDetails}
              >
                {title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Nav() {
  const detailsRef = React.useRef<HTMLDetailsElement | null>(null);

  const collapse = React.useCallback(() => {
    if (detailsRef.current && detailsRef.current.open) {
      detailsRef.current.open = false;
    }
  }, []);

  return (
    <>
      <div className="hidden lg:block bg-white overflow-auto self-start sticky top-0">
        <h1 className="text-2xl font-bold px-2 mt-4 ">
          <Link to="/">
            <span className="text-purple-500">Earthstar</span> Project
          </Link>
        </h1>
        <nav className="p-2">
          <ul>
            {Object.entries(sitemap).map(([title, urlOrSection]) => (
              <LinkOrSection
                key={title}
                title={title}
                item={urlOrSection}
                collapseDetails={collapse}
              />
            ))}
          </ul>
        </nav>
      </div>
      <details
        ref={detailsRef}
        className="lg:hidden shadow sticky top-0 bg-white"
      >
        <summary className="text-sm flex items-baseline p-2">
          Navigate
          <h1 className="text-2xl font-bold text-purple-00 text-right flex-grow">
            <Link to="/">
              <span className="text-purple-500">Earthstar</span> Project
            </Link>
          </h1>
        </summary>
        <nav className="bg-gray-50 p-2">
          <ul>
            {Object.entries(sitemap).map(([title, urlOrSection]) => (
              <LinkOrSection
                key={title}
                title={title}
                item={urlOrSection}
                collapseDetails={collapse}
              />
            ))}
          </ul>
        </nav>
      </details>
    </>
  );
}

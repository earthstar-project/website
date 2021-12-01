import * as React from "react";
import { Link } from "remix";

type Sitemap = Record<string, string | Record<string, string>>;

const sitemap: Sitemap = {
  // Blog: "/blog",
  "Get started": {
    "How does Earthstar work?": "/get-started/how-does-earthstar-work",
  },
  APIs: {
    earthstar: "/api/earthstar",
  },
  Specifications: {
    "Data specification": "/specs/data-spec",
  },
  Support: {
    "Contribute code": "/support/contribute",
    Donate: "/support/donate",
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
        <Link to={item} onClick={collapseDetails}>
          {title}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <span className="font-bold">{title}</span>
      <ul className="pl-4">
        {Object.entries(item).map(([title, url]) => (
          <li key={title}>
            <Link
              className="text-purple-800 underline"
              to={url}
              onClick={collapseDetails}
            >
              {title}
            </Link>
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
      <div className="hidden lg:block border-r-2 border-gray-300 bg-white overflow-auto">
        <h1 className="text-2xl font-bold text-white px-2 py-4 ">
          <Link to="/">
            <img src="/earthstar.svg" alt="earthstar" className="w-40" />
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
        className="lg:hidden border-b-2 border-purple-400 sticky top-0 bg-white"
      >
        <summary className="text-2xl flex items-baseline p-2">
          🍔
          <h1 className="text-2xl font-bold text-purple-700 text-right flex-grow">
            <Link to="/" onClick={collapse}>
              <img src="/earthstar.svg" alt="earthstar" className="w-40" />
            </Link>
          </h1>
        </summary>
        <nav className="border-t-2 border-purple-400 p-2">
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

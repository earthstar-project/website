import * as React from "react";
import { Link } from "remix";

type Sitemap = Record<string, string | Record<string, string>>;

const sitemap: Sitemap = {
  // Blog: "/blog",
  "Get started": {
    "How is earthstar different?": "/get-started/how-is-earthstar-different",
    "Concept glossary": "/get-started/concept-glossary",
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
      <header className="hidden lg:block">
        <h1 className="text-2xl font-bold text-purple-700">
          <Link to="/">Earthstar</Link>
        </h1>
        <nav>
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
      </header>
      <details ref={detailsRef} className="lg:hidden p-2">
        <summary className="text-2xl flex items-baseline">
          🍔
          <h1 className="text-2xl font-bold text-purple-700 text-right flex-grow">
            <Link to="/" onClick={collapse}>
              Earthstar
            </Link>
          </h1>
        </summary>
        <nav>
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

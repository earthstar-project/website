import * as React from "react";
import {
  json,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
} from "remix";
import { getMDXComponent } from "mdx-bundler/client";
import getDoc, { getGithubDoc, MdxDoc } from "~/getDoc.server";
import cache from "../cache";
import {
  BlockQuote,
  Code,
  H1,
  H2,
  H3,
  H4,
  HorizontalRule,
  Link,
  ListItem,
  OrderedList,
  Paragraph,
  Pre,
  UnorderedList,
} from "~/components/html";

export let meta: MetaFunction = ({ data }) => {
  const { doc } = data as LoaderType;

  return {
    title: `${doc.title} - Earthstar Project`,
    description: doc.description,
    "og:description": doc.description,
  };
};

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "/prism.css",
    },
  ];
};

// Value is repo, branch, document path.
const GITHUB_SOURCES: Record<string, [string, string, string]> = {
  "docs/developer-guide": ["earthstar", "main", "README.md"],
  "docs/server-guide": ["earthstar", "main", "README_SERVERS.md"],
  "community/application-formats": ["application-formats", "main", "README.md"],
  "community/code-of-conduct": ["earthstar", "main", "CODE_OF_CONDUCT.md"],
  "community/contribute": ["earthstar", "main", "CONTRIBUTING.md"],
};

async function loadGithubDoc(section: string, slug: string) {
  const key = `${section}/${slug}`;

  const cachedDoc = cache.get(key);

  if (cachedDoc && process.env.NODE_ENV !== "development") {
    return json({ doc: cachedDoc });
  }

  const triple = GITHUB_SOURCES[key];

  if (!triple) {
    return redirect("404");
  }

  const maybeDoc = await getGithubDoc(...triple);

  cache.set(key, maybeDoc);

  return json({ doc: maybeDoc });
}

export let loader: LoaderFunction = async ({ params }) => {
  const cachedDoc = cache.get(`post.${params.section}/${params.slug}`);

  if (cachedDoc && process.env.NODE_ENV !== "development") {
    return json({ doc: cachedDoc });
  }

  const maybeDoc = await getDoc(params.section || "", params.slug || "");

  if (!maybeDoc) {
    return loadGithubDoc(params.section || "", params.slug || "");
  }

  cache.set(`post.${params.section}/${params.slug}`, maybeDoc);

  return json({ doc: maybeDoc });
};

type LoaderType = {
  doc: MdxDoc;
};

export default function Post() {
  const { doc } = useLoaderData<LoaderType>();

  const Component = React.useMemo(() => getMDXComponent(doc.code), [doc.code]);

  return (
    <article className="mb-8">
      <Component
        components={{
          p: Paragraph,
          a: Link,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          hr: HorizontalRule,
          li: ListItem,
          ul: UnorderedList,
          ol: OrderedList,
          code: Code,
          blockquote: BlockQuote,
          pre: Pre,
        }}
      />
    </article>
  );
}

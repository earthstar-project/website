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
import getDoc, { MdxDoc } from "~/getDoc.server";
import cache from '../cache';

export let meta: MetaFunction = ({ data }) => {
  const { doc } = data as LoaderType;

  return {
    title: `${doc.title} - Earthstar Project`,
    description: doc.description,
  };
};

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "//unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/default.min.css",
    },
  ];
};

export let loader: LoaderFunction = async ({ params }) => {
  const cachedDoc = cache.get(`post.${params.section}/${params.slug}`);
  
  if (cachedDoc) {
    return json({doc: cachedDoc});
  }
  
  const maybeDoc = await getDoc(params.section || "", params.slug || "");

  if (!maybeDoc) {
    return redirect("/404");
  }
  
  cache.set(`post.${params.section}/${params.slug}`, maybeDoc);

  return json({ doc: maybeDoc });
};

type LoaderType = {
  doc: MdxDoc;
};

function H1(props: {}) {
  return <h1 {...props} className={"text-3xl my-2 font-display"} />;
}

function H2(props: {}) {
  return (
    <h2
      {...props}
      className={"text-2xl mt-12 font-display max-w-prose"}
    />
  );
}

function H3(props: {}) {
  return <h3 {...props} className={"text-lg mt-6 mb-1 font-bold"} />;
}

function H4(props: {}) {
  return <h4 {...props} className={"font-bold"} />;
}

function Link(props: {}) {
  return <a className={"underline text-blue-500"} {...props} />;
}

function ListItem(props: {}) {
  return <li className={""} {...props} />;
}

function UnorderedList(props: {}) {
  return <ul className={"pl-6 max-w-prose list-disc"} {...props} />;
}

function OrderedList(props: {}) {
  return <ul className={"pl-6 max-w-prose list-decimal"} {...props} />;
}

function Code(props: {}) {
  return <code className={"p-1 bg-gray-100 text-sm"} {...props} />;
}

function Paragraph(props: {}) {
  return <p className={"max-w-prose my-3 "} {...props} />;
}

function BlockQuote(props: {}) {
  return (
    <blockquote
      className="px-4 py-2 bg-gray-100 max-w-prose border-l-2 border-purple-200 my-2"
      {...props}
    />
  );
}

function Pre(props: {}) {
  return (
    <pre
      className={"overflow-auto my-2 my-2 text-sm"}
      {...props}
    />
  );
}

export default function Post() {
  const { doc } = useLoaderData<LoaderType>();

  const Component = React.useMemo(() => getMDXComponent(doc.code), [doc.code]);

  return (
    <article>
      <Component
        components={{
          p: Paragraph,
          a: Link,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
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

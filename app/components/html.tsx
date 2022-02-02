export function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 {...props} className={"text-3xl my-2 font-display"} />;
}

export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={"text-2xl mt-6 font-display max-w-prose"}
    />
  );
}

export function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} className={"text-lg mt-4 mb-1 font-bold"} />;
}

export function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h4 {...props} className={"font-bold"} />;
}

export function Link(props: React.HTMLAttributes<HTMLAnchorElement>) {
  return <a className={"underline text-blue-500"} {...props} />;
}

export function ListItem(props: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={""} {...props} />;
}

export function UnorderedList(props: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={"pl-6 max-w-prose list-disc"} {...props} />;
}

export function OrderedList(props: React.HTMLAttributes<HTMLOListElement>) {
  return <ul className={"pl-6 max-w-prose list-decimal"} {...props} />;
}

export function Code(props: React.HTMLAttributes<HTMLPreElement>) {
  return <code className={"p-1 bg-gray-100 text-sm"} {...props} />;
}

export function Paragraph(props: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={"max-w-prose my-4 "} {...props} />;
}

export function BlockQuote(props: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="px-4 py-0.5 bg-gray-100 max-w-prose border-l-2 border-purple-200 my-2"
      {...props}
    />
  );
}

export function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={"overflow-auto my-2 my-2 text-sm"}
      {...props}
    />
  );
}

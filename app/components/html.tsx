export function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h1 {...props} className={"text-3xl my-2 font-display"} />;
}

export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      {...props}
      className={"text-2xl mt-8 mb-2 font-display max-w-prose"}
    />
  );
}

export function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} className={"text-lg mt-6 mb-2 font-bold border-b-2 pb-1 max-w-prose"} />;
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
  return <p className={"max-w-prose mb-4 "} {...props} />;
}

export function BlockQuote(props: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="px-4 py-2 bg-gray-100 max-w-prose border-l-2 border-purple-200 my-2"
      {...props}
    />
  );
}

export function HorizontalRule() {
  return <hr className="border-0 border-t-2 my-3 max-w-prose" />;
}

export function Pre(props: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={"overflow-auto my-2 text-sm"}
      {...props}
    />
  );
}

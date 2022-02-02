import {Link, Paragraph as P } from "~/components/html"

export default function () {
  return (
    <div className="text-gray-600">
      <Link href="https://nlnet.nl">
        <img className="w-24 my-2" src="/nlnet.svg" />
      </Link>
      <P className="text-sm max-w-prose">
        This project was funded through the{" "}
        <Link href="https://nlnet.nl/assure">
          NGI Assure Fund
        </Link>, a fund established by{" "}
        <a href="https://nlnet.nl" className="text-blue-500 underline">NLnet</a>
        {" "}
        with financial support from the European Commission's{" "}
        <Link  href="https://ngi.eu/">
          Next Generation Internet
        </Link>{" "}
        programme, under the aegis of DG Communications Networks, Content and
        Technology under grant agreement No 957073.
      </P>
    </div>
  );
}

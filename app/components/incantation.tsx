export default function () {
  return (
    <div className="text-gray-600">
      <a href="https://nlnet.nl">
        <img className="w-24 my-2" src="/nlnet.svg" />
      </a>
      <p className="text-sm max-w-prose">
        This project was funded through the{" "}
        <a className="text-blue-500 underline" href="https://nlnet.nl/assure">
          NGI Assure Fund
        </a>, a fund established by{" "}
        <a href="https://nlnet.nl" className="text-blue-500 underline">NLnet</a>
        {" "}
        with financial support from the European Commission's{" "}
        <a className="text-blue-500 underline" href="https://ngi.eu/">
          Next Generation Internet
        </a>{" "}
        programme, under the aegis of DG Communications Networks, Content and
        Technology under grant agreement No 957073.
      </p>
    </div>
  );
}

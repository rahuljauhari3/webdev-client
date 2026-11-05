import Link from "next/link";
export default function Sum({ values }: { values: string[] }) {
  const numbers = values.map(Number);
  const valid =
    values.every((v) => v.trim() !== "") && numbers.every(Number.isFinite);
  return (
    <section id="wd-url-sum">
      <h2>URL Parameters</h2>
      <p>
        {valid
          ? `${numbers.join(" + ")} = ${numbers.reduce((a, b) => a + b, 0)}`
          : "Please provide valid numbers."}
      </p>
      <Link href="/labs/lab4">Back to Lab 4</Link>
    </section>
  );
}

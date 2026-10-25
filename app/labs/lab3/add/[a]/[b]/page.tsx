import Link from "next/link";
import { notFound } from "next/navigation";
import Add from "../../../Add";

export default async function AdditionPage({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const values = await params;
  const a = Number(values.a);
  const b = Number(values.b);

  if (!Number.isFinite(a) || !Number.isFinite(b)) notFound();

  return (
    <main>
      <h2>Path Parameter Addition</h2>
      <Add a={a} b={b} />
      <Link href="/labs/lab3">Back to Lab 3</Link>
    </main>
  );
}
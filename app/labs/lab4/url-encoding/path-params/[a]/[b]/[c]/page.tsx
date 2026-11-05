import Sum from "../../../../Sum";
export default async function PathParams({
  params,
}: {
  params: Promise<{ a: string; b: string; c: string }>;
}) {
  const { a, b, c } = await params;
  return <Sum values={[a, b, c]} />;
}

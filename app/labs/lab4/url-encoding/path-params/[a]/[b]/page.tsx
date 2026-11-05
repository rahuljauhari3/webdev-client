import Sum from "../../../Sum";
export default async function PathParams({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  return <Sum values={[a, b]} />;
}

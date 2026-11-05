import Sum from "../Sum";
export default async function QueryParams({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const value = (key: string) =>
    typeof query[key] === "string" ? (query[key] as string) : "0";
  return (
    <Sum
      values={
        query.c === undefined
          ? [value("a"), value("b")]
          : [value("a"), value("b"), value("c")]
      }
    />
  );
}

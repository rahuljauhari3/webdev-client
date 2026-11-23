export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const rawA = params.get("a"),
    rawB = params.get("b"),
    operation = params.get("operation") ?? "add";
  if (
    rawA === null ||
    rawB === null ||
    !rawA.trim() ||
    !rawB.trim() ||
    !Number.isFinite(Number(rawA)) ||
    !Number.isFinite(Number(rawB))
  )
    return Response.json(
      { message: "a and b must be finite numbers" },
      { status: 400 },
    );
  const a = Number(rawA),
    b = Number(rawB);
  if (operation === "divide" && b === 0)
    return Response.json({ message: "Cannot divide by zero" }, { status: 400 });
  const operations: Record<string, () => number> = {
    add: () => a + b,
    subtract: () => a - b,
    multiply: () => a * b,
    divide: () => a / b,
  };
  if (!Object.hasOwn(operations, operation))
    return Response.json({ message: "Unknown operation" }, { status: 400 });
  const result = operations[operation]();
  if (!Number.isFinite(result))
    return Response.json(
      { message: "Result is outside the supported range" },
      { status: 400 },
    );
  return Response.json({ a, b, operation, result });
}

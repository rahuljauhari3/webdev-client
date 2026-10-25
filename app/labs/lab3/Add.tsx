export default function Add({ a, b }: { a: number; b: number }) {
  return (
    <div>
      <p>a = {a}; b = {b}</p>
      <p>a + b = {a + b}</p>
    </div>
  );
}
export default function TailwindResponsiveBreakpoint() {
  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">One breakpoint</h2>
      <div
        id="wd-tailwind-responsive-breakpoint"
        className="bg-red-500 p-4 text-white md:bg-green-500"
      >
        Red below 768px; green from 768px.
      </div>
    </div>
  );
}

export default function TailwindResponsiveGrid() {
  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Grid columns by breakpoint</h2>
      <div
        id="wd-tailwind-responsive-grid"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div className="bg-blue-300 p-3 text-center">01</div>
        <div className="bg-blue-300 p-3 text-center">02</div>
        <div className="bg-blue-300 p-3 text-center">03</div>
        <div className="bg-blue-300 p-3 text-center">04</div>
        <div className="bg-blue-300 p-3 text-center">05</div>
        <div className="bg-blue-300 p-3 text-center">06</div>
        <div className="bg-blue-300 p-3 text-center">07</div>
        <div className="bg-blue-300 p-3 text-center">08</div>
      </div>
    </div>
  );
}

export default function TailwindGrids() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Tailwind Grids</h2>
      <h3 className="mt-6 text-lg font-bold">4 Columns Grid</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-300 p-3 text-center">01</div>
        <div className="bg-blue-300 p-3 text-center">02</div>
        <div className="bg-blue-300 p-3 text-center">03</div>
        <div className="bg-blue-300 p-3 text-center">04</div>
        <div className="bg-blue-300 p-3 text-center">05</div>
        <div className="bg-blue-300 p-3 text-center">06</div>
        <div className="bg-blue-300 p-3 text-center">07</div>
        <div className="bg-blue-300 p-3 text-center">08</div>
        <div className="bg-blue-300 p-3 text-center">09</div>
      </div>
      <h3 className="mt-6 text-lg font-bold">3 Columns Grid</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-300 p-3 text-center">01</div>
        <div className="bg-blue-300 p-3 text-center">02</div>
        <div className="bg-blue-300 p-3 text-center">03</div>
        <div className="col-span-2 bg-blue-300 p-3 text-center">04</div>
        <div className="bg-blue-300 p-3 text-center">05</div>
        <div className="bg-blue-300 p-3 text-center">06</div>
        <div className="col-span-2 bg-blue-300 p-3 text-center">07</div>
      </div>
      <div id="wd-tailwind-grid-system" className="mt-6">
        <h2 className="mb-3 text-2xl font-bold">Grid system</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-red-500 p-3 text-white">Left half</div>
          <div className="bg-blue-500 p-3 text-white">Right half</div>
        </div>
        <div className="mt-2 grid grid-cols-12 gap-2">
          <div className="col-span-4 bg-yellow-500 p-3">One third</div>
          <div className="col-span-8 bg-green-500 p-3 text-white">
            Two thirds
          </div>
        </div>
        <div className="mt-2 grid grid-cols-12 gap-2">
          <div className="col-span-2 bg-black p-3 text-white">Sidebar</div>
          <div className="col-span-8 bg-gray-500 p-3 text-white">
            Main content
          </div>
          <div className="col-span-2 bg-blue-400 p-3">Sidebar</div>
        </div>
        {/* On your own practice example: three equal spans. */}
        <div
          id="wd-personal-tailwind-grid"
          className="mt-4 grid grid-cols-12 gap-2"
        >
          <div className="col-span-4 bg-teal-200 p-3">Four</div>
          <div className="col-span-4 bg-orange-200 p-3">Four</div>
          <div className="col-span-4 bg-purple-200 p-3">Four</div>
        </div>
        {/* With AI */}
        <div id="wd-ai-grid" className="mt-4 grid grid-cols-12 gap-2">
          <div className="col-span-3 bg-indigo-700 p-3 text-white">Three</div>
          <div className="col-span-9 bg-yellow-200 p-3">Nine</div>
        </div>
      </div>
    </div>
  );
}

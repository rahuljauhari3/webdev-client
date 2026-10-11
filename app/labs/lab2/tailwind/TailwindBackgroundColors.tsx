export default function TailwindBackgroundColors() {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">Background colors</h2>
      <div className="mb-4 bg-red-500 p-4 text-white">Red 500</div>
      <div className="mb-4 bg-green-500 p-4 text-white">Green 500</div>
      <div className="mb-4 bg-blue-500 p-4 text-white">Blue 500</div>
      <div className="mb-4 bg-yellow-500 p-4 text-black">Yellow 500</div>
      {/* On your own practice example */}
      <div
        id="wd-personal-tailwind-bg"
        className="mb-4 bg-teal-100 p-4 text-teal-950"
      >
        Practice: teal 100
      </div>
      {/* With AI */}
      <div id="wd-ai-bg" className="mb-4 bg-indigo-700 p-4 text-white">
        AI: indigo 700
      </div>
    </div>
  );
}

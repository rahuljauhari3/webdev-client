export default function TailwindSpacing() {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">Margin and padding</h2>
      <div className="mb-4 bg-blue-200 p-4">Bottom margin 4</div>
      <div className="ms-4 me-8 bg-blue-200 p-4">
        Start margin 4; end margin 8
      </div>
      <h3 className="mt-8 text-xl font-bold">Padding</h3>
      <div className="mb-4 bg-green-200 ps-2 pt-4 pb-8">
        Start 2; top 4; bottom 8
      </div>
      <div className="bg-green-200 p-6">All sides 6</div>
      {/* On your own practice example */}
      <div id="wd-personal-spacing" className="mt-8 bg-orange-200 ps-4 pb-8">
        Practice: change one directional utility and compare.
      </div>
      {/* With AI */}
      <div id="wd-ai-spacing" className="mt-6 bg-purple-200 ps-8 pb-4">
        AI spacing sample
      </div>
    </div>
  );
}

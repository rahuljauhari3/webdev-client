export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z-index</h2>
      <div className="wd-pos-relative" style={{ height: 200 }}>
        <div className="wd-pos-absolute-10-10 wd-dimension-portrait wd-bg-color-yellow">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape: 10
        </div>
        <div className="wd-pos-absolute-120-20 wd-dimension-square wd-bg-color-red">
          Square
        </div>
        {/* On your own practice example */}
        <div
          id="wd-personal-zindex"
          className="wd-personal-zindex wd-dimension-square wd-bg-color-green wd-fg-color-white"
        >
          Practice: 5
        </div>
        {/* With AI */}
        <div
          id="wd-ai-zindex"
          className="wd-ai-zindex-top wd-dimension-square wd-bg-color-yellow"
        >
          AI: 20
        </div>
      </div>
    </div>
  );
}

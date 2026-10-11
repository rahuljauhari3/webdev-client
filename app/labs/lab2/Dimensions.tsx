export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimensions</h2>
      <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
      <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
        Landscape
      </div>
      <div className="wd-dimension-square wd-bg-color-red">Square</div>
      {/* On your own practice: try longer text and inspect the same dimensions. */}
      <div
        id="wd-personal-dimension"
        className="wd-personal-dimension wd-bg-color-green wd-fg-color-white"
      >
        160 by 80
      </div>
      {/* With AI: the box keeps its size even if content overflows. */}
      <div id="wd-ai-dimension" className="wd-ai-dimension-box">
        This long sentence demonstrates that fixed dimensions do not
        automatically resize a box to fit its text.
      </div>
      <p style={{ marginTop: 70 }}>
        Inspect width and height separately from overflowing text.
      </p>
    </div>
  );
}

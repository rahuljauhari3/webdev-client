export default function Display() {
  return (
    <div id="wd-css-display">
      <h2>Display</h2>
      <h3>inline</h3>
      <div>
        <span className="wd-display-inline wd-bg-color-red">inline 1</span>
        <span className="wd-display-inline wd-bg-color-yellow">inline 2</span>
        <span className="wd-display-inline wd-bg-color-blue">inline 3</span>
      </div>
      <h3>inline-block</h3>
      <div>
        <span className="wd-display-inline-block wd-bg-color-red">
          inline-block 1
        </span>
        <span className="wd-display-inline-block wd-bg-color-yellow">
          inline-block 2
        </span>
        <span className="wd-display-inline-block wd-bg-color-blue">
          inline-block 3
        </span>
      </div>
      <h3>block</h3>
      <div>
        <span className="wd-display-block wd-bg-color-red">block 1</span>
        <span className="wd-display-block wd-bg-color-yellow">block 2</span>
        <span className="wd-display-block wd-bg-color-blue">block 3</span>
      </div>
      {/* On your own practice example */}
      <div
        id="wd-personal-display"
        className="wd-display-inline wd-bg-color-green wd-fg-color-white"
      >
        Personal inline div: width is ignored.
      </div>
      {/* With AI */}
      <div id="wd-ai-display" className="wd-display-inline wd-bg-color-yellow">
        AI inline div: width is ignored.
      </div>
    </div>
  );
}

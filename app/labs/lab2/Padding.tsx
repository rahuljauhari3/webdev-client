export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Top and left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Bottom and right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        All sides
      </div>
      {/* On your own practice example */}
      <div
        id="wd-personal-padded"
        className="wd-personal-padding wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow"
      >
        Left 35px; bottom 15px
      </div>
      {/* With AI */}
      <div
        id="wd-ai-padded"
        className="wd-ai-padding-top wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
      >
        Only top padding: 30px
      </div>
    </div>
  );
}

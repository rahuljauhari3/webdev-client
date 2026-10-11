export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background colors</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        Red background with{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          green and white inside.
        </span>
      </p>
      {/* On your own practice example */}
      <div id="wd-personal-bg" className="wd-bg-color-blue wd-fg-color-white">
        White text on blue.
      </div>
      {/* With AI */}
      <div id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        Black text on yellow.
      </div>
    </div>
  );
}

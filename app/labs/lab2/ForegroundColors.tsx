export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Foreground colors</h2>
      <h3 className="wd-fg-color-blue">Blue heading</h3>
      <p className="wd-fg-color-red">
        A red paragraph with{" "}
        <span className="wd-fg-color-green">green words.</span>
      </p>
      {/* On your own practice example: personalize this sentence. */}
      <p id="wd-personal-fg" className="wd-fg-color-green">
        I practice CSS by{" "}
        <span className="wd-fg-color-blue">changing one rule at a time.</span>
      </p>
      {/* With AI */}
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        A sample blue sentence with{" "}
        <span className="wd-fg-color-black">black words.</span>
      </p>
    </div>
  );
}

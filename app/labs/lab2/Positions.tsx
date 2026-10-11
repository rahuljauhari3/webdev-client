export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <div id="wd-css-position-relative">
        <h3>Relative: the original space remains</h3>
        <div className="wd-bg-color-gray" style={{ padding: 30 }}>
          <div className="wd-dimension-portrait wd-bg-color-yellow">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
          {/* On your own practice example */}
          <div
            id="wd-personal-relative"
            className="wd-personal-relative wd-dimension-square wd-bg-color-green wd-fg-color-white"
          >
            Personal nudge
          </div>
          {/* With AI */}
          <div
            id="wd-ai-relative"
            className="wd-ai-pos-relative-nudge wd-dimension-square wd-bg-color-yellow"
          >
            AI nudge
          </div>
        </div>
      </div>
      <div id="wd-css-position-absolute">
        <h3>Absolute: relative to this parent</h3>
        <div
          className="wd-pos-relative wd-bg-color-gray"
          style={{ height: 250 }}
        >
          <div className="wd-pos-absolute-10-10 wd-dimension-portrait wd-bg-color-yellow">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-dimension-square wd-bg-color-red">
            Square
          </div>
          {/* On your own practice example */}
          <div
            id="wd-personal-absolute"
            className="wd-personal-absolute wd-dimension-square wd-bg-color-green wd-fg-color-white"
          >
            Top right
          </div>
          {/* With AI */}
          <div
            id="wd-ai-absolute"
            className="wd-ai-pos-absolute-br wd-dimension-square wd-bg-color-yellow"
          >
            Bottom right
          </div>
        </div>
      </div>
      <div id="wd-css-position-fixed">
        <h3>Fixed: anchored to the viewport</h3>
        <p>Scroll to check the blue square and the two corner badges.</p>
        <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
          Fixed position
        </div>
        {/* On your own practice example */}
        <div id="wd-personal-fixed" className="wd-personal-fixed">
          Practice badge
        </div>
        {/* With AI */}
        <div id="wd-ai-fixed" className="wd-ai-pos-fixed">
          AI fixed
        </div>
      </div>
    </div>
  );
}

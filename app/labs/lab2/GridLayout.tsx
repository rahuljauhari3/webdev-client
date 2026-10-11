export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <h2>Float-based grid</h2>
      <div className="wd-grid-row">
        <div className="wd-grid-col-half-page wd-bg-color-yellow">
          Left half
        </div>
        <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">
          Right half
        </div>
      </div>
      <div className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
          Sidebar
        </div>
        <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">
          Main content
        </div>
        <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">
          Sidebar
        </div>
      </div>
      {/* On your own practice example */}
      <div id="wd-personal-grid" className="wd-grid-row">
        <div className="wd-personal-quarter wd-bg-color-green wd-fg-color-white">
          One quarter
        </div>
        <div className="wd-personal-three-quarters wd-bg-color-yellow">
          Three quarters
        </div>
      </div>
      {/* With AI */}
      <div id="wd-ai-grid" className="wd-grid-row">
        <div className="wd-grid-col-third-page wd-bg-color-red">One third</div>
        <div className="wd-grid-col-two-thirds-page wd-bg-color-blue wd-fg-color-white">
          Two thirds
        </div>
      </div>
    </div>
  );
}

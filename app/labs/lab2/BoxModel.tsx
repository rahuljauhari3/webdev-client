export default function BoxModel() {
  return (
    <div id="wd-css-box-model">
      <h2>Box model</h2>
      <div className="wd-box-model-parent">
        Parent area
        <div className="wd-box-model-box">
          <span className="wd-box-model-border-label">Border</span>
          <span className="wd-box-model-padding-label">Padding</span>
          <div className="wd-box-model-content">Content</div>
          <span className="wd-box-model-margin-label">
            Margin outside the border
          </span>
        </div>
      </div>
      <div className="wd-box-sizing-demo">
        <div className="wd-box-sizing-content">
          200px content + 40px padding + 20px border = 260px.
        </div>
        <div className="wd-box-sizing-border">
          200px total, including padding and border.
        </div>
        {/* On your own practice: an additional 240px comparison. */}
        <div id="wd-personal-box-sizing" className="wd-personal-box-sizing">
          240px total using border-box.
        </div>
        {/* With AI: border-box keeps the declared 200px width. */}
        <div id="wd-ai-box-sizing" className="wd-box-sizing-border">
          AI comparison: 200px total.
        </div>
      </div>
    </div>
  );
}

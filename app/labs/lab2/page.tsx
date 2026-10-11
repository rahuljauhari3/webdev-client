import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h1>Lab 2 — CSS</h1>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab</a>
      </p>
      <div>
        <h2>Style attribute and external CSS</h2>
        <h3>Inline style</h3>
        <p style={{ backgroundColor: "blue", color: "white" }}>
          Inline styles configure this element directly.
        </p>
        {/* On your own practice example: green BACKGROUND, yellow TEXT. */}
        <p
          id="wd-personal-style-attr"
          style={{ backgroundColor: "green", color: "yellow" }}
        >
          My practice paragraph uses a green background and yellow text.
        </p>
        {/* With AI */}
        <p
          id="wd-ai-style-attr"
          style={{ backgroundColor: "purple", color: "white" }}
        >
          A separate purple sample with white text.
        </p>
        <h3>The scoped h3 rule comes from index.css</h3>
      </div>
      <div id="wd-css-id-selectors">
        <h2>ID selectors</h2>
        <p id="wd-id-selector-1">First ID example.</p>
        <p id="wd-id-selector-2">Second ID example.</p>
        {/* On your own practice example */}
        <p id="wd-id-selector-3">A distinct third ID.</p>
        {/* With AI */}
        <p id="wd-ai-id-selector">A distinct AI ID.</p>
      </div>
      <div id="wd-css-class-selectors">
        <h2>Class selectors</h2>
        <p className="wd-class-selector">The same class on a paragraph...</p>
        <h4 className="wd-class-selector">...and a heading.</h4>
        {/* On your own practice example */}
        <p className="wd-your-class">Practice class on a paragraph.</p>
        <h4 className="wd-your-class">Practice class on a heading.</h4>
        {/* With AI */}
        <p className="wd-ai-class-selector">AI class on a paragraph.</p>
        <h4 className="wd-ai-class-selector">AI class on a heading.</h4>
      </div>
      <div id="wd-css-document-structure">
        <h2>Document structure</h2>
        <div className="wd-selector-1">
          <div className="wd-selector-2">
            <p className="wd-selector-3">
              Descendant sample.{" "}
              <span className="wd-selector-4">Direct child sample.</span>{" "}
              {/* On your own practice example */}
              <span className="wd-personal-selector">Practice child.</span>{" "}
              {/* With AI */}
              <span className="wd-ai-selector-5">AI descendant.</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2>Cascade and specificity</h2>
        {/* On your own practice: inspect which ID rule wins by source order. */}
        <div id="wd-personal-cascade-demo">
          <p id="wd-personal-cascade" className="wd-personal-cascade">
            The later ID rule makes this dark green.
          </p>
        </div>
        {/* With AI */}
        <div id="wd-ai-cascade-demo">
          <p id="wd-ai-cascade" className="wd-ai-cascade">
            The ID rule beats the tag and class rules: red.
          </p>
        </div>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}

/* eslint-disable @next/next/no-img-element -- Native images demonstrate CSS float sizing. */
const TEXT =
  "Floating content allows neighboring text to wrap around its edge. A clearer ends the wrapping so the next demonstration begins underneath. Resize the window to observe the line lengths changing.";
export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img
          className="wd-float-right"
          src="/images/reactjs.jpg"
          alt="React logo floating right"
        />
        <p>
          {TEXT} {TEXT}
        </p>
        <img
          className="wd-float-left"
          src="/images/nodejs.jpg"
          alt="Node logo floating left"
        />
        <p>
          {TEXT} {TEXT}
        </p>
        <img
          className="wd-float-right"
          src="/images/reactjs.jpg"
          alt="Second right float"
        />
        <p>
          {TEXT} {TEXT}
        </p>
        <img
          className="wd-float-left"
          src="/images/nodejs.jpg"
          alt="Second left float"
        />
        <p>
          {TEXT} {TEXT}
        </p>
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img
          className="wd-float-right"
          src="/images/reactjs.jpg"
          alt="Right-aligned React logo"
        />
        <div className="wd-float-done" />
      </div>
      {/* On your own practice example: opposite to the first right float. */}
      <div
        id="wd-personal-float"
        className="wd-float-left wd-dimension-square wd-bg-color-green wd-fg-color-white"
      >
        Practice
      </div>
      <p>
        {TEXT} {TEXT}
      </p>
      <div className="wd-float-done" />
      {/* With AI */}
      <div
        id="wd-ai-float"
        className="wd-float-right wd-dimension-square wd-bg-color-yellow"
      >
        AI float
      </div>
      <p>
        {TEXT} {TEXT}
      </p>
      <div className="wd-float-done" />
    </div>
  );
}

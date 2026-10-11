export default function Corners() {
  return (
    <div id="wd-css-corners">
      <h2>Rounded corners</h2>
      <p className="wd-rounded-corners-top wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Top corners
      </p>
      <p className="wd-rounded-corners-bottom wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Bottom corners
      </p>
      <p className="wd-rounded-corners-all-around wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        All corners
      </p>
      <p className="wd-rounded-corners-inline wd-border-thin wd-border-blue wd-border-solid wd-padding-fat">
        Different radii
      </p>
      {/* On your own practice example */}
      <p
        id="wd-personal-corners"
        className="wd-personal-rounded wd-border-thin wd-border-blue wd-border-solid wd-padding-fat"
      >
        Opposite corners
      </p>
      {/* With AI */}
      <p
        id="wd-ai-corners"
        className="wd-ai-rounded-left wd-border-thin wd-border-blue wd-border-solid wd-padding-fat"
      >
        Left corners only
      </p>
    </div>
  );
}

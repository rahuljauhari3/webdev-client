export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2>
      <p className="wd-border-fat wd-border-solid wd-border-red">
        Fat solid red
      </p>
      <p className="wd-border-thin wd-border-dashed wd-border-blue">
        Thin dashed blue
      </p>
      {/* On your own practice example */}
      <p
        id="wd-personal-border"
        className="wd-border-thin wd-border-solid wd-border-yellow"
      >
        Thin solid yellow
      </p>
      {/* With AI */}
      <p
        id="wd-ai-border"
        className="wd-border-fat wd-border-dashed wd-border-yellow"
      >
        Fat dashed yellow
      </p>
    </div>
  );
}

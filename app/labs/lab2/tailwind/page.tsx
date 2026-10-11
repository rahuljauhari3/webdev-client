import "./index.css";
import TailwindSpacing from "./TailwindSpacing";
import TailwindTypography from "./TailwindTypography";
import TailwindBackgroundColors from "./TailwindBackgroundColors";
import TailwindResponsiveBreakpoint from "./TailwindResponsiveBreakpoint";
import TailwindResponsiveShowHide from "./TailwindResponsiveShowHide";
import TailwindResponsiveFlex from "./TailwindResponsiveFlex";
import TailwindResponsiveGrid from "./TailwindResponsiveGrid";
import TailwindResponsiveSpacingText from "./TailwindResponsiveSpacingText";
import TailwindResponsiveDesign from "./TailwindResponsiveDesign";
import TailwindFilters from "./TailwindFilters";
import TailwindGrids from "./TailwindGrids";

export default function TailwindLab() {
  return (
    <main className="p-4 font-sans sm:p-8">
      <h1 className="mb-8 text-4xl font-bold">Tailwind CSS</h1>
      <p className="mb-8">
        <a href="/labs/lab2" className="text-blue-700 underline">
          Back to CSS Lab 2
        </a>
      </p>
      <TailwindSpacing />
      <hr className="my-8" />
      <TailwindTypography />
      <hr className="my-8" />
      <TailwindBackgroundColors />
      <hr className="my-8" />
      <TailwindResponsiveBreakpoint />
      <hr className="my-8" />
      <TailwindResponsiveShowHide />
      <hr className="my-8" />
      <TailwindResponsiveFlex />
      <hr className="my-8" />
      <TailwindResponsiveGrid />
      <hr className="my-8" />
      <TailwindResponsiveSpacingText />
      <hr className="my-8" />
      <TailwindResponsiveDesign />
      <hr className="my-8" />
      <TailwindFilters />
      <hr className="my-8" />
      <TailwindGrids />
    </main>
  );
}

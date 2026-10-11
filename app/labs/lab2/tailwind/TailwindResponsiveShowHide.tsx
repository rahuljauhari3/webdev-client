export default function TailwindResponsiveShowHide() {
  return (
    <div id="wd-tailwind-responsive-show-hide">
      <h2 className="mb-3 text-2xl font-bold">Show and hide</h2>
      <p className="block bg-red-200 p-2 md:hidden">small screen</p>
      <p className="hidden bg-green-200 p-2 md:block">large screen</p>
    </div>
  );
}

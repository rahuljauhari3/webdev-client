export default function TailwindResponsiveFlex() {
  return (
    <div>
      <h2 className="mb-3 text-2xl font-bold">Stack, then row</h2>
      <div
        id="wd-tailwind-responsive-flex"
        className="flex flex-col gap-4 md:flex-row"
      >
        <div className="bg-red-500 p-4 text-white">One</div>
        <div className="bg-green-500 p-4 text-white">Two</div>
        <div className="bg-blue-500 p-4 text-white">Three</div>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element -- Compare filter utilities on native images. */
export default function TailwindFilters() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">Blurs</h2>
      <div className="flex">
        <img
          className="w-1/4 blur-none"
          src="/images/reactjs.jpg"
          alt="No blur"
        />
        <img
          className="w-1/4 blur-sm"
          src="/images/reactjs.jpg"
          alt="Small blur"
        />
        <img
          className="w-1/4 blur-lg"
          src="/images/reactjs.jpg"
          alt="Large blur"
        />
        <img
          className="w-1/4 blur-2xl"
          src="/images/reactjs.jpg"
          alt="Extra large blur"
        />
      </div>
      {/* On your own practice example */}
      <h3 className="mt-8 text-lg font-bold">Practice: contrast</h3>
      <div id="wd-personal-filters" className="flex">
        <img
          className="w-1/4 contrast-50"
          src="/images/reactjs.jpg"
          alt="Contrast 50"
        />
        <img
          className="w-1/4 contrast-100"
          src="/images/reactjs.jpg"
          alt="Contrast 100"
        />
        <img
          className="w-1/4 contrast-150"
          src="/images/reactjs.jpg"
          alt="Contrast 150"
        />
        <img
          className="w-1/4 contrast-200"
          src="/images/reactjs.jpg"
          alt="Contrast 200"
        />
      </div>
      {/* With AI */}
      <h3 className="mt-8 text-lg font-bold">Grayscale and brightness</h3>
      <div id="wd-ai-filters" className="flex">
        <img
          className="w-1/4 grayscale"
          src="/images/reactjs.jpg"
          alt="Grayscale"
        />
        <img
          className="w-1/4 grayscale-0"
          src="/images/reactjs.jpg"
          alt="Original color"
        />
        <img
          className="w-1/4 brightness-50"
          src="/images/reactjs.jpg"
          alt="Brightness 50"
        />
        <img
          className="w-1/4 brightness-150"
          src="/images/reactjs.jpg"
          alt="Brightness 150"
        />
      </div>
    </div>
  );
}

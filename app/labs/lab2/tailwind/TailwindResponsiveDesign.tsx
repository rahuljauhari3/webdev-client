/* eslint-disable @next/next/no-img-element -- Native image sizing is part of this CSS lab. */
export default function TailwindResponsiveDesign() {
  return (
    <div className="font-sans">
      <h2 className="mb-4 text-3xl font-bold">Responsive cards</h2>
      {/* On your own practice: personalize this card and test its md background. */}
      <article
        id="wd-personal-responsive"
        className="mx-auto mb-8 max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-teal-50"
      >
        <div className="md:flex">
          <div className="md:w-48 md:shrink-0">
            <img
              src="/images/reactjs.jpg"
              alt="React logo"
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
            />
          </div>
          <div className="min-w-0 p-8">
            <p className="text-sm font-semibold tracking-wide text-teal-700 uppercase">
              My CSS practice
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Learning responsive interfaces
            </h3>
            <p className="mt-2 text-gray-600">
              I am practicing layouts that adapt from a phone to a desktop.
            </p>
          </div>
        </div>
      </article>
      {/* With AI: a separate sample card keeps the course sample copy. */}
      <article
        id="wd-ai-responsive"
        className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
      >
        <div className="md:flex">
          <div className="md:w-48 md:shrink-0">
            <img
              src="/images/reactjs.jpg"
              alt="React logo for sample course"
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
            />
          </div>
          <div className="min-w-0 p-8 lg:p-12">
            <p className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
              Professional Courses
            </p>
            <h3 className="mt-1 text-lg font-medium">
              Rocket Propulsion Fundamentals
            </h3>
            <p className="mt-2 text-gray-500">
              An in-depth study of the fundamentals of rocket propulsion...
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

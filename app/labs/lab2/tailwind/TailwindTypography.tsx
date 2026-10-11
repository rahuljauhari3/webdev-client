export default function TailwindTypography() {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold">Font size</h2>
      <p className="text-sm">Size: sm</p>
      <p className="text-base">Size: base</p>
      <p className="text-lg">Size: lg</p>
      <p className="text-xl">Size: xl</p>
      <p className="text-2xl">Size: 2xl</p>
      <p className="text-3xl">Size: 3xl</p>
      <h2 className="mt-6 text-3xl font-bold">Font weight</h2>
      <p className="font-thin">Weight: thin</p>
      <p className="font-light">Weight: light</p>
      <p className="font-normal">Weight: normal</p>
      <p className="font-medium">Weight: medium</p>
      <p className="font-semibold">Weight: semibold</p>
      <p className="font-bold">Weight: bold</p>
      <p className="font-extrabold">Weight: extrabold</p>
      <p className="font-black">Weight: black</p>
      {/* On your own practice example: personalize this line. */}
      <p id="wd-personal-type" className="mt-4 text-xl font-semibold">
        I am learning how type communicates hierarchy.
      </p>
      {/* With AI */}
      <p id="wd-ai-type" className="text-2xl font-medium">
        A separate size and weight sample.
      </p>
    </div>
  );
}

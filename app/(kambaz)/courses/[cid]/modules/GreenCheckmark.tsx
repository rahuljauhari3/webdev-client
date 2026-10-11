import { FaCheckCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <span
      title="Published"
      className="inline-flex shrink-0 items-center text-green-600"
    >
      <FaCheckCircle
        aria-hidden="true"
        className="rounded-full bg-white text-xl"
      />

      <span className="sr-only">Published</span>
    </span>
  );
}
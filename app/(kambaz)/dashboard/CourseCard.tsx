import Link from "next/link";
import Image from "next/image";

export default function CourseCard({
  id,
  title,
  subtitle,
  image,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}) {
  return (
    <div
      className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm"
    >
      <Link
        href={`/courses/${id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={image}
          width={300}
          height={160}
          alt={title}
          className="block h-40 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="m-0 mb-2 text-base font-semibold">
            {title}
          </h3>

          <p
            className="wd-dashboard-course-title m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600"
          >
            {subtitle}
          </p>

          <span className="inline-block rounded bg-blue-600 px-3 py-2 text-sm text-white">
            Go
          </span>
        </div>
      </Link>
    </div>
  );
}
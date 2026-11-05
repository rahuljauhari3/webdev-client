import Link from "next/link";
import Image from "next/image";
type Props = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  number: string;
  startDate: string;
  canEdit: boolean;
  onEdit: () => void;
  onDelete: () => void;
  canOpen: boolean;
  enrolled: boolean;
  onEnroll?: () => void;
};
export default function CourseCard(p: Props) {
  const body = (
    <>
      <Image
        src={p.image}
        width={300}
        height={160}
        alt={p.title}
        className="block h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="m-0 mb-2 text-base font-semibold">{p.title}</h3>
        <p className="wd-dashboard-course-title text-sm text-neutral-600">
          {p.subtitle}
        </p>
        <p className="text-sm">
          {p.number} · {p.startDate}
        </p>
        {p.canOpen && <span className="a4-primary">Go</span>}
      </div>
    </>
  );
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      {p.canOpen ? (
        <Link
          href={`/courses/${p.id}/home`}
          className="wd-dashboard-course-link block text-neutral-900 no-underline"
        >
          {body}
        </Link>
      ) : (
        body
      )}
      <div className="flex flex-wrap gap-2 p-4 pt-0">
        {p.canEdit && (
          <>
            <button onClick={p.onEdit}>Edit</button>
            <button className="text-red-600" onClick={p.onDelete}>
              Delete
            </button>
          </>
        )}
        {p.onEnroll && (
          <button
            className={p.enrolled ? "a4-danger" : "a4-success"}
            onClick={p.onEnroll}
          >
            {p.enrolled ? "Unenroll" : "Enroll"}
          </button>
        )}
      </div>
    </div>
  );
}

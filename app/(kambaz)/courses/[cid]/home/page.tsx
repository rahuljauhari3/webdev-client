import ModuleList from "../modules/ModuleList";
import CourseStatus from "./Status";

export default async function Home({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;

  return (
    <div id="wd-home" className="flex gap-4">
      <div className="min-w-0 flex-1">
        <ModuleList cid={cid} />
      </div>

      <div className="hidden w-[250px] shrink-0 lg:block">
        <CourseStatus />
      </div>
    </div>
  );
}
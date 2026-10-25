import ModuleList from "./ModuleList";

export default async function Modules({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return <ModuleList cid={cid} />;
}


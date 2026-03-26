import { notFound } from "next/navigation";
import { getGeoDepartmentByRoute } from "@/lib/geo-data";
import { GeoPageTemplate } from "@/components/geo/GeoPageTemplate";

export function DeptRoutePage({ route }: { route: string }) {
  const geo = getGeoDepartmentByRoute(route);
  if (!geo) notFound();
  return <GeoPageTemplate dept={geo} />;
}

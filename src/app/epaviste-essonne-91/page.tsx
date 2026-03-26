import type { Metadata } from "next";
import { metadataForDeptRoute } from "@/lib/dept-meta";
import { DeptRoutePage } from "@/components/geo/DeptRoutePage";

const ROUTE = "/epaviste-essonne-91";

export const metadata: Metadata = metadataForDeptRoute(ROUTE);

export default function Page() {
  return <DeptRoutePage route={ROUTE} />;
}

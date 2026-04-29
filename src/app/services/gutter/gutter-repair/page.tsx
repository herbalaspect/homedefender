import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { SubServicePageTemplate } from "@/components/templates/SubServicePageTemplate";
import { getSubServiceBySlug } from "../../../../../content/services";

const service = getSubServiceBySlug("gutter-repair");

export const metadata = service
  ? pageMetadata({
      title: service.title,
      description: service.metaDescription,
      path: service.path,
    })
  : {};

export default function Page() {
  if (!service) notFound();
  return <SubServicePageTemplate service={service} />;
}

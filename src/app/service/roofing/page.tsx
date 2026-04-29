import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { ServiceCategoryTemplate } from "@/components/templates/ServiceCategoryTemplate";
import { getServiceCategoryBySlug } from "../../../../content/services";

const category = getServiceCategoryBySlug("roofing");

export const metadata = category
  ? pageMetadata({
      title: category.title,
      description: category.metaDescription,
      path: category.path,
    })
  : {};

export default function RoofingCategoryPage() {
  if (!category) notFound();
  return <ServiceCategoryTemplate category={category} />;
}

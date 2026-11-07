import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModulePlaceholder } from "@/components/layout/ModulePlaceholder";
import { PageContainer } from "@/components/ui/PageContainer";
import { buildPathname, findNavigationLink } from "@/lib/navigation";

interface AppSectionPageProps {
  params: Promise<{ section?: string[] }>;
}

export async function generateMetadata({
  params,
}: AppSectionPageProps): Promise<Metadata> {
  const { section } = await params;
  const navigationLink = findNavigationLink(buildPathname(section));

  if (!navigationLink) {
    return { title: "Page not found" };
  }

  return {
    title: navigationLink.label,
    description: navigationLink.summary,
  };
}

export default async function AppSectionPage({ params }: AppSectionPageProps) {
  const { section } = await params;
  const navigationLink = findNavigationLink(buildPathname(section));

  if (!navigationLink) {
    notFound();
  }

  return (
    <PageContainer>
      <ModulePlaceholder title={navigationLink.label} summary={navigationLink.summary} />
    </PageContainer>
  );
}

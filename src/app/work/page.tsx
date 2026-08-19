import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { WorkList } from "@/components/sections/WorkList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mergeProjects } from "@/data/content";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("WorkPage");
  return { title: t("title"), description: t("description") };
}

export default async function WorkPage() {
  const t = await getTranslations("WorkPage");
  const tRoot = await getTranslations();
  const projects = mergeProjects(tRoot.raw("Projects"));

  return (
    <div className="px-6 pb-24 pt-40 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <SectionHeading tag={t("tag")} title={t("title")} description={t("description")} />
        <div className="mt-16">
          <WorkList projects={projects} />
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { WorkList } from "@/components/sections/WorkList";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See how Quarks Code delivers fleet management, fintech, booking, and proptech platforms with measurable results.",
};

export default function WorkPage() {
  return (
    <div className="px-6 pb-24 pt-40 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Case Studies"
          title="Real systems. Real results."
          description="Every project we take on is high-stakes. Here is how we've solved them — and the measurable outcomes we delivered."
        />
        <div className="mt-16">
          <WorkList />
        </div>
      </div>
    </div>
  );
}

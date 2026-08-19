import type { Metadata } from "next";
import { company } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Quarks Code. Tell us about your project and we'll design a solution that fits your organization.",
};

const info = [
  { label: "Phone", lines: company.phones },
  { label: "Email", lines: [company.email] },
  { label: "Address", lines: company.address },
  { label: "Working Hours", lines: company.hours },
];

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-40 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          tag="Contact"
          title="Let's talk about your project"
          description="Tell us about the challenge you're trying to solve. We'll review your message and follow up within one business day."
        />

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex flex-col gap-10">
              {info.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
                    {item.label}
                  </p>
                  <div className="mt-2 space-y-1">
                    {item.lines.map((line) => (
                      <p key={line} className="text-lg text-ink dark:text-paper">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-ink/10 pt-6 dark:border-paper/10">
                <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
                  Typical response time
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                  We reply to all project inquiries within one business day.
                  For urgent matters, please call directly.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

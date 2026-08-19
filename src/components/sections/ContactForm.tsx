"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const tRoot = useTranslations();
  const topics = tRoot.raw("ContactTopics") as string[];
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-ink/10 p-10 dark:border-paper/10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-acid text-ink">
          <Check size={22} />
        </span>
        <h3 className="font-display text-2xl text-ink dark:text-paper">{t("sentTitle")}</h3>
        <p className="text-ink/60 dark:text-paper/60">{t("sentBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={t("fullName")} name="name" placeholder={t("namePlaceholder")} />
        <Field label={t("email")} name="email" type="email" placeholder={t("emailPlaceholder")} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label={t("phone")} name="phone" placeholder={t("phonePlaceholder")} />
        <Field label={t("company")} name="company" placeholder={t("companyPlaceholder")} />
      </div>

      <div>
        <label className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
          {t("helpWith")}
        </label>
        <select
          name="topic"
          required
          defaultValue=""
          className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-acid dark:border-paper/20 dark:text-paper"
        >
          <option value="" disabled>
            {t("selectTopic")}
          </option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
          {t("projectLabel")}
        </label>
        <textarea
          name="project"
          required
          rows={4}
          placeholder={t("projectPlaceholder")}
          className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-acid dark:border-paper/20 dark:text-paper"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        data-cursor="link"
        className="group mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-wide text-paper transition-colors hover:bg-acid hover:text-ink disabled:opacity-60 dark:bg-paper dark:text-ink dark:hover:bg-acid"
      >
        {status === "sending" ? t("sending") : t("send")}
        {status !== "sending" && <ArrowUpRight size={16} />}
      </button>
      <p className="text-xs text-ink/40 dark:text-paper/40">{t("footnote")}</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-acid dark:border-paper/20 dark:text-paper"
      />
    </div>
  );
}

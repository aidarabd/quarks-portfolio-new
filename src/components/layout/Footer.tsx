import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  const navLinks = [
    { href: "/", label: tNav("home") },
    { href: "/work", label: tNav("work") },
    { href: "/services", label: tNav("services") },
    { href: "/about", label: tNav("about") },
    { href: "/contact", label: tNav("contact") },
  ];

  const email = t("email");
  const phones = t.raw("phones") as string[];
  const addressLines = t.raw("addressLines") as string[];

  return (
    <footer className="border-t border-ink/10 bg-paper dark:border-paper/10 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Link
          href="/contact"
          data-cursor="view"
          className="block font-display text-[13vw] font-medium leading-[0.9] tracking-tight text-ink transition-colors hover:text-acid sm:text-[9vw] md:text-[7vw] dark:text-paper"
        >
          {t("letsTalk")}
        </Link>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-ink/10 pt-12 text-sm md:grid-cols-4 dark:border-paper/10">
          <div>
            <p className="font-display text-lg text-ink dark:text-paper">Quarks Code</p>
            <p className="mt-3 max-w-[220px] text-ink/60 dark:text-paper/60">{t("tagline")}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
              {t("navigate")}
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink/70 transition-colors hover:text-acid dark:text-paper/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
              {t("contact")}
            </p>
            <ul className="mt-4 space-y-2 text-ink/70 dark:text-paper/70">
              <li>
                <a href={`mailto:${email}`} className="transition-colors hover:text-acid">
                  {email}
                </a>
              </li>
              {phones.map((phone) => (
                <li key={phone}>{phone}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
              {t("address")}
            </p>
            <ul className="mt-4 space-y-2 text-ink/70 dark:text-paper/70">
              {addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between dark:border-paper/10 dark:text-paper/40">
          <p>{t("rights", { year: new Date().getFullYear() })}</p>
          <p>{t("bottomTag")}</p>
        </div>
      </div>
    </footer>
  );
}

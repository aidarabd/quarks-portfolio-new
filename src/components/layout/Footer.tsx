import Link from "next/link";
import { company, navLinks } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper dark:border-paper/10 dark:bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Link
          href="/contact"
          data-cursor="view"
          className="block font-display text-[13vw] font-medium leading-[0.9] tracking-tight text-ink transition-colors hover:text-acid sm:text-[9vw] md:text-[7vw] dark:text-paper"
        >
          Let&rsquo;s talk
        </Link>

        <div className="mt-16 grid grid-cols-2 gap-10 border-t border-ink/10 pt-12 text-sm md:grid-cols-4 dark:border-paper/10">
          <div>
            <p className="font-display text-lg text-ink dark:text-paper">Quarks Code</p>
            <p className="mt-3 max-w-[220px] text-ink/60 dark:text-paper/60">{company.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
              Navigate
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
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-ink/70 dark:text-paper/70">
              <li>
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-acid">
                  {company.email}
                </a>
              </li>
              {company.phones.map((phone) => (
                <li key={phone}>{phone}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/40 dark:text-paper/40">
              Address
            </p>
            <ul className="mt-4 space-y-2 text-ink/70 dark:text-paper/70">
              {company.address.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between dark:border-paper/10 dark:text-paper/40">
          <p>© {new Date().getFullYear()} Quarks Code. All rights reserved.</p>
          <p>Enterprise software · Government systems · Process automation</p>
        </div>
      </div>
    </footer>
  );
}

import { Newspaper, Mic, Users, Trophy, Landmark, BookOpenText } from "lucide-react";
import useReveal from "../hooks/useReveal";
import siteConfig from "../config";

const ICONS = [Newspaper, Mic, Users, Trophy, Landmark, BookOpenText];

export default function Categories() {
  const ref = useReveal();
  return (
    <section id="rubriques" className="bg-[var(--color-paper)] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="Nos rubriques" title="Toute la vie du Mbaor, en un seul endroit" />

        <div ref={ref} className="reveal mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.categories.map((cat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={cat.title}
                className="rounded-2xl bg-white card-shadow p-7 hover:-translate-y-1 transition-transform duration-300 border border-black/5"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-blue)]/10 flex items-center justify-center">
                  <Icon size={22} className="text-[var(--color-blue)]" />
                </div>
                <h3 className="mt-5 font-display text-[var(--color-blue-dark)] text-lg font-bold">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-mist)] leading-relaxed">{cat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-red)]">
        {eyebrow}
      </span>
      <h2
        className={`mt-3 font-display text-3xl sm:text-4xl font-extrabold leading-tight ${
          light ? "text-white" : "text-[var(--color-blue-dark)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 ${light ? "text-white/75" : "text-[var(--color-mist)]"}`}>{description}</p>
      )}
    </div>
  );
}

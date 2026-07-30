import { Phone, ArrowUpRight } from "lucide-react";
import siteConfig from "../config";
import { SectionHeading } from "./Categories";

export default function Partner() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Groupe Mbaor Media" title="Nos chaînes partenaires" align="center" />

        <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[var(--color-paper)] border border-black/5 p-8 flex flex-col items-center text-center">
            <img src="/images/logo-mbaor.jpg" alt="MBAOR TV" className="w-20 h-20 rounded-xl object-cover" />
            <h3 className="mt-5 font-display font-bold text-[var(--color-blue-dark)] text-lg">MBAOR TV</h3>
            <p className="mt-1 text-sm text-[var(--color-mist)]">Le miroir du Mbaor</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-[var(--color-ink)]">
              <Phone size={14} className="text-[var(--color-blue)]" />
              {siteConfig.phoneMain}
            </p>
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-red)] hover:underline"
            >
              Voir la chaîne
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="rounded-2xl bg-[var(--color-paper)] border border-black/5 p-8 flex flex-col items-center text-center">
            <img
              src="/images/logo-thiary-mbaor.jpg"
              alt="Thiary Mbaor TV1"
              className="w-20 h-20 rounded-xl object-cover"
            />
            <h3 className="mt-5 font-display font-bold text-[var(--color-blue-dark)] text-lg">
              Thiary Mbaor TV1
            </h3>
            <p className="mt-1 text-sm text-[var(--color-mist)]">Thiary Mbaor Infos</p>
            <p className="mt-3 flex items-center gap-2 text-sm text-[var(--color-ink)]">
              <Phone size={14} className="text-[var(--color-blue)]" />
              {siteConfig.phoneThiaryMbaor}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-mist)]">
              Service commercial
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

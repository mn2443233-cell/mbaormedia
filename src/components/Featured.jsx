import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./Categories";

export default function Featured() {
  return (
    <section id="a-la-une" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading eyebrow="À la une" title="Nos dernières couvertures terrain" />

        <div className="mt-14 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="rounded-3xl overflow-hidden card-shadow border border-black/5">
            <img
              src="/images/poster-navetane.jpg"
              alt="MBAOR TV couvre les matchs Navétane, Zone 7 Bandègne Olof"
              className="w-full h-auto"
            />
          </div>

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white bg-[var(--color-red)] rounded-full px-4 py-1.5">
              Sport · Navétane
            </span>
            <h3 className="mt-5 font-display text-2xl sm:text-3xl font-extrabold text-[var(--color-blue-dark)]">
              MBAOR TV couvre les matchs Navétane — Zone 7, Bandègne Olof
            </h3>
            <p className="mt-4 text-[var(--color-mist)] leading-relaxed">
              Notre équipe est sur le terrain pour suivre en direct la compétition Navétane au
              stade municipal de Bandègne, avec reportages, interviews et résultats à retrouver
              sur notre chaîne.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-[var(--color-ink)]">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-[var(--color-blue)]" />
                Stade municipal de Bandègne
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} className="text-[var(--color-blue)]" />
                De 16h à 19h
              </span>
            </div>

            <button className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-blue)] text-white font-semibold px-6 py-3 hover:brightness-110 transition">
              Voir le reportage
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

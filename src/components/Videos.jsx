import { TvMinimalPlay, ExternalLink } from "lucide-react";
import siteConfig from "../config";
import { SectionHeading } from "./Categories";

export default function Videos() {
  return (
    <section id="videos" className="brand-mesh py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Nos vidéos"
          title="Retrouvez toutes nos vidéos sur YouTube"
          align="center"
          light
        />

        <div className="mt-12 rounded-3xl overflow-hidden card-shadow border border-white/10">
          <div className="relative aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=UUbqMwK5JDBwK4c2-XynCqag"
              title="Dernières vidéos MBAOR TV"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-white/10 border border-white/15 px-6 py-5 backdrop-blur">
          <p className="text-sm text-white/80">
            Abonnez-vous et activez la cloche 🔔 pour ne rien manquer.
          </p>
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-red)] text-white text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition whitespace-nowrap"
          >
            <TvMinimalPlay size={16} />
            Voir la chaîne
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

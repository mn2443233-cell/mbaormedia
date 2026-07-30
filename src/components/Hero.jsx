import { TvMinimalPlay, MessageCircle, Play } from "lucide-react";
import siteConfig from "../config";

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden brand-mesh pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white bg-[var(--color-red)] rounded-full px-4 py-1.5">
            Groupe de presse Mbaor Media
          </span>

          <h1 className="mt-6 font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08]">
            MBAOR TV — <span className="text-[var(--color-gold)]">le miroir</span> du Mbaor
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Information, interviews, sport, culture et religion : suivez l'actualité de Bandègne
            Olof et du Mbaor, racontée par ceux qui y vivent.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={siteConfig.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-red)] text-white font-semibold px-7 py-3.5 hover:brightness-110 transition"
            >
              <TvMinimalPlay size={18} />
              Voir nos vidéos
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white font-semibold px-7 py-3.5 hover:bg-white/10 transition"
            >
              <MessageCircle size={18} />
              Nous contacter
            </a>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden card-shadow aspect-[4/5] bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={siteConfig.promoVideoUrl}
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 photo-overlay" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 text-white">
            <span className="w-11 h-11 rounded-full bg-white/15 border border-white/30 flex items-center justify-center backdrop-blur">
              <Play size={18} className="ml-0.5" />
            </span>
            <div>
              <p className="text-sm font-semibold">Extrait de nos reportages</p>
              <p className="text-xs text-white/70">Retrouvez toutes nos vidéos sur YouTube</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

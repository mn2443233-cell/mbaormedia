import { TvMinimalPlay, MessageCircle, Share2 } from "lucide-react";
import siteConfig from "../config";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Rubriques", href: "#rubriques" },
  { label: "À la une", href: "#a-la-une" },
  { label: "Vidéos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: TvMinimalPlay, href: siteConfig.youtubeUrl, label: "YouTube" },
  { icon: MessageCircle, href: siteConfig.whatsappUrl, label: "WhatsApp" },
  { icon: Share2, href: siteConfig.facebookUrl, label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-3 gap-10">
        <div>
          <a href="#accueil" className="flex items-center gap-2.5">
            <img src="/images/logo-mbaor.jpg" alt="MBAOR TV" className="w-10 h-10 rounded-lg object-cover" />
            <span className="font-display font-extrabold text-white text-lg">
              MBAOR <span className="text-[var(--color-red)]">TV</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
            {siteConfig.tagline} — l'information, le sport, la culture et la religion du Mbaor,
            racontés par ceux qui y vivent.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-gold)]">
            Navigation
          </h4>
          <ul className="mt-4 space-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-gold)]">
            Réseaux sociaux
          </h4>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-14 text-center text-xs text-white/40">
        © 2026 {siteConfig.siteName} — Tous droits réservés. ·{" "}
        <a href="#/admin" className="hover:text-white/70 transition-colors">
          Espace administrateur
        </a>
      </p>
    </footer>
  );
}

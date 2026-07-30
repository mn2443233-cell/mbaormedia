import { useEffect, useState } from "react";
import { Menu, X, TvMinimalPlay } from "lucide-react";
import siteConfig from "../config";

const LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Actualités", href: "#actualites" },
  { label: "Rubriques", href: "#rubriques" },
  { label: "Événements", href: "#evenements" },
  { label: "Programmes", href: "#programmes" },
  { label: "Vidéos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md py-2" : "py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2.5">
          <img src="/images/logo-mbaor.jpg" alt="MBAOR TV" className="w-11 h-11 rounded-lg object-cover" />
          <span>
            <span className="block font-display font-extrabold text-[var(--color-blue-dark)] leading-none text-lg">
              MBAOR <span className="text-[var(--color-red)]">TV</span>
            </span>
            <span className="block text-[10px] tracking-wide text-[var(--color-mist)]">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-[var(--color-ink)]">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-[var(--color-red)] transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[var(--color-red)] text-white text-sm font-semibold px-5 py-2.5 hover:brightness-110 transition-colors"
        >
          <TvMinimalPlay size={17} />
          S'abonner
        </a>

        <button
          className="lg:hidden text-[var(--color-blue-dark)]"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mt-3 mx-6 rounded-2xl border border-[var(--color-ink)]/10 px-6 py-6 flex flex-col gap-4 bg-white">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[var(--color-ink)] text-base font-medium hover:text-[var(--color-red)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-red)] text-white font-semibold px-5 py-3"
          >
            <TvMinimalPlay size={17} />
            S'abonner
          </a>
        </div>
      )}
    </header>
  );
}

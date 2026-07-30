import { useState } from "react";
import { Phone, Mail, MessageCircle, TvMinimalPlay, Send, CheckCircle2, Share2 } from "lucide-react";
import siteConfig from "../config";
import { SectionHeading } from "./Categories";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-[var(--color-paper)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Contact" title="Parlez-nous de votre actualité" align="center" />

        <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="rounded-2xl bg-white card-shadow border border-black/5 p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-[var(--color-blue-dark)] text-lg font-bold">
                Restons en contact
              </h3>
              <p className="mt-2 text-sm text-[var(--color-mist)] leading-relaxed">
                Une information, un événement à couvrir ? Écrivez-nous ou appelez directement.
              </p>

              <div className="mt-6 space-y-3 text-sm text-[var(--color-ink)]">
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-[var(--color-blue)]" /> {siteConfig.phoneMain}
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-[var(--color-blue)]" /> {siteConfig.emailAddress}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: MessageCircle, href: siteConfig.whatsappUrl, label: "WhatsApp" },
                { icon: TvMinimalPlay, href: siteConfig.youtubeUrl, label: "YouTube" },
                { icon: Share2, href: siteConfig.facebookUrl, label: "Facebook" },
                { icon: Mail, href: `mailto:${siteConfig.emailAddress}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-[var(--color-blue-dark)] hover:bg-[var(--color-blue)] hover:text-white hover:border-transparent transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl bg-white card-shadow border border-black/5 p-8 grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Nom" id="name" type="text" required />
              <Field label="Email" id="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Téléphone" id="phone" type="tel" />
              <Field label="Sujet" id="subject" type="text" />
            </div>
            <label className="grid gap-2 text-sm text-[var(--color-mist)]">
              Message
              <textarea
                id="message"
                required
                rows={5}
                className="rounded-xl bg-[var(--color-paper)] border border-black/10 px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-mist)]/60 focus:outline-none focus:border-[var(--color-blue)] resize-none"
                placeholder="Décrivez votre demande…"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-red)] text-white font-semibold px-7 py-3.5 hover:brightness-110 transition"
            >
              {sent ? <CheckCircle2 size={18} /> : <Send size={17} />}
              {sent ? "Message envoyé" : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type, required }) {
  return (
    <label htmlFor={id} className="grid gap-2 text-sm text-[var(--color-mist)]">
      {label}
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="rounded-xl bg-[var(--color-paper)] border border-black/10 px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-mist)]/60 focus:outline-none focus:border-[var(--color-blue)]"
      />
    </label>
  );
}

// Convertit un lien YouTube (watch, youtu.be ou embed) en URL d'intégration.
// Retourne null si ce n'est pas un lien YouTube reconnu.
export function toYoutubeEmbed(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
      if (u.pathname.startsWith("/embed/")) return url;
      if (u.pathname.startsWith("/shorts/")) {
        return `https://www.youtube.com/embed/${u.pathname.split("/shorts/")[1]}`;
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function isDirectVideoFile(url) {
  return /\.(mp4|webm|ogg)$/i.test(url || "");
}

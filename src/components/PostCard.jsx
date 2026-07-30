import { CalendarDays, MapPin, Play } from "lucide-react";
import { toYoutubeEmbed, isDirectVideoFile } from "../utils/video";

function formatDate(value) {
  if (!value) return null;
  try {
    const date = value.toDate ? value.toDate() : new Date(value);
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
  } catch {
    return null;
  }
}

export default function PostCard({ post }) {
  const embedUrl = toYoutubeEmbed(post.videoUrl);
  const directVideo = isDirectVideoFile(post.videoUrl);
  const date = formatDate(post.eventDate || post.createdAt);

  return (
    <article className="rounded-2xl bg-white card-shadow border border-black/5 overflow-hidden flex flex-col">
      <div className="relative aspect-video bg-[var(--color-blue-dark)]">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={post.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : directVideo ? (
          <video controls className="absolute inset-0 w-full h-full object-cover" src={post.videoUrl} />
        ) : post.imageUrl ? (
          <img src={post.imageUrl} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-white/40">
            <Play size={28} />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {post.category && (
          <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-red)]">
            {post.category}
          </span>
        )}
        <h3 className="mt-2 font-display font-bold text-[var(--color-blue-dark)] text-lg leading-snug">
          {post.title}
        </h3>
        {post.description && (
          <p className="mt-2 text-sm text-[var(--color-mist)] leading-relaxed flex-1">{post.description}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-4 text-xs text-[var(--color-ink)]/70">
          {date && (
            <span className="flex items-center gap-1.5">
              <CalendarDays size={13} className="text-[var(--color-blue)]" />
              {date}
            </span>
          )}
          {post.location && (
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-[var(--color-blue)]" />
              {post.location}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

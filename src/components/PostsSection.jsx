import { Loader2, Radio } from "lucide-react";
import usePosts from "../hooks/usePosts";
import { isFirebaseConfigured } from "../firebase";
import PostCard from "./PostCard";
import { SectionHeading } from "./Categories";

export default function PostsSection({ id, type, eyebrow, title, description, emptyMessage, bg = "bg-white" }) {
  const { posts, loading } = usePosts(type);

  return (
    <section id={id} className={`${bg} py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          {isFirebaseConfigured && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-red)]">
              <Radio size={13} className="animate-pulse" />
              Mis à jour en direct
            </span>
          )}
        </div>

        {!isFirebaseConfigured ? (
          <p className="mt-10 text-sm text-[var(--color-mist)] rounded-2xl border border-dashed border-black/15 p-6">
            Cette section affichera automatiquement le contenu publié par l'administrateur dès que
            la configuration Firebase sera renseignée (voir <code>ADMIN.md</code>).
          </p>
        ) : loading ? (
          <div className="mt-10 flex items-center gap-2 text-sm text-[var(--color-mist)]">
            <Loader2 size={16} className="animate-spin" />
            Chargement…
          </div>
        ) : posts.length === 0 ? (
          <p className="mt-10 text-sm text-[var(--color-mist)]">{emptyMessage}</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

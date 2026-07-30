import PostsSection from "./PostsSection";

export default function Actualites() {
  return (
    <PostsSection
      id="actualites"
      type="actualite"
      eyebrow="Actualités"
      title="Ce qui se passe partout dans le pays"
      description="Publié directement par la rédaction — visible instantanément par tous les visiteurs."
      emptyMessage="Aucune actualité publiée pour le moment."
      bg="bg-[var(--color-paper)]"
    />
  );
}

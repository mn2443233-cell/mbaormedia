import PostsSection from "./PostsSection";

export default function Programmes() {
  return (
    <PostsSection
      id="programmes"
      type="programme"
      eyebrow="Programmes"
      title="Nos émissions et rendez-vous réguliers"
      emptyMessage="Aucun programme publié pour le moment."
      bg="bg-[var(--color-paper)]"
    />
  );
}

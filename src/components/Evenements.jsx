import PostsSection from "./PostsSection";

export default function Evenements() {
  return (
    <PostsSection
      id="evenements"
      type="evenement"
      eyebrow="Événements"
      title="Nos prochains événements"
      description="Navétanes, cérémonies, rencontres locales — tout ce que MBAOR TV couvre sur le terrain."
      emptyMessage="Aucun événement à venir pour le moment."
      bg="bg-white"
    />
  );
}

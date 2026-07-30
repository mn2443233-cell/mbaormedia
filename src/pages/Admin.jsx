import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { LogOut, Trash2, Loader2, ShieldAlert, Send } from "lucide-react";
import { auth, isFirebaseConfigured, db } from "../firebase";
import usePosts from "../hooks/usePosts";
import siteConfig from "../config";

const TYPES = [
  { value: "actualite", label: "Actualité" },
  { value: "evenement", label: "Événement" },
  { value: "programme", label: "Programme" },
];

const EMPTY_FORM = {
  type: "actualite",
  title: "",
  description: "",
  category: "",
  videoUrl: "",
  imageUrl: "",
  eventDate: "",
  location: "",
};

export default function Admin() {
  if (!isFirebaseConfigured) return <NotConfigured />;
  return <AdminGate />;
}

function NotConfigured() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)] flex items-center justify-center px-6">
      <div className="max-w-md text-center bg-white card-shadow rounded-2xl p-8 border border-black/5">
        <ShieldAlert size={32} className="mx-auto text-[var(--color-red)]" />
        <h1 className="mt-4 font-display font-bold text-lg text-[var(--color-blue-dark)]">
          Firebase n'est pas encore configuré
        </h1>
        <p className="mt-2 text-sm text-[var(--color-mist)]">
          Renseignez <code>firebaseConfig</code> dans <code>src/config.js</code>. Le guide complet
          se trouve dans <code>ADMIN.md</code> à la racine du projet.
        </p>
        <a href="#/" className="mt-5 inline-block text-sm font-semibold text-[var(--color-blue)] hover:underline">
          ← Retour au site
        </a>
      </div>
    </div>
  );
}

function AdminGate() {
  const [user, setUser] = useState(undefined); // undefined = chargement

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-[var(--color-blue)]" size={28} />
      </div>
    );
  }

  return user ? <Dashboard /> : <Login />;
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("Email ou mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)] flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white card-shadow rounded-2xl p-8 border border-black/5"
      >
        <img src="/images/logo-mbaor.jpg" alt={siteConfig.siteName} className="w-14 h-14 rounded-xl mx-auto" />
        <h1 className="mt-4 text-center font-display font-bold text-lg text-[var(--color-blue-dark)]">
          Espace administrateur
        </h1>
        <p className="text-center text-sm text-[var(--color-mist)] mt-1">{siteConfig.siteName}</p>

        <label className="block mt-6 text-sm text-[var(--color-mist)]">
          Email
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-blue)]"
          />
        </label>
        <label className="block mt-4 text-sm text-[var(--color-mist)]">
          Mot de passe
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-blue)]"
          />
        </label>

        {error && <p className="mt-3 text-sm text-[var(--color-red)]">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-full bg-[var(--color-red)] text-white font-semibold py-3 hover:brightness-110 transition disabled:opacity-60"
        >
          {loading ? "Connexion…" : "Se connecter"}
        </button>

        <a href="#/" className="block mt-4 text-center text-sm text-[var(--color-mist)] hover:text-[var(--color-blue)]">
          ← Retour au site
        </a>
      </form>
    </div>
  );
}

function Dashboard() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const { posts, loading } = usePosts(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    try {
      await addDoc(collection(db, "posts"), {
        ...form,
        eventDate: form.eventDate ? new Date(form.eventDate) : null,
        createdAt: serverTimestamp(),
      });
      setForm(EMPTY_FORM);
      setMessage("Publié ✓ — visible immédiatement sur le site.");
    } catch {
      setMessage("Erreur lors de la publication. Vérifiez votre connexion.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Supprimer cette publication ?")) return;
    await deleteDoc(doc(db, "posts", id));
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <header className="bg-[var(--color-blue-dark)] py-4">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span className="font-display font-bold text-white">Tableau de bord — {siteConfig.siteName}</span>
          <div className="flex items-center gap-4">
            <a href="#/" className="text-sm text-white/70 hover:text-white">
              Voir le site
            </a>
            <button
              onClick={() => signOut(auth)}
              className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-white"
            >
              <LogOut size={15} />
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <form onSubmit={handleSubmit} className="bg-white card-shadow rounded-2xl border border-black/5 p-6 h-fit">
          <h2 className="font-display font-bold text-[var(--color-blue-dark)]">Nouvelle publication</h2>

          <label className="block mt-5 text-sm text-[var(--color-mist)]">
            Type
            <select
              value={form.type}
              onChange={(e) => update("type", e.target.value)}
              className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)]"
            >
              {TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block mt-4 text-sm text-[var(--color-mist)]">
            Titre
            <input
              required
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)]"
            />
          </label>

          <label className="block mt-4 text-sm text-[var(--color-mist)]">
            Description
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)] resize-none"
            />
          </label>

          <label className="block mt-4 text-sm text-[var(--color-mist)]">
            Catégorie <span className="text-black/30">(ex : Sport, Religion…)</span>
            <input
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)]"
            />
          </label>

          <label className="block mt-4 text-sm text-[var(--color-mist)]">
            Lien vidéo <span className="text-black/30">(YouTube ou .mp4, optionnel)</span>
            <input
              value={form.videoUrl}
              onChange={(e) => update("videoUrl", e.target.value)}
              className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)]"
            />
          </label>

          <label className="block mt-4 text-sm text-[var(--color-mist)]">
            Lien image <span className="text-black/30">(optionnel si vidéo)</span>
            <input
              value={form.imageUrl}
              onChange={(e) => update("imageUrl", e.target.value)}
              className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)]"
            />
          </label>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <label className="text-sm text-[var(--color-mist)]">
              Date <span className="text-black/30">(événement)</span>
              <input
                type="date"
                value={form.eventDate}
                onChange={(e) => update("eventDate", e.target.value)}
                className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)]"
              />
            </label>
            <label className="text-sm text-[var(--color-mist)]">
              Lieu
              <input
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2.5 text-[var(--color-ink)]"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-red)] text-white font-semibold py-3 hover:brightness-110 transition disabled:opacity-60"
          >
            <Send size={16} />
            {submitting ? "Publication…" : "Publier"}
          </button>
          {message && <p className="mt-3 text-sm text-[var(--color-blue)]">{message}</p>}
        </form>

        <div>
          <h2 className="font-display font-bold text-[var(--color-blue-dark)]">
            Publications ({posts.length})
          </h2>
          {loading ? (
            <p className="mt-4 text-sm text-[var(--color-mist)]">Chargement…</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="bg-white rounded-xl border border-black/5 px-4 py-3 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase text-[var(--color-red)]">
                      {TYPES.find((t) => t.value === post.type)?.label || post.type}
                    </p>
                    <p className="text-sm font-medium text-[var(--color-ink)] truncate">{post.title}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(post.id)}
                    aria-label="Supprimer"
                    className="shrink-0 text-[var(--color-mist)] hover:text-[var(--color-red)]"
                  >
                    <Trash2 size={17} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

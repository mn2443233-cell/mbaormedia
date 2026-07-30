import { useEffect, useState } from "react";
import { collection, query, orderBy, where, onSnapshot } from "firebase/firestore";
import { db, isFirebaseConfigured } from "../firebase";

// Écoute en temps réel la collection "posts". Chaque changement fait par
// l'administrateur (ajout, modification, suppression) se reflète
// instantanément chez tous les visiteurs, sans recharger la page.
export default function usePosts(type) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return;
    }

    const base = collection(db, "posts");
    const q = type
      ? query(base, where("type", "==", type), orderBy("createdAt", "desc"))
      : query(base, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [type]);

  return { posts, loading, error };
}

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import siteConfig from "./config";

// Évite une double initialisation lors du hot-reload en développement.
const app = getApps().length ? getApps()[0] : initializeApp(siteConfig.firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Vrai tant que la config Firebase n'a pas été renseignée dans config.js.
export const isFirebaseConfigured =
  !!siteConfig.firebaseConfig?.apiKey && siteConfig.firebaseConfig.apiKey !== "VOTRE_API_KEY";

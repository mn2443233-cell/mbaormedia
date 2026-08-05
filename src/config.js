// ============================================================
// CONFIGURATION DU SITE — MBAOR TV
// Modifiez toutes les valeurs ci-dessous pour mettre à jour les liens,
// vidéos et coordonnées sans toucher aux autres fichiers.
// ============================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ============================================================
// CONFIGURATION FIREBASE — publication en temps réel
// ============================================================
// Ces informations viennent de votre projet Firebase (gratuit).
// Guide complet : voir ADMIN.md à la racine du projet.
// Pour changer de projet Firebase, modifiez UNIQUEMENT les valeurs
// ci-dessous (il n'existe qu'un seul bloc de config dans tout le fichier).
// 1. Allez sur https://console.firebase.google.com
// 2. Créez un projet, activez "Firestore Database" et
//    "Authentication > Email/Password"
// 3. Dans "Paramètres du projet > Général", copiez la config web
//    ici.
export const firebaseConfig = {
  apiKey: "AIzaSyB85UPVLCMxFoQJoODRGRH4oRIIK3sdM7Y",
  authDomain: "mbaortv-fdaae.firebaseapp.com",
  projectId: "mbaortv-fdaae",
  storageBucket: "mbaortv-fdaae.firebasestorage.app",
  messagingSenderId: "333688364482",
  appId: "1:333688364482:web:da4e1c0a6bc2aa70aeca5b",
  measurementId: "G-C8JBM0N626",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

const siteConfig = {
  siteName: "MBAOR TV",
  tagline: "Le miroir du Mbaor",

  // --- Chaîne YouTube ---
  youtubeUrl: "https://youtube.com/@mbaor-tv3812",
  // Lien d'intégration pour la playlist "dernières vidéos" (mis à jour
  // automatiquement par YouTube à partir de l'ID de la chaîne).
  youtubeEmbedPlaylist:
    "https://www.youtube.com/embed/videoseries?list=UUbqMwK5JDBwK4c2-XynCqag",

  // --- Vidéo de présentation (promo locale, remplaçable) ---
  // Utilisez soit un fichier local dans /public/video, soit un lien YouTube.
  promoVideoUrl: "/video/promo.mp4",

  // --- Contact ---
  whatsappUrl: "https://wa.me/qr/OOBHHU6GCF6HB1",
  phoneMain: "76 460 13 31",
  phoneThiaryMbaor: "78 730 63 35",
  emailAddress: "contact@mbaortv.sn",

  // --- Réseaux sociaux (à compléter) ---
  facebookUrl: "MON_LIEN_FACEBOOK",
  tiktokUrl: "MON_LIEN_TIKTOK",

  // --- Lien vers une autre plateforme (ex: site du groupe de presse) ---
  platformUrl: "MON_LIEN_PLATEFORME_ICI",

  // --- Rubriques éditoriales ---
  categories: [
    { title: "Information", desc: "L'actualité locale et nationale, vérifiée et expliquée." },
    { title: "Interview", desc: "Des échanges avec les acteurs qui font vivre le Mbaor." },
    { title: "Entretien", desc: "Des rencontres approfondies avec la communauté." },
    { title: "Sport", desc: "Navétanes, football local et grands rendez-vous sportifs." },
    { title: "Culture", desc: "Traditions, événements et vie culturelle du terroir." },
    { title: "Religion", desc: "Actualités religieuses, Ramadan, Touba et grands rendez-vous." },
  ],

  // --- Statistiques (facilement modifiables) ---
  stats: [
    { value: 10, suffix: "K+", label: "Abonnés YouTube" },
    { value: 500, suffix: "+", label: "Vidéos publiées" },
    { value: 6, suffix: "", label: "Rubriques couvertes" },
    { value: 100, suffix: "%", label: "Ancré dans le Mbaor" },
  ],
};

export default siteConfig;

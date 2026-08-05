import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Config Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyB85UPVLCmXFoQJo0DRGRH4oRIIK3sdM7Y",
  authDomain: "mbaortv-fdaae.firebaseapp.com",
  projectId: "mbaortv-fdaae",
  storageBucket: "mbaortv-fdaae.firebasestorage.app",
  messagingSenderId: "333688364482",
  appId: "1:333688364482:web:da4e1c0a6bc2aa70aeca5b",
  measurementId: "G-C8JBM0N626"
};

// Initialisation Firebase
export const app = initializeApp(firebaseConfig);

// Configuration générale du site
const siteConfig = {
  siteName: "MBAOR TV",
  tagline: "Le miroir du Mbaor",
  youtubeUrl: "https://youtube.com/@mbaor-tv3812",
  youtubeEmbedPlaylist: "https://www.youtube.com/embed/videoseries?list=UUbqMwK5JDBwK4c2-XynCqag",
  promoVideoUrl: "/video/promo.mp4",
  whatsappUrl: "https://wa.me/qr/OOBHHU6GCF6HB1",
  phoneMain: "76 460 13 31",
  phoneThiaryMbaor: "78 730 63 35",
  emailAddress: "contact@mbaortv.sn",
  firebase: firebaseConfig
};

export default siteConfig;

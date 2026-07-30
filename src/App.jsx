import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Actualites from "./components/Actualites";
import Featured from "./components/Featured";
import Evenements from "./components/Evenements";
import Programmes from "./components/Programmes";
import Videos from "./components/Videos";
import Stats from "./components/Stats";
import Partner from "./components/Partner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Actualites />
        <Featured />
        <Evenements />
        <Programmes />
        <Videos />
        <Stats />
        <Partner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

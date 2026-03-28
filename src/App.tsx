import Header from "./components/Header";
import Hero from "./components/Hero";
import Screenshot from "./components/Screenshot";
import Methodology from "./components/Methodology";
import Features from "./components/Features";
import Lessons from "./components/Lessons";
import Keybindings from "./components/Keybindings";
import Platforms from "./components/Platforms";
import Install from "./components/Install";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Screenshot />
        <Methodology />
        <Features />
        <Lessons />
        <Keybindings />
        <Platforms />
        <Install />
      </main>
      <Footer />
    </div>
  );
}

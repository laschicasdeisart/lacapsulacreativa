import { SoundProvider } from "./hooks/SoundContext";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import SoundToggle from "./components/SoundToggle";
import Hero from "./components/Hero";
import Pain from "./components/Pain";
import Combo from "./components/Combo";
import Offer from "./components/Offer";
import Numbers from "./components/Numbers";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Closing from "./components/Closing";

function BrandMark() {
  return (
    <a href="#hero" className="brand-mark" data-cursor="link">
      La Cápsula Creativa
    </a>
  );
}

function App() {
  return (
    <SoundProvider>
      <div className="noise" />
      <Cursor />
      <ScrollProgress />
      <BrandMark />
      <SoundToggle />
      <main>
        <Hero />
        <Pain />
        <Combo />
        <Offer />
        <Numbers />
        <Testimonials />
        <FAQ />
        <Closing />
      </main>
    </SoundProvider>
  );
}

export default App;

import { SoundProvider } from "./hooks/SoundContext";
import { SlideDeckProvider } from "./hooks/SlideDeckContext";
import Deck from "./components/Deck";
import SoundToggle from "./components/SoundToggle";
import Hero from "./components/Hero";
import Pain from "./components/Pain";
import Combo from "./components/Combo";
import Offer from "./components/Offer";
import Numbers from "./components/Numbers";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Closing from "./components/Closing";
import { TOTAL_SLIDES } from "./constants";

function App() {
  return (
    <SoundProvider>
      <SlideDeckProvider total={TOTAL_SLIDES}>
        <div className="noise" />
        <SoundToggle />
        <Deck>
          <Hero />
          <Pain />
          <Combo />
          <Offer />
          <Numbers />
          <Testimonials />
          <FAQ />
          <Closing />
        </Deck>
      </SlideDeckProvider>
    </SoundProvider>
  );
}

export default App;

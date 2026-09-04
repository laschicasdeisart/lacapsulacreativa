import { SoundProvider } from "./hooks/SoundContext";
import { SlideDeckProvider, useSlideDeck } from "./hooks/SlideDeckContext";
import { useSound } from "./hooks/SoundContext";
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

function BrandMark() {
  const { goTo } = useSlideDeck();
  const { click } = useSound();
  return (
    <button
      type="button"
      className="brand-mark"
      onClick={() => {
        click();
        goTo(0);
      }}
    >
      La Cápsula Creativa
    </button>
  );
}

function App() {
  return (
    <SoundProvider>
      <SlideDeckProvider total={TOTAL_SLIDES}>
        <div className="noise" />
        <BrandMark />
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

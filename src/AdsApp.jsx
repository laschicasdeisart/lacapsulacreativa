import { SoundProvider } from "./hooks/SoundContext";
import ScrollDeck from "./components/ScrollDeck";
import SoundToggle from "./components/SoundToggle";
import Hero from "./components/Hero";
import Pain from "./components/Pain";
import Combo from "./components/Combo";
import ForYou from "./components/ForYou";
import Offer from "./components/Offer";
import Numbers from "./components/Numbers";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Closing from "./components/Closing";

// Misma landing que App.jsx, mismo contenido y orden, pero en scroll
// vertical continuo en vez de carrusel con flechas — pensada para tráfico
// frío de campañas de pago (Meta Ads), que no navega con clics.
function AdsApp() {
  return (
    <SoundProvider>
      <div className="noise" />
      <SoundToggle />
      <ScrollDeck>
        <Hero />
        <Pain />
        <Combo />
        <ForYou />
        <Offer />
        <Numbers />
        <Testimonials />
        <FAQ />
        <Closing />
      </ScrollDeck>
    </SoundProvider>
  );
}

export default AdsApp;

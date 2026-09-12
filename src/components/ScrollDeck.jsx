// Contenedor de la landing en modo scroll continuo (versión ads): apila las
// mismas secciones que el carrusel pero en flujo de documento normal, sin
// flechas ni puntos de navegación — el usuario avanza haciendo scroll.
export default function ScrollDeck({ children }) {
  return (
    <div className="deck deck--scroll">
      <div className="deck__track deck__track--scroll">{children}</div>
    </div>
  );
}

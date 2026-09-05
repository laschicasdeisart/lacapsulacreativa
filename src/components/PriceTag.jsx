// Etiqueta de precio tipo pegatina, para colgar junto a los botones que
// llevan a comprar (no en los botones informativos del Combo).
export default function PriceTag({ className = "" }) {
  return (
    <span className={`price-tag ${className}`}>
      Desde 18,93€/mes <em>(menos de 20€/mes — menos que la mochila nueva)</em>
    </span>
  );
}

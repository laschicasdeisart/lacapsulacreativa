import { PRICING } from "../constants";

// Etiqueta de precio tipo pegatina, para colgar junto a los botones que
// llevan a comprar (no en los botones informativos del Combo).
export default function PriceTag({ className = "" }) {
  return (
    <span className={`price-tag ${className}`}>
      Desde {PRICING.standard.eurMonthlyApprox}€/mes aprox.{" "}
      <em>
        (cobro real en USD: ${PRICING.standard.usdMonthly}/mes — menos que la mochila nueva)
      </em>
    </span>
  );
}

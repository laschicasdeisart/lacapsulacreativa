import { CLARITY_PROJECT_ID } from "../constants";

// Igual que el píxel de Meta: se inyecta bajo demanda, solo tras
// consentimiento, para no plantar cookies de analítica antes de aceptar.
export function loadClarity() {
  if (typeof window === "undefined" || window.clarity) return;

  /* eslint-disable */
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
  /* eslint-enable */
}

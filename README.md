# PizzaCalc

PizzaCalc wird als portable statische Webanwendung neu aufgebaut.

Die Ziel-Domain ist [pizzacalc.teutsch.it](https://pizzacalc.teutsch.it).

Dieses Projekt steht unter der [Mozilla Public License 2.0](https://www.mozilla.org/MPL/2.0/) (MPL-2.0). Der Rechner ist noch nicht fertig.

## Orientierung für ChatGPT und Entwicklung

| Frage | Quellpfade |
| --- | --- |
| Wo startet die Web-App? | [index.html](index.html), [src/main.ts](src/main.ts) |
| Wo liegen Berechnung und Tests? | [src/core.ts](src/core.ts), [src/core.test.ts](src/core.test.ts) |
| Wo liegt die Sharing-Logik? | [src/share.ts](src/share.ts), [src/share.test.ts](src/share.test.ts) |
| Wo werden Layout und CSS geprüft? | [src/layout.test.ts](src/layout.test.ts), [src/styles.css](src/styles.css), [src/overrides.css](src/overrides.css) |
| Welche Befehle und Dependencies gelten? | [package.json](package.json), [package-lock.json](package-lock.json) |
| Welche Build-/Portabilitätsprüfung gibt es? | [vite.config.ts](vite.config.ts), [scripts/portability-check.mjs](scripts/portability-check.mjs) |
| Wie wird die Pages-Seite gebaut? | [.github/workflows/pages.yml](.github/workflows/pages.yml) |

**Lokaler Prüfweg laut `package.json`:** In einer geeigneten Node.js-/npm-Umgebung `npm ci` und dann `npm run check` (Typecheck, Tests, Build, Portabilitätsprüfung). Für die Entwicklungsansicht `npm run dev`. Diese Befehle wurden durch die Dokumentationsplanung **nicht ausgeführt**.

**Statusgrenze:** Code und Tests sind für das Implementierungsverhalten maßgeblich. Ein GitHub-Commit oder ein Markdown-Linktest ist kein Nachweis, dass die öffentliche Website bereits diesen Stand ausliefert.

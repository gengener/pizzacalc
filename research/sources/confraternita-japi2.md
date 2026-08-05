---
source_id: source/confraternita-japi2-family/1
status: IMPORTED_SUMMARY
canonical: false
source_class: P
updated: 2026-08-05
---

# Quellenkarte – Confraternita/Japi2-Familie

## Gegenstand

Öffentlich genutzte Praxisrechner-Familie zur Hefedosierung für Pizzateig. Die Kernlogik wurde im kanonischen PizzaCalc-Forschungsbestand durch Live-Ausgaben, Codeprüfung und ein unabhängiges Rezeptbeispiel rekonstruiert und gegengeprüft.

## Herkunft dieses Pilotdokuments

Dieses Dokument ist eine eigene Zusammenfassung aus dem bestehenden PizzaCalc-Forschungsstand, insbesondere:

- `03-RESEARCH-REGISTER.md`, Option E und Japi2-Auswertung;
- `07-PAKET-2-WEB-ONLY-SYNTHESE-2026-07-30.md`;
- genehmigte Einordnung `DEC-044`.

Die Originalquellen und die vollständige Rekonstruktion werden in diesem Pilot nicht als fremde Volltexte dupliziert.

## Reproduzierte Eigenschaften

- Geschlossene, technisch reproduzierbare Praxisformel.
- Berücksichtigt Hydration, Salz, Fett, Temperatur, Zeit, Kühlschrankzeit und Teigart.
- Kühlschrankstunden werden pauschal als zehn Prozent einer Warmstunde gewichtet; eine konkrete Kühlschranktemperatur fließt nicht als eigener Zustand ein.
- Die veröffentlichte Textfassung nennt die für die technische Reproduktion verwendete Raumtemperatur von `17 °C` nicht ausdrücklich. Dieser Wert ist daher Reproduktionsparameter und kein belegter Rezeptmesswert.
- Die Konstanten und Exponenten besitzen in den geprüften Quellen keine veröffentlichte wissenschaftliche Herleitung, Parameterschätzung oder Unsicherheitsangabe.
- Die Zutaten-Normalisierung weicht von der genehmigten PizzaCalc-Grundrechnung ab, weil Hefe nicht im Gesamtfaktor liegt.
- Die offene Pabiak-Implementierung gehört algebraisch zur selben Modellfamilie und zählt nicht als unabhängige Bestätigung.

## Zulässige Evidenzrolle

- externe Praxisbenchmark;
- Plausibilitäts- und Regressionstest;
- Hypothesengenerator;
- dokumentierter Vergleich für Abweichungen zu späteren PizzaCalc-Modellen.

## Nicht zulässige Evidenzrolle

- wissenschaftliche Wahrheit;
- alleinige Kalibrier- oder Trainingsquelle;
- unabhängige Validierung durch Varianten derselben Modellfamilie;
- unveränderte Übernahme als PizzaCalc-Produktionsmodell.

## Provenienzregel

Jede spätere Nutzung muss auf die kanonische Rekonstruktion und die dort dokumentierten öffentlichen Fundstellen zurückverweisen. Aussagen aus dieser Quellenkarte dürfen nicht als neue unabhängige Quelle zitiert werden.

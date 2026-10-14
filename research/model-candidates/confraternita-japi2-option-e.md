---
model_id: external-benchmark/confraternita-japi2/1
model_family: confraternita-japi2-pabiak
status: BENCHMARKED
product_status: NOT_APPROVED
canonical: false
updated: 2026-08-05
---

# Modellkarte – Confraternita/Japi2, Option E

## Beabsichtigte Rolle

Externe Praxisbenchmark und Hypothesengenerator für den Vergleich späterer PizzaCalc-Hefemodelle.

## Nicht beabsichtigte Rolle

- kein Default;
- keine wissenschaftlich validierte Hefeberechnung;
- kein Ersatz der Canotto-Praxisreferenz;
- keine alleinige Kalibrier- oder Validierungsquelle;
- keine automatische Produktempfehlung.

## Eingabedimensionen

Die rekonstruierte Familie verarbeitet beziehungsweise berücksichtigt:

- Teigmenge oder Mehlbasis;
- Hydration;
- Salz;
- Fett;
- Hefetyp beziehungsweise Umrechnung;
- Raumtemperatur;
- warme Zeit;
- Kühlschrankzeit;
- Teigart beziehungsweise Verfahrensfaktor.

Die vollständige Gleichung und die exakten Parameter verbleiben bis zur kontrollierten Übertragung in der kanonischen Rekonstruktionsdokumentation.

## Bekannte Modellannahmen

- Kühlschrankzeit wird pauschal als 10 % einer Warmstunde gewichtet.
- Kühlschranktemperatur und Zustandsfortsetzung werden nicht eigenständig modelliert.
- Die Parameter besitzen keine veröffentlichte Unsicherheitsangabe.
- Die Zutaten-Normalisierung ist nicht identisch mit PizzaCalc, weil Hefe nicht im Gesamtfaktor liegt.

## Evidenz und Provenienz

- Evidenzklasse: öffentliches Praxisartefakt (`P`) plus PizzaCalc-Ableitungen (`H`).
- Rekonstruktion: abgeschlossen und gegengeprüft.
- Unabhängigkeit: Pabiak ist dieselbe Modellfamilie und kein unabhängiger Beleg.
- Genehmigte Forschungsrolle: Option E nach `DEC-044`.

## Gültigkeits- und Nutzungsgrenze

Die technische Reproduzierbarkeit belegt nur, dass die Methode deterministisch nachgebildet werden kann. Sie belegt nicht, dass das Ergebnis für reale Teigreife oder verschiedene Temperaturphasen richtig ist.

## Erforderliche Prüfungen vor einer experimentellen Produktansicht

1. Formel und Parameter versioniert in ein isoliertes Benchmarkmodul übertragen.
2. Gemeinsame Fallmatrix mit der bestehenden Canotto-Referenz und späteren Kandidaten definieren.
3. Abweichungen bei Gesamtteigdefinition und Hefe-Normalisierung separat ausweisen.
4. Ergebnis deutlich als „externer Praxisvergleich“ kennzeichnen.
5. Keine Empfehlung oder Rangfolge ausgeben.
6. Methode und Version in reproduzierbaren Vergleichslinks speichern.
7. UX prüfen: Erkenntnisgewinn muss größer sein als das Risiko von Scheingenauigkeit.

## Möglicher nächster Status

`EXPERIMENTAL_PRODUCT_CANDIDATE` ist nur zulässig, wenn die obigen Prüfungen bestanden sind und eine ausdrückliche Produktentscheidung eine optionale Vergleichsansicht freigibt.

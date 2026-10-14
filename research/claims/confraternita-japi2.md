---
claim_set_id: claims/confraternita-japi2/1
status: PILOT
canonical: false
updated: 2026-08-05
---

# Claim-Ledger – Confraternita/Japi2

| ID | Aussage | Klasse | Status | Herkunft |
|---|---|---|---|---|
| J2-C01 | Die geprüfte Japi2-Logik ist technisch reproduzierbar. | P | bestätigt | kanonische PizzaCalc-Rekonstruktion |
| J2-C02 | Die Logik koppelt Zeit, Temperatur, Hydration, Salz, Fett und Teigart an eine Hefedosierung. | P | bestätigt | Rechner- und Codeprüfung |
| J2-C03 | Kühlschrankstunden werden pauschal mit 10 % einer Warmstunde gewichtet. | P | bestätigt | rekonstruierte Formel |
| J2-C04 | Eine konkrete Kühlschranktemperatur wird nicht zustandsbasiert fortgeschrieben. | P/H | bestätigt | Formelstruktur und Vergleich |
| J2-C05 | Für Konstanten und Exponenten liegt keine veröffentlichte wissenschaftliche Herleitung oder Unsicherheitsangabe vor. | O/P | kein Beleg gefunden | geprüfte öffentliche Quellen |
| J2-C06 | Die Formel ist als externe Praxisbenchmark geeignet. | H | genehmigte Einordnung | `DEC-044` |
| J2-C07 | Die Formel ist als PizzaCalc-Produktionsmodell freigegeben. | – | falsch | keine Freigabe |
| J2-C08 | Pabiak ist eine unabhängige Validierung von Japi2. | – | falsch | gleiche Modellfamilie |
| J2-C09 | Die Japi2-Normalisierung ist mit der heiligen PizzaCalc-Grundrechnung identisch. | – | falsch | Hefe liegt dort nicht im Gesamtfaktor |
| J2-C10 | Eine optionale Vergleichsansicht könnte Japi2 transparent neben einer PizzaCalc-Methode darstellen. | H | Produktidee | noch nicht freigegeben |

## Offene Punkte

- Vollständige versionierte Fallmatrix als maschinenlesbares Testfixture ablegen.
- Exakte Formel und Parameter aus der kanonischen Rekonstruktion kontrolliert in eine ausführbare Benchmark-Spezifikation übertragen.
- Unterschied zwischen Japi2-Gesamtteigdefinition und PizzaCalc-Massenerhaltung in Vergleichsausgaben sichtbar machen.
- Prüfen, ob eine öffentliche Vergleichsansicht Nutzwert erzeugt oder nur Scheingenauigkeit verstärkt.

## Schutzregel

Ein Claim der Klasse `P`, `H` oder `O` darf allein keinen stabilen Produktparameter begründen. Eine Zusammenfassung dieses Ledgers ist keine zusätzliche unabhängige Evidenz.

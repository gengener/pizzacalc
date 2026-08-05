---
concept_id: concept/benchmark-vs-production-model/1
status: PILOT
canonical: false
updated: 2026-08-05
---

# Konzept – Benchmark versus Produktionsmodell

Ein **Benchmark** ist ein reproduzierbares Vergleichsverfahren. Er zeigt, wie eine bekannte externe Methode auf definierte Eingaben reagiert. Er muss nicht wissenschaftlich richtig oder für PizzaCalc geeignet sein, um als Vergleich nützlich zu sein.

Ein **Produktionsmodell** erzeugt eine fachliche Produktaussage. Dafür benötigt es zusätzlich:

- eine ausdrücklich definierte Zielgröße;
- dokumentierte Gleichungen und Parameter;
- Einheiten und Eingabeverträge;
- einen belegten Gültigkeitsbereich;
- Unsicherheits- und Fehlerverhalten;
- unabhängige Prüf- oder Validierungsfälle;
- Kompatibilität mit der PizzaCalc-Grundrechnung;
- eine genehmigte Produktrolle.

## Statusübergang

```text
Praxisartefakt
→ reproduzierter Benchmark
→ Forschungs-/Modellkandidat
→ unabhängige Prüfung
→ experimenteller Produktkandidat
→ ausdrückliche Freigabe
→ stabile Produktmethode
```

Kein Pfeil ist automatisch. Git-Historie dokumentiert Änderungen, ersetzt aber weder Evidenzprüfung noch Freigabe.

## Parallelitätsregel

Eine neue Methode muss eine bestehende Methode nicht ablösen. PizzaCalc kann mehrere versionierte Methoden parallel führen, sofern:

- jede Methode sichtbar benannt und eingeordnet ist;
- der Default nicht still geändert wird;
- Rezeptlinks Methode und Version binden;
- Unterschiede und Annahmen erklärbar bleiben;
- veraltete Methoden reproduzierbar erhalten oder ausdrücklich als `DEPRECATED` markiert werden.

---
title: PizzaCalc Research Index
status: PILOT
canonical: false
updated: 2026-08-05
---

# PizzaCalc – Forschungsindex

Diese Markdown-Wissensschicht ist der Karpathy-Pilot für PizzaCalc. Sie ist **abgeleitet, nichtkanonisch und nicht selbst beweiskräftig**. Maßgeblich bleiben die zugrunde liegenden Quellen sowie die freigegebenen PizzaCalc-Entscheidungen.

## Schichten

1. `sources/` – Herkunft, Quellentyp, Abruf- und Lizenzhinweise.
2. `claims/` – einzelne Aussagen mit Evidenzklasse und Herkunft.
3. `concepts/` – wiederverwendbare Begriffe und Abgrenzungen.
4. `model-candidates/` – formalisierte, prüfbare Kandidaten mit Grenzen.
5. `synthesis/` – zusammengeführter Wissensstand und offene Fragen.

## Statusmodell

- `OBSERVATION` – einzelne Beobachtung, noch keine Schlussfolgerung.
- `HYPOTHESIS` – plausible, aber nicht ausreichend belegte Ableitung.
- `RESEARCH_CANDIDATE` – formal beschrieben und prüfbar.
- `BENCHMARKED` – auf einer definierten Fallmatrix reproduziert.
- `EXPERIMENTAL_PRODUCT_CANDIDATE` – für eine optionale, klar gekennzeichnete Produktumsetzung prüfbar.
- `STABLE_PRODUCT_METHOD` – fachlich und technisch ausdrücklich freigegeben.
- `DEPRECATED` – reproduzierbar erhalten, aber nicht mehr empfohlen.
- `REJECTED` – verworfen; Nachweis und Begründung bleiben erhalten.

Kein Agent darf einen Status allein aufgrund einer überzeugenden Zusammenfassung hochstufen.

## Aktiver Pilotgegenstand

- [Confraternita/Japi2 – Quellenkarte](sources/confraternita-japi2.md)
- [Confraternita/Japi2 – Claim-Ledger](claims/confraternita-japi2.md)
- [Benchmark versus Produktionsmodell](concepts/benchmark-vs-production-model.md)
- [Option E – Modellkarte](model-candidates/confraternita-japi2-option-e.md)
- [Integrationssynthese](synthesis/integration-pilot-2026-08-05.md)

## Übergabe an BMAD

Nur ein vollständig beschriebenes Modellkandidaten-Dokument darf als Eingang für BMAD dienen. BMAD erzeugt daraus Planungsartefakte; es verändert dadurch weder Evidenzklasse noch Forschungsstatus.

Aktueller BMAD-Ausgang:

- [`_bmad-output/planning-artifacts/method-candidate-japi2-benchmark-mode.md`](../_bmad-output/planning-artifacts/method-candidate-japi2-benchmark-mode.md)

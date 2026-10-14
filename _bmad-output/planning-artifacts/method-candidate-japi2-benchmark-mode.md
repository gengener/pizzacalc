---
artifact_type: BMAD_METHOD_CANDIDATE_BRIEF
status: DERIVED_CANDIDATE
canonical: false
source_model: external-benchmark/confraternita-japi2/1
created: 2026-08-05
implementation_authorized: false
---

# Methodenkandidat – optionale Japi2-Vergleichsansicht

## Problem

PizzaCalc besitzt derzeit eine feste Canotto-Praxisreferenz, aber noch kein allgemeines Hefemodell. Forschung und spätere Modelle benötigen einen reproduzierbaren externen Vergleich, ohne dass dieser als Empfehlung oder Wahrheit missverstanden wird.

## Produktidee

Eine zukünftige, optionale **Vergleichsansicht** könnte für exakt definierte Test- oder Rezeptzustände zusätzlich das Ergebnis der rekonstruierten Confraternita/Japi2-Methode anzeigen.

Die Ansicht wäre kein zweites reguläres Profil und keine alternative Standardmethode. Sie dient ausschließlich dazu, Modellabweichungen transparent zu machen.

## Ziele

- einen bekannten Praxisbenchmark reproduzierbar ausführen;
- Unterschiede zwischen Methoden sichtbar und erklärbar machen;
- gemeinsame Fallmatrizen für Forschung und Regression ermöglichen;
- neue PizzaCalc-Kandidaten prüfen, ohne die bestehende Methode zu ersetzen.

## Nicht-Ziele

- keine Empfehlung, welche Hefemenge „richtig“ ist;
- keine wissenschaftliche Validierung von Japi2;
- kein automatischer Methodenwechsel;
- keine Änderung des aktuellen Defaults;
- keine Entfernung oder Umdeutung der Canotto-Referenz;
- kein produktiver Code im aktuellen Pilot.

## Vorgeschlagene Nutzerkennzeichnung

- Kategorie: `Externer Praxisvergleich`.
- Status: `Experimentell – nicht als Empfehlung verwenden`.
- Sichtbare Annahme: Kühlschrankstunden werden pauschal gewichtet; Kühlschranktemperatur wird nicht zustandsbasiert modelliert.
- Sichtbarer Hinweis: Die Methode verwendet eine andere Zutaten-Normalisierung als PizzaCalc.

## Technischer Lösungsrahmen

- isoliertes, reines Benchmarkmodul ohne DOM-Abhängigkeit;
- stabile Methoden-ID und Versionsnummer;
- getrennte Eingabe- und Ausgabeverträge;
- keine Wiederverwendung als versteckte Kernrechnung;
- gemeinsame, versionierte Testfixtures;
- Recipe-/Vergleichslink bindet Methoden-ID und Version;
- bestehende `calculate()`-Funktion und Canotto-Linksemantik bleiben unverändert.

## Akzeptanzkriterien für einen späteren funktionalen Pilot

1. Die exakte rekonstruierte Formel und alle Konstanten sind mit Provenienz dokumentiert.
2. Eine definierte Referenzfallmatrix liefert reproduzierbare Ergebnisse.
3. Japi2-Code ist von der bestehenden PizzaCalc-Kernrechnung getrennt.
4. Die abweichende Gesamtteig-/Hefe-Normalisierung ist im Test und in der Anzeige sichtbar.
5. Keine bestehende Ausgabe oder Rezeptverlinkung ändert sich ohne Auswahl der Vergleichsansicht.
6. Die Funktion enthält keine Empfehlung, Rangliste oder Validierungsbehauptung.
7. `npm run check` besteht vollständig.
8. Implementierung erfolgt auf eigenem Feature-Branch und bleibt bis zur ausdrücklichen Freigabe ungemergt.

## Entscheidungsbedarf vor Implementierung

- Soll eine solche Vergleichsansicht überhaupt öffentlich sichtbar sein oder nur als internes Forschungswerkzeug dienen?
- Welche gemeinsame Fallmatrix wird verbindlich?
- Welche Parameter dürfen Nutzende verändern, ohne den Vergleich uninterpretierbar zu machen?
- Wie werden Abweichungen verständlich erklärt, ohne Scheingenauigkeit zu erzeugen?

## Aktueller Ausgang

`READY_FOR_HUMAN_REVIEW`, aber **nicht** `READY_FOR_IMPLEMENTATION`.

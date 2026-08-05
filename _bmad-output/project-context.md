---
project_name: PizzaCalc
user_name: Gunnar
date: 2026-08-05
status: DERIVED_CANDIDATE
canonical: false
sections_completed:
  - technology_stack
  - architecture
  - language_rules
  - testing
  - workflow
  - domain_guardrails
existing_patterns_found: 14
---

# PizzaCalc – Projektkontext für KI-Agenten

> Nichtkanonisches BMAD-Pilotartefakt. Dieses Dokument fasst technische und fachliche Regeln zusammen, ersetzt aber weder Project Index, Decision Log, Source of Truth, Scope, Research Register noch Technical Runbook.

## Technologie und Laufzeit

- Statische, vollständig im Browser laufende Webanwendung ohne Backend.
- TypeScript `7.0.2`, Vite `8.2.0`, Vitest `4.1.10`, `@types/node` `24.10.0`.
- npm mit committed `package-lock.json`; reproduzierbare Installation über `npm ci`.
- Keine UI-Framework-Abhängigkeit: DOM-Aufbau und Interaktion erfolgen direkt in TypeScript.
- Gesamtprüfung: `npm run check` = Typecheck, Tests, Produktionsbuild und Portabilitätsprüfung.
- Veröffentlichung über GitHub Pages ausschließlich aus `main`.

## Architektur und Codeorganisation

- Fachliche Kernrechnung, Rezepttyp, Defaults sowie Link-Encoding/-Decoding liegen in `src/core.ts`.
- Oberflächenaufbau, Navigation, Übersetzungen und Interaktionen liegen hauptsächlich in `src/main.ts`.
- Share-Logik bleibt in `src/share.ts` getrennt.
- Tests liegen als `*.test.ts` neben dem jeweiligen fachlichen Bereich.
- Styles sind in `src/styles.css` und `src/overrides.css` getrennt.
- Neue Berechnungsmethoden müssen als klar identifizierbare, versionierte Methoden ergänzt werden; bestehende Methoden werden nicht still ersetzt.

## Kritische Implementierungsregeln

### Fachliche Berechnung

- Alle Zutatenprozente sind Bäckerprozente bezogen auf Mehl.
- Hefe ist Teil des Gesamtfaktors beziehungsweise Nenners. Keine Methode darf sie außerhalb der Massenerhaltung behandeln, ohne den Unterschied ausdrücklich zu dokumentieren.
- Intern wird mit voller Präzision gerechnet; Anzeige-Rundung darf die Kernwerte nicht verändern.
- Kein verstecktes Ausgleichsgramm und keine nachträgliche Manipulation einer Zutat.
- Der aktuelle Produktstand ist eine feste, skalierbare Canotto-Praxisreferenz. Er ist kein allgemeiner Zeit-Temperatur-Hefe-Solver.
- Ein allgemeines Hefemodell bleibt blockiert, bis Gleichungen, Parameter, Gültigkeitsbereich, Unsicherheit und unabhängige Prüfungen fachlich freigegeben sind.
- Neue Forschungsmodelle starten als Benchmark oder experimentelle Parallelmethode. Sie dürfen weder Default noch Ersatz der bestehenden Referenz werden, solange kein eigener Statusübergang genehmigt wurde.

### Methoden- und Linkversionierung

- Jede Berechnungsmethode erhält eine stabile ID und eine explizite Version.
- Rezeptlinks müssen die verwendete Methode und Version reproduzierbar binden.
- Bereits veröffentlichte Links dürfen durch eine spätere Methodenänderung nicht rückwirkend andere Ergebnisse liefern.
- Änderungen am Linkschema erfordern eine neue Schema-Version und Rückwärtskompatibilität oder eine klar definierte Ablehnung alter Links.

### Zustand und Oberfläche

- Fachlicher Rezeptzustand und persönliche Einstellungen bleiben getrennt.
- Ladepriorität: Rezeptlink vor gespeichertem Zustand vor Default.
- Theme, Sprache und andere persönliche Darstellungseinstellungen gehören nicht in Rezeptlinks.
- Die App muss ohne funktionierenden lokalen Speicher weiterarbeiten.
- Keine automatische Neuberechnung nach jeder Eingabeänderung; ein bestehendes Ergebnis bleibt sichtbar, bis erneut berechnet wird.
- UI-Texte müssen in Deutsch, Englisch und Italienisch konsistent aktualisiert werden, wenn eine sichtbare Funktion geändert wird.
- Keine AVPN-/Verace-Zertifizierungsbehauptung und keine wissenschaftliche Validierungsbehauptung ohne belegte Freigabe.

### TypeScript und Fehlerbehandlung

- Öffentliche fachliche Typen werden explizit exportiert.
- Ungültige fachliche Eingaben werden deterministisch abgewiesen; keine stillen Korrekturen außerhalb dokumentierter Defaults.
- Link-Decoding darf bei unbekannter Version oder Referenz nicht raten, sondern muss kontrolliert fehlschlagen.
- Neue Logik wird in kleine, testbare Funktionen ausgelagert; DOM-Code darf nicht zur zweiten Berechnungsquelle werden.

### Tests

- Jede fachliche Änderung benötigt mindestens einen Regressionstest.
- Methoden müssen Massenerhaltung, Grenzwerte, ungültige Eingaben und Link-Reproduzierbarkeit testen.
- Neue Parallelmethoden benötigen getrennte Referenzfälle und dürfen bestehende Tests nicht umdeuten.
- Vor einem Review muss `npm run check` vollständig bestehen.
- Ein grüner CI-Step gilt nur als Funktionsnachweis, wenn erwartete Dateien und Ergebnisse explizit geprüft wurden; Exitcode 0 allein reicht nicht.

### GitHub- und Releaseweg

- Niemals direkt nach `main` schreiben.
- Arbeitsweg: Feature-Branch → Prüfungen → Draft/normaler Pull Request → Review → bewusster Merge.
- Nur ein Merge nach `main` darf die GitHub-Pages-Veröffentlichung auslösen.
- Keine Secrets, Tokens, privaten Messreihen oder fremden Volltexte im öffentlichen Repository.
- Forschungsartefakte enthalten eigene Zusammenfassungen, Quellenmetadaten und kurze erforderliche Zitate, nicht unlizenzierte Volltexte.
- BMAD- und Karpathy-Artefakte sind zunächst abgeleitet und nichtkanonisch. Eine Statushochsetzung benötigt eine nachvollziehbare Produkt- oder Forschungsentscheidung.

## Forschungsübergabe an BMAD

- `research/sources/` enthält Quellenkarten und Herkunft.
- `research/claims/` trennt belegte Aussagen von Ableitungen und offenen Punkten.
- `research/concepts/` hält wiederverwendbare Begriffe und Abgrenzungen.
- `research/model-candidates/` beschreibt prüfbare Modell- oder Benchmarkkandidaten.
- `research/synthesis/` fasst den aktuellen Wissensstand zusammen.
- BMAD darf nur qualifizierte Kandidaten aus dieser Schicht in Planungsartefakte überführen.
- Ein BMAD-Planungsartefakt ist keine fachliche Freigabe und darf Produktcode nicht automatisch legitimieren.

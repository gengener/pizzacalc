---
synthesis_id: synthesis/bmad-karpathy-integration-pilot/1
status: PILOT_COMPLETE
canonical: false
updated: 2026-08-05
---

# Synthese – BMAD-/Karpathy-Integrationspilot

## Ergebnis

Der vorhandene PizzaCalc-Forschungsstand lässt sich in eine persistente Markdown-Wissensschicht überführen, ohne den kanonischen Forschungsbestand oder den Produktcode zu verändern.

Der Pilot trennt erfolgreich:

1. Herkunft und Quellenrolle;
2. einzelne Claims und deren Evidenzklasse;
3. wiederverwendbare konzeptionelle Abgrenzungen;
4. eine versionierte Modellkarte;
5. die abgeleitete BMAD-Produktplanung.

## Erkenntnis zum Pilotgegenstand

Confraternita/Japi2 ist technisch reproduzierbar und deshalb als Benchmark wertvoll. Die Methode besitzt aber bekannte Grenzen: pauschale Kühlzeitbehandlung, keine zustandsbasierte Mehrphasenführung, keine veröffentlichte Unsicherheit und eine von PizzaCalc abweichende Zutaten-Normalisierung.

Daraus folgt kein Produktionsmodell. Es entsteht lediglich ein **nichtkanonischer Kandidat für eine optionale Vergleichsansicht**.

## Übergabe an BMAD

Die Modellkarte liefert BMAD:

- Zweck und Nicht-Zweck;
- Eingabedimensionen;
- Annahmen und Grenzen;
- Evidenzstatus;
- erforderliche Prüfungen;
- zulässigen nächsten Status.

BMAD hat daraus ein Planungsartefakt erzeugt, das eine mögliche experimentelle Vergleichsfunktion beschreibt. Dieses Artefakt darf weder Code legitimieren noch den Forschungsstatus erhöhen.

## Offene Arbeit vor Code

- exakte Japi2-Rekonstruktion kontrolliert als ausführbare Benchmark-Spezifikation übernehmen;
- gemeinsame Referenzfallmatrix festlegen;
- UX-Entscheidung treffen, ob eine Vergleichsansicht fachlich nützlich ist;
- Recipe-Link-Schema für Methoden-ID und Version spezifizieren;
- ausdrückliche Freigabe eines funktionalen Produktpiloten.

## Pilotbewertung

- Karpathy-Schicht als Markdown-System: `PASS`.
- Trennung von Quelle, Claim, Konzept und Modellkandidat: `PASS`.
- Übergabe eines qualifizierten Kandidaten an BMAD: `PASS`.
- Produktfreigabe: `NOT_EXECUTED`.
- Implementierung: `NOT_EXECUTED`.
- Änderung von `main` oder Website: `NOT_EXECUTED`.

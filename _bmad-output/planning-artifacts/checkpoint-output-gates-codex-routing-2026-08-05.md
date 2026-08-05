---
artifact_type: PLANNING_CHECKPOINT
project: PizzaCalc
data_class: STANDARD
status: ACCEPTED_FOR_NEXT_DESIGN_STEP
canonical: false
logical_timestamp_utc: 20260805T062600Z
created_local: 2026-08-05T08:26:00+02:00
branch: pilot/bmad-karpathy-compatibility
pull_request: 19
runtime_ref: GCPM-R15
---

# Checkpoint – Output-Gates und kostenbewusstes Codex-Routing

## 1. Zweck

Dieser Checkpoint sichert die vom Nutzer akzeptierte Weiterentwicklung der PizzaCalc-Agentenarchitektur.

Der zuvor vorgeschlagene gebündelte Modell-Evaluationslauf wird nicht als bevorzugter Standard übernommen. Statt einer vorgelagerten Testserie soll die Qualität jedes konkreten Arbeitsergebnisses über risikobasierte Sicherheits- und Nachweis-Gates abgesichert werden.

Zusätzlich wird Codex-internes Rollen-, Modell- und Reasoning-Routing als eigene dritte Architekturoption zwischen reinem ChatGPT-/Codex-Betrieb und einer späteren LXC-/LiteLLM-Worker-Ebene berücksichtigt.

Dieser Checkpoint aktiviert keine Agenten, Modelle, Automationen oder externen Systeme und ändert weder Produktcode noch kanonische Berechnungsmethoden.

## 2. Grundentscheidung: Output-Absicherung statt Use-Case-Testserie

Nicht jede Modell-/Aufgaben-Kombination soll vorab über eine umfangreiche repräsentative Testserie qualifiziert werden.

Stattdessen gilt als Zielmodell:

- jeder Auftrag wird vor der Delegation begrenzt und prüfbar formuliert;
- die erforderliche Modellstärke richtet sich nach Risiko, Mehrdeutigkeit und Prüfbarkeit;
- jedes konkrete Ergebnis muss die für seine Wirkung erforderlichen Gates bestehen;
- fehlgeschlagene günstige Läufe werden begrenzt korrigiert oder an eine stärkere Lane eskaliert;
- fachliche Hochstufungen, Produktentscheidungen, Merge und Veröffentlichung bleiben menschliche Gates.

Eine spätere gezielte Modell-Evaluation bleibt optional, ist aber keine notwendige Voraussetzung für den Start dieses Betriebsmodells.

## 3. Gate-System

### Gate 1 – Auftragsvertrag

Vor Delegation werden mindestens festgelegt:

- Ziel und Umfang;
- zulässige Quellen und Werkzeuge;
- erwartetes Ausgabeformat;
- erlaubte Ableitungen;
- verbotene Entscheidungen oder Änderungen;
- Risikoklasse;
- Kosten-, Laufzeit- und Retry-Grenze;
- erforderliches Nachweisformat.

Günstige Lanes erhalten nur kleine, klar abgrenzbare und überprüfbare Aufgaben.

### Gate 2 – Mechanische Validierung

Deterministisch prüfbare Eigenschaften werden ohne weitere fachliche Modellentscheidung kontrolliert, beispielsweise:

- Schema- und Pflichtfeldvollständigkeit;
- gültige Quellen- und Dokument-IDs;
- zulässige Statuswerte;
- formale Einheiten- und Zahlenkonsistenz;
- Dubletten;
- erlaubte Pfade und Änderungsumfang;
- strukturierte Ausgabe ohne unerlaubte Zusatzfelder.

### Gate 3 – Belegtreue

Jede fachlich relevante Aussage benötigt:

- konkrete Quelle und nachvollziehbare Fundstelle;
- Trennung von Quellenbeleg, Ableitung und Hypothese;
- Evidenz- beziehungsweise Vertrauensstatus;
- Gültigkeits- und Unsicherheitsgrenze.

Unbelegte oder über die Quelle hinausgehende Behauptungen ohne Kennzeichnung führen mindestens zu `REVISION_REQUIRED`.

### Gate 4 – Unabhängige Gegenprüfung

Der erzeugende Agent darf ein materiell relevantes Ergebnis nicht selbst endgültig freigeben.

Ein getrennt beauftragter Prüfer erhält Auftrag, Quellen, Ergebnis und Prüfkriterien und bewertet insbesondere:

- fehlende oder falsche Belege;
- unzulässige Schlussfolgerungen;
- übersehene Widersprüche;
- falsche Zuordnungen;
- Verletzungen des Auftragsumfangs.

Zulässige Prüfausgänge:

- `PASS`;
- `REVISION_REQUIRED`;
- `ESCALATION_REQUIRED`.

### Gate 5 – Begrenzte Korrektur und Eskalation

- höchstens ein automatischer Korrekturlauf derselben Lane;
- kein identischer Retry ohne neue Diagnose oder geänderte Maßnahme;
- danach Übergabe an eine stärkere Lane;
- bei materieller fachlicher oder produktbezogener Wirkung menschliche Entscheidung.

### Gate 6 – Wirkungsgate

Die erforderliche Prüftiefe richtet sich nach der möglichen Wirkung.

Niedrige Wirkung und hohe mechanische Prüfbarkeit können eine automatische Annahme erlauben, beispielsweise bei Quellenmetadaten oder formaler Dublettenerkennung.

Stärkere Gegenprüfung ist mindestens erforderlich für:

- Synthesen aus mehreren Quellen;
- Bewertung widersprüchlicher Forschung;
- Ableitung von Hefe-, Temperatur- oder Zeitmodellen;
- UX- oder Architekturvorschläge mit Produktwirkung.

Ausdrückliche Nutzerentscheidung bleibt erforderlich für:

- Änderung oder Hochstufung eines Berechnungsmodells;
- öffentliche experimentelle Methoden oder Pizza-Profile;
- Produktstandard- und UX-Grundentscheidungen;
- Codex-Implementierungsauftrag mit Produktwirkung;
- Merge, Deployment und Veröffentlichung.

### Gate 7 – Laufnachweis

Jeder relevante Agentenlauf soll mindestens dokumentieren:

- beauftragte Rolle;
- tatsächlich verwendetes Modell;
- tatsächliche Reasoning-Stufe;
- Rechte und erlaubte Systeme;
- Quellenzugriff;
- Verbrauch beziehungsweise Kosten, soweit technisch verfügbar;
- Gate-Ergebnisse;
- Korrektur- oder Eskalationsgrund.

Eine Konfiguration allein ist kein Ausführungs- oder Funktionsnachweis.

## 4. Ergebnisstatus

Für Arbeitsergebnisse werden folgende Hauptstatus vorgesehen:

- `ACCEPTED_AUTOMATICALLY` – nur bei begrenzter Wirkung und vollständig ausreichenden mechanischen Gates;
- `REVIEW_REQUIRED` – fachliche oder technische Gegenprüfung erforderlich;
- `DECISION_REQUIRED` – Nutzerentscheidung mit Forschungs-, Produkt- oder Veröffentlichungswirkung erforderlich;
- `REJECTED_OR_INCOMPLETE` – Auftrag oder Nachweis nicht ausreichend erfüllt.

Diese Status verändern keinen Forschungs-, Produkt- oder Release-Status automatisch.

## 5. Option C – Codex-internes Modell- und Reasoning-Routing

Als zusätzliche Architekturebene wird berücksichtigt:

- ChatGPT bleibt die zentrale Steuerungs-, Erklärungs- und Entscheidungsoberfläche;
- Codex-Arbeit wird in feste Rollen beziehungsweise Agentenprofile zerlegt;
- Rollen erhalten eine mindestens sichere Modell- und Reasoning-Stufe;
- hohe Modellstärke wird nicht pauschal für jede Teilaufgabe verwendet;
- Gate-Fehler führen gezielt zu stärkerer Lane statt zu unbegrenzten Wiederholungen;
- eine LXC-/LiteLLM-Ebene wird erst ergänzt, wenn Codex-internes Routing hinsichtlich Kosten, Providerwahl oder Funktionsumfang nicht ausreicht.

Die genaue technische Steuerbarkeit unterscheidet sich zwischen ChatGPT Work und projektkonfigurierten Codex-Clients. Eine spätere Implementierung muss die tatsächlich verfügbare Oberfläche und Konfiguration erneut gegen die aktuelle offizielle Codex-Dokumentation prüfen.

## 6. Vorgesehene Rollenprofile

### `research-forager`

- günstige, schnelle Lane;
- read-only;
- Quellenentdeckung, Metadaten und Dublettenhinweise;
- keine Synthese, fachliche Bewertung oder Hochstufung.

### `research-extractor`

- günstige bis mittlere Lane;
- strukturierte Claim-, Messwert- und Fundstellenextraktion;
- feste Schemas und Belegpflicht;
- keine eigenständige Produktableitung.

### `research-synthesizer`

- starke Lane mit erhöhtem Reasoning;
- Zusammenführung mehrerer Quellen;
- Widerspruchs- und Lückenanalyse;
- Ergebnis mindestens `REVIEW_REQUIRED`.

### `research-reviewer`

- von der Erzeugung getrennter, read-only Prüfer;
- starke Lane entsprechend Risiko und Mehrdeutigkeit;
- keine eigene Produktfreigabe.

### `implementation-worker`

- mittlere Lane für klar spezifizierte technische Arbeit;
- Schreibrecht nur auf freigegebenem Arbeitsbranch;
- keine Architektur-, Produkt-, Merge- oder Deploymententscheidung.

### `architecture-release-reviewer`

- starke Lane für Architektur, Berechnungslogik und produktrelevante Änderungen;
- unabhängige Gegenprüfung;
- kein automatischer Merge oder Release.

Die endgültigen Modellnamen und Reasoning-Werte werden erst in der technischen Spezifikation gebunden und müssen gegen die dann aktuelle Codex-Funktionalität geprüft werden.

## 7. Routingprinzip

Es gilt nicht pauschal „immer billig anfangen“, sondern **mindestens sichere Lane**:

- eng, wiederholbar und mechanisch prüfbar → günstige Lane;
- begrenzte Interpretation oder klar spezifizierte Implementierung → mittlere Lane;
- mehrdeutige Synthese, fachliche Ableitung oder Architektur → starke Lane;
- produktprägende oder irreversible Wirkung → starke Lane plus unabhängige Gegenprüfung und menschliches Gate.

Sub-Agenten werden nur eingesetzt, wenn die Aufteilung fachlich sinnvoll ist, Kontext entlastet oder unabhängige Prüfung ermöglicht. Zusätzliche Agenten gelten nicht automatisch als Kosteneinsparung.

## 8. Zielarchitektur in drei Ebenen

1. **ChatGPT:** Steuerung, Forschungsagenda, Synthese, Entscheidungsvorlagen und Nutzerfreigaben.
2. **Codex-Rollen:** kostenbewusste Forschung, Prüfung und Entwicklung innerhalb des OpenAI-/Codex-Systems.
3. **LXC/LiteLLM:** spätere optionale Worker-Ebene für volumenstarke, stark begrenzte oder providerabhängige Aufgaben.

GitHub bleibt versionierter Übergabe-, Review- und Nachweiskanal.

## 9. Nächster Planungsgegenstand

Vor technischer Aktivierung ist eine konkrete Spezifikation zu erstellen für:

- Aufgabenklassen und Risikozuordnung;
- Gate-Matrix je Aufgabenklasse;
- Rollenprofile mit Rechten und verbotenen Aktionen;
- Modell-/Reasoning-Auswahlregeln;
- Retry-, Kosten- und Eskalationsgrenzen;
- Laufnachweisformat;
- Übergaben zwischen ChatGPT, Codex-Rollen und späterer LXC-/LiteLLM-Ebene;
- kontrollierten Pilotbetrieb ohne Änderung von `main` oder öffentlicher Website.

## 10. Ausführungsstatus und Grenzen

- Gate-System fachlich akzeptiert: `YES`;
- Codex-internes Routing als Option C akzeptiert: `YES`;
- Rollenprofile technisch konfiguriert: `NOT_EXECUTED`;
- konkrete Modelle und Reasoning-Werte verbindlich gebunden: `NOT_EXECUTED`;
- Sub-Agenten gestartet: `NOT_EXECUTED`;
- LXC-/LiteLLM-Bridge eingerichtet: `NOT_EXECUTED`;
- automatisierte Forschung aktiviert: `NOT_EXECUTED`;
- Änderung an `main`: `NOT_EXECUTED`;
- Merge oder Deployment: `NOT_EXECUTED`;
- Produktcodeänderung: `NOT_EXECUTED`;
- Änderung an GCPM, CURRENT, Runtime oder Policy: `NOT_EXECUTED`.

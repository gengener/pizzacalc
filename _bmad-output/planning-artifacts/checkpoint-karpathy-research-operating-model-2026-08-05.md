---
artifact_type: PLANNING_CHECKPOINT
status: ACCEPTED_FOR_NEXT_DESIGN_STEP
canonical: false
created: 2026-08-05T07:32:00+02:00
branch: pilot/bmad-karpathy-compatibility
pull_request: 19
---

# Checkpoint – Karpathy-Forschungs- und Entscheidungsbetrieb für PizzaCalc

## 1. Zweck

Dieser Checkpoint sichert den vom Nutzer akzeptierten Betriebsansatz für die weitere Karpathy-/BMAD-Planung von PizzaCalc.

Er konkretisiert, woher Forschungsimpulse kommen, welche Arbeit automatisiert werden darf, wann der Nutzer informiert oder beteiligt wird und welche Themenströme getrennt geführt werden.

Dieser Checkpoint ändert keine kanonische PizzaCalc-Produktentscheidung, keine Berechnungsmethode, keinen Produktcode und keine öffentliche Website.

## 2. Grundentscheidung

Karpathy wird nicht als ziellos oder dauerhaft autonom im Internet suchender Agent verstanden.

Der vorgesehene Betrieb ist eine gerichtete Wissens- und Forschungsmaschine:

- Forschungsrichtungen werden über eine gepflegte Agenda bestimmt;
- Webrecherche erfolgt nur als begrenzter Research Run mit Thema, Suchprofil, Quellenklassen, Budget und Stoppbedingungen;
- neue Quellen und Erkenntnisse werden dauerhaft in die Wissensstruktur eingeordnet;
- fachliche Hochstufungen, Produktentscheidungen und Veröffentlichungen bleiben menschliche Entscheidungen.

## 3. Operative Kernkomponenten

Der Karpathy-Betrieb soll aus vier miteinander verbundenen Komponenten bestehen:

1. **Research Agenda** – priorisierte Forschungsfragen, Ziele, zulässige Quellen, Suchprofile, Abbruchkriterien und Status.
2. **Research Inbox** – neu gefundene, noch nicht vollständig eingeordnete Quellen, Claims, Widersprüche und Kandidaten.
3. **Wiki** – dauerhaft gepflegter Wissensstand mit Quellenbezug, Querverweisen, Synthesen, Widersprüchen und Wissenslücken.
4. **Decision Queue** – Punkte, die eine Prüfung oder Entscheidung des Nutzers benötigen.

Der vorhandene Pilot bildet bisher hauptsächlich Teile des Wiki und der Governance-Schicht ab. Agenda, Inbox, Benachrichtigungslogik und Decision Queue sind noch zu entwerfen.

## 4. Herkunft neuer Impulse

Neue Forschungs- und Lösungsimpulse entstehen aus klar abgegrenzten Auslösern:

- offenen Fragen der Research Agenda;
- Quellenketten aus bereits qualifizierten Studien, Berichten, Rezepten oder technischen Dokumentationen;
- vom Wiki erkannten Widersprüchen, Evidenzlücken und unzureichend bearbeiteten Konzepten;
- Wissensbedarf aus Produkt-, UX-, BMAD- oder Implementierungsarbeit;
- vom Nutzer neu eingebrachten Quellen, Beobachtungen, Ideen und Prioritäten.

Es erfolgt keine allgemeine, unbegrenzte Suche nach beliebigen Pizza-Ideen.

## 5. Automatisierbarer Umfang

Nach gesonderter technischer Spezifikation dürfen innerhalb freigegebener Forschungsfragen automatisiert erfolgen:

- gezielte Quellenentdeckung;
- Erfassung von Titel, Herausgeber, Datum, URL, Quellentyp und Provenienz;
- Dubletten- und Ähnlichkeitserkennung;
- erste Relevanz- und Qualitätsklassifikation;
- Extraktion einzelner Claims;
- Zuordnung zu Themen und Forschungsfragen;
- Vergleich mit dem bestehenden Wissensstand;
- Erkennung von Widersprüchen und Wissenslücken;
- Aktualisierung nichtkanonischer Wiki-Seiten;
- Vorschläge für Folgefragen;
- Erstellung kompakter Forschungsberichte.

Automatische Ergebnisse bleiben Forschungs- oder Prüfungskandidaten. Sie legitimieren keine Produktänderung.

## 6. Menschliche Gates

Eine Entscheidung des Nutzers ist mindestens erforderlich, wenn:

1. eine neue Forschungsrichtung dauerhaft aufgenommen oder priorisiert werden soll;
2. hochwertige Quellen dem bisherigen Wissensstand materiell widersprechen;
3. eine Erkenntnis eine bestehende Berechnung beeinflussen könnte;
4. ein Modellkandidat für den Vergleich oder eine Produktprüfung hochgestuft werden soll;
5. eine UX- oder Produktoption in eine Spezifikation übergehen soll;
6. eine experimentelle Methode öffentlich sichtbar werden soll;
7. BMAD ein Umsetzungsartefakt und Codex einen Implementierungsauftrag erhalten sollen.

Nicht jede einzelne Quelle benötigt eine Nutzerfreigabe.

## 7. Meldungs- und Entscheidungslogik

Der Nutzer soll neue Informationen in drei unterscheidbaren Formen erhalten:

### Forschungsbericht

Regelmäßige Übersicht über neue Quellen, Erkenntnisse, Lücken, laufende und abgeschlossene Recherche. Normalerweise ohne Entscheidungsbedarf.

### Prüfhinweis

Ein fachlich relevanter Befund, der zusätzliche Gegenrecherche oder Bewertung benötigt, aber noch keine Produktentscheidung rechtfertigt.

### Entscheidungsvorlage

Eine konkrete Auswahl mit Varianten, Auswirkungen, Evidenzstand und Empfehlung. Sie wird nur erzeugt, wenn tatsächlich eine menschliche Entscheidung ansteht.

Dringende Einzelmeldungen sind nur für Erkenntnisse vorgesehen, die einen aktuellen Stand materiell widerlegen oder eine laufende Umsetzung blockieren.

## 8. Getrennte Themenströme

Die Wissensbasis wird nicht als ungegliederte Pizza-Sammlung geführt. Mindestens folgende Bereiche bleiben fachlich getrennt und werden über Querverweise verbunden:

### Teigwissenschaft und Berechnung

- Hefe und Fermentationskinetik;
- Temperatur und mehrphasige Temperaturverläufe;
- Zeit;
- Mehl, Enzyme und Teigstruktur;
- Wasser, Salz, Fett und weitere Zutaten;
- Gasproduktion und Gasbindung;
- Berechnungsmodelle, Validität und Unsicherheit.

### Pizzaarten und Praxis

- Napoletana Verace;
- Canotto;
- Romana und Teglia;
- New York und weitere spätere Stile;
- typische Teige, Prozessabläufe, Rezepte und Best Practices;
- Unterschiede zwischen Praxisartefakten und Berechnungsmodellen.

### Produkt und UX

- parallele Berechnungsmodelle;
- Trennung von Pizza-Profilen und Berechnungsmethoden;
- experimentelle Varianten;
- Vergleichsansichten;
- Kennzeichnung von Evidenz und Unsicherheit;
- mobile Bedienung, Navigation und Informationsarchitektur.

### Technische Produktentwicklung

- Datenmodell und Modellversionierung;
- reproduzierbare Rezept- und Vergleichslinks;
- Tests und Referenzfallmatrizen;
- Frontend-Architektur;
- Release-, Review- und Rollbackverfahren.

## 9. Rollenabgrenzung

- **Recherche-Agent:** führt begrenzte, freigegebene Research Runs aus.
- **Karpathy-Wiki:** bewahrt, verbindet und aktualisiert das kumulative Wissen.
- **Governance-Schicht:** verwaltet Evidenzklassen, Status, Widersprüche und Modellkandidaten.
- **BMAD:** überführt qualifizierte Erkenntnisse oder Produktoptionen in Planung, Architektur, Spezifikationen und Stories.
- **Codex:** implementiert ausschließlich freigegebene technische Arbeitspakete auf einem Branch.
- **Nutzer:** entscheidet Forschungsrichtung, fachliche Hochstufung, Produktoption, Implementierung und Veröffentlichung.

## 10. Erste Pilotströme

Für die Ausarbeitung des Betriebsprozesses werden zunächst drei gemeinsame Pilotströme vorgesehen:

1. Hefe – Temperatur – Zeit;
2. Pizzaarten und Teigprofile;
3. nutzerfreundliche Darstellung paralleler beziehungsweise experimenteller Berechnungsmodelle.

Diese Pilotströme sollen Recherche, Wissenspflege, Entscheidungslogik und Produktplanung gemeinsam erproben, ohne eine unkontrollierte allgemeine Websuche zu eröffnen.

## 11. Nächster Schritt

Vor einem Umbau der bestehenden Ordnerstruktur oder der Aktivierung automatischer Recherche wird der konkrete Betriebsprozess spezifiziert.

Diese Spezifikation soll mindestens enthalten:

- Daten- und Dokumentstruktur der vier Kernkomponenten;
- Status- und Übergangsregeln;
- Research-Run-Vertrag einschließlich Budget und Stopps;
- Benachrichtigungs- und Entscheidungsschema;
- Automationsgrenzen und menschliche Gates;
- Übergabewege zwischen Recherche, Wiki, Governance, BMAD und Codex;
- Prüf- und Nachweisverfahren für die drei Pilotströme.

## 12. Ausführungsgrenzen dieses Speicherpunkts

- Änderung an `main`: `NOT_EXECUTED`;
- Merge: `NOT_EXECUTED`;
- Deployment: `NOT_EXECUTED`;
- Produktcodeänderung: `NOT_EXECUTED`;
- automatische Webrecherche: `NOT_EXECUTED`;
- fachliche Modellhochstufung: `NOT_EXECUTED`;
- Änderung an GCPM, CURRENT oder Runtime: `NOT_EXECUTED`.

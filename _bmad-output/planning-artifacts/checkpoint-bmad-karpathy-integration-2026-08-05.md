---
artifact_type: PILOT_CHECKPOINT
status: SAVED_WITH_RESERVATION
canonical: false
created: 2026-08-05T06:43:00+02:00
branch: pilot/bmad-karpathy-compatibility
pull_request: 19
---

# Checkpoint – BMAD-/Karpathy-Integrationspilot

## Nutzerbewertung

Der bisherige Pilotstand wird insgesamt positiv bewertet: „ganz abgesehen davon, sieht es gut aus“.

## Ausdrücklicher Vorbehalt

Der Begriff **„Karpathy-inspirierte Forschungsstruktur“** ist für den Nutzer noch nicht eindeutig verständlich. Es ist deshalb **nicht bestätigt**, dass die derzeit angelegte Struktur bereits exakt der zuvor vereinbarten Karpathy-Umsetzung entspricht.

Dieser Punkt bleibt offen und muss vor einer dauerhaften Übernahme oder einem Merge erklärt und abgeglichen werden.

Insbesondere ist noch zu klären:

- was am aktuellen Aufbau konkret aus Karpathys LLM-Wiki-Konzept stammt;
- welche Teile lediglich eine projektspezifische Ableitung für PizzaCalc sind;
- ob die aktuelle Trennung in Quellen, Claims, Konzepte, Modellkandidaten und Synthesen der vereinbarten Zielarchitektur entspricht;
- welche Bestandteile geändert, ergänzt oder entfernt werden müssen.

## Gesicherter Pilotstand

- BMAD 6.10.0 ist auf dem Pilotbranch installiert.
- Codex wird von BMAD als Integration unterstützt.
- Die PizzaCalc-Gesamtprüfung bestand vor und nach der Installation.
- Ein nichtkanonischer BMAD-Projektkontext wurde erzeugt.
- Eine Forschungsstruktur unter `research/` wurde angelegt.
- Japi2 bleibt als externe Praxisbenchmark eingeordnet und wurde nicht zum Produktionsmodell hochgestuft.
- Der abgeleitete Methodenkandidat steht auf `READY_FOR_HUMAN_REVIEW`, nicht auf `READY_FOR_IMPLEMENTATION`.
- `main`, Produktcode und öffentliche Website wurden nicht verändert.
- Draft-PR #19 bleibt ungemergt.

## Nächster fachlicher Schritt

Vor der nächsten strukturellen Entscheidung wird die aktuelle Forschungsstruktur verständlich erklärt und direkt mit der ursprünglich vereinbarten Karpathy-Zielsetzung verglichen.

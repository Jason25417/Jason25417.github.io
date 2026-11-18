---
title: EasyReminder
summary: Eine Open-Source-App, die Aufgaben und Termine zwischen .ics-Dateien und Apples Erinnerungen und Kalender überträgt, für macOS, iOS und iPadOS.
---

## Warum es sie gibt

iOS hat keine eingebaute Möglichkeit, Aufgaben aus einer `.ics`-Datei in Erinnerungen zu importieren. Enthält eine Datei Termine und Aufgaben, behält das System die Termine und verwirft die Aufgaben stillschweigend. EasyReminder schließt diese Lücke.

## Was sie tut

- **Import.** Aufgaben werden zu Erinnerungen und Termine zu Kalenderereignissen, mit korrekten Zeitzonen und vollständigen Wiederholungsregeln.
- **Export.** Aus einer Erinnerungsliste oder aus einem Kalender samt Datumsbereich zurück nach `.ics`.
- **Ehrliche Rückmeldung.** Felder, die Apples Frameworks nicht speichern können, etwa Unteraufgaben, Tags und Teilnehmer, werden nach dem Import aufgelistet. Nichts wird verworfen, ohne dass es gesagt wird.
- **Automatisierung.** Kurzbefehle-Aktionen und ein Kommandozeilenwerkzeug decken Import und Export ab.
- **Sprachen.** Vereinfachtes Chinesisch, Englisch und Spanisch.

## Wie sie ausgeliefert wird

Sie ist im App Store für macOS und iOS erhältlich. Für macOS gibt es außerdem einen notarisierten Direktdownload mit eingebauter Aktualisierung. Der Quellcode ist auf GitHub öffentlich.

Die Architektur, die ich hier erarbeitet habe, besteht aus einem Kernpaket, auf dem die App, die Kurzbefehle-Aktionen und das Kommandozeilenwerkzeug gemeinsam aufsetzen. Sie wurde zur Vorlage für meine späteren Apps.

---
title: Dashboard Fleet Kit
summary: Ein kleines Framework für die lokalen Dashboards, die sich um ein persönliches Projekt ansammeln, mit einem Manifest und einer Leitstand-Seite. Quellcode einsehbar.
---

## Was es ist

Jedes meiner Projekte hat am Ende ein paar kleine lokale Dashboards. Ab einer gewissen Zahl wurde es zur eigenen Aufgabe, sie zu starten, zu stoppen und wiederzufinden. Dashboard Fleet Kit ist das Framework, das ich daraus gezogen habe: eine Manifest-Datei, in der alle Dashboards eingetragen sind, eine Leitstand-Seite, die sie startet, stoppt und ihren Zustand prüft, und ein Mikro-Framework, um ein neues zu schreiben.

Es verwendet nur die Python-Standardbibliothek. Keine Abhängigkeiten, kein Build-Schritt, keine Datenbank.

## Das erste Dashboard darauf

Das Issue-Baum-Dashboard ist aus meinem Audit von [hotaru](/de/work/hotaru/) entstanden. Es liest einen Baum von Issues live von GitHub, zeigt, an welchen Issues Pull Requests hängen und an welchen nicht, und zeichnet die Abhängigkeiten zwischen den Crates.

## Lizenz

Bei beiden ist der Quellcode unter der PolyForm-Noncommercial-Lizenz einsehbar: kostenlos für nichtkommerzielle Nutzung.

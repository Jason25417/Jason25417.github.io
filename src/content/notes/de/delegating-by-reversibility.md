---
title: An eine KI delegieren nach Umkehrbarkeit
description: Wie ich entscheide, was ein KI-Agent tun darf, ohne mich vorher zu fragen.
date: 2026-11-17
---

Wenn ich Arbeit an einen KI-Agenten abgebe, frage ich, ob sich die Handlung rückgängig machen lässt. Wie wichtig die Aufgabe ist, spielt dabei keine Rolle.

## Zwei Stufen

**Umkehrbar.** Dateien bearbeiten, Tests ausführen, lokal refaktorieren, lesen, Entwürfe schreiben. Der Agent erledigt das und berichtet danach. Er fragt nicht.

**Unumkehrbar, nach außen gerichtet oder mit Kosten verbunden.** Eine Nachricht senden, Daten löschen, veröffentlichen, eine gemeinsam genutzte Konfiguration ändern. Der Agent sagt, was passieren wird, und wartet auf mein Ja.

## Warum Umkehrbarkeit und nicht Wichtigkeit

Wichtigkeit ist die naheliegende Achse, und sie versagt in beide Richtungen.

Eine wichtige Aufgabe, die sich zurückrollen lässt, etwa ein Kernmodul auf einem Branch neu zu schreiben, gewinnt durch eine Rückfrage nichts. Ich würde ohnehin zustimmen, und jede Rückfrage bringt mir bei, zuzustimmen, ohne zu lesen.

Eine triviale Handlung, die sich nicht zurückrollen lässt, etwa eine kurze E-Mail, verdient die Pause. Ist sie einmal gesendet, habe ich die Kosten eines Fehlers nicht mehr in der Hand.

## Was es braucht, damit das funktioniert

- **Eine Möglichkeit, hinterher zu prüfen.** Bei allem, was in großem Umfang löscht oder überschreibt, will ich vorher eine Liste sehen oder einen Schnappschuss behalten, damit ich das Ergebnis selbst nachprüfen kann.
- **Hinweise, die nur einmal kommen.** Habe ich für eine Art von Risiko schon entschieden, hält der Agent die Entscheidung fest und spricht sie nicht mehr an, es sei denn, eine Tatsache hat sich geändert.
- **Der Agent benennt seine eigenen Ermessensentscheidungen.** Wählt er an meiner Stelle zwischen Optionen, kennzeichnet er die Wahl, damit ich sie später aufheben kann.

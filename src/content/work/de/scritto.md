---
title: Scritto
summary: Transkription und Übersetzung, die auf dem eigenen Gerät laufen, für macOS und iOS. Kostenlos im App Store.
---

## Was es tut

Scritto nimmt Sprache auf und wandelt sie auf dem Gerät in Text um; die Sprachmodelle Whisper und Parakeet laufen dabei lokal. Transkript und Übersetzung sind an denselben Zeitstempeln ausgerichtet, sodass jede übersetzte Zeile neben dem Satz steht, aus dem sie stammt. Aufnahmen landen in einer durchsuchbaren Bibliothek, die über iCloud synchronisiert wird. Die App ist in sieben Sprachen lokalisiert.

## Erst messen, dann glauben

Ich wollte, dass Scritto Sprecher über mehrere Aufnahmen hinweg am Stimmabdruck wiedererkennt. Deshalb habe ich vor der Funktion einen Prüfstand gebaut. Er durchläuft Schwellenwerte für den Stimmabdruck, um die Equal Error Rate (EER) zu bestimmen, und bewertet Experimente zur Begriffsinjektion mit tcpWER auf öffentlichen Korpora.

Die Zahl war schlecht. Über Sitzungen hinweg lag die Equal Error Rate für Sprecher bei 41,5 %, also nahe am Raten. Ich habe diesen Weg auf Grundlage der Messung aufgegeben, statt so lange an den Parametern zu drehen, bis die Zahl besser aussah.

Derselbe Prüfstand klärte auch eine kleinere Frage. Apples API bietet eine Möglichkeit, eigenes Vokabular in die Erkennung einzuspeisen. Ein kontrollierter Vergleich auf der Kommandozeile zeigte, dass sie nur bei einem der beiden Transkriptionstypen wirkt, und die Standard-Engine dafür zu wechseln hätte mehr Genauigkeit gekostet als gebracht.

---
title: hotaru und hotaru_mqtt
summary: 38 gemergte Pull Requests in ein Rust-Webframework und dessen MQTT-Crate, mit Schreibzugriff seit August 2026.
---

## Das Projekt

hotaru ist ein Webframework in Rust von Field of Dream Studio, und hotaru_mqtt ist dessen Implementierung des Nachrichtenprotokolls MQTT. Ich bin im Juli 2026 auf Einladung der Maintainer dazugekommen. Stand November 2026 sind 37 meiner Pull Requests in hotaru_mqtt gemergt und einer in hotaru selbst.

## Woran ich gearbeitet habe

- **MQTT v5.** Das Wire-Format und die Versionsaushandlung zwischen Clients und Broker.
- **Ein laufzeitunabhängiger Kern.** Ich habe das Protokoll von der Tokio-Laufzeit entkoppelt, sodass das Crate nicht mehr davon abhängt.
- **Eine `no_std`-Portierung.** Ich habe einen `Send`-Bound von der `dyn`-Verwendungsstelle in einen Supertrait verschoben, damit die Laufzeit für Single-Thread-Ziele unter `no_std` kompiliert. Die `spawn_local`-Fehler gingen von 83 auf 0 zurück, bei 327 bestandenen Tests und ohne Regression unter `std`.
- **Struktur.** Ich habe eine zirkuläre Abhängigkeit zwischen den Modulen packet und codec aufgelöst, indem ich die Kante von packet zu codec gekappt habe: Datendefinitionen sollten nicht von Kodierungslogik abhängen.
- **Härtung des Brokers.** Ich habe gegen einen vorgeschlagenen Patch gegen Denial-of-Service argumentiert, weil er Speicher reservierte, bevor der Client validiert war. Die Reservierung muss nach der Validierung kommen.

## Noch einmal von vorn

Das Projekt verlangt, dass Beitragende ihren Code im Live-Review Zeile für Zeile verteidigen. Meine ersten Patches funktionierten, aber ich hatte mich so stark auf KI-Hilfe gestützt, dass ich das noch nicht konnte.

Also habe ich im August neu angefangen. Ich habe den Code von der Basis 0.8.2 aus erneut auditiert, alles, was zu tun war, als Issues angelegt und den gesamten Stapel an Pull Requests gegen diese Issues neu geschrieben. Um den Überblick zu behalten, habe ich [ein Dashboard gebaut, das den Issue-Baum auditiert](/de/work/dashboard-fleet-kit/). Die Maintainer gaben mir in diesem Monat Schreibzugriff.

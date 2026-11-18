---
title: EasyReminder
summary: Una app de código abierto que mueve tareas y eventos entre archivos .ics y las apps Recordatorios y Calendario de Apple, en macOS, iOS y iPadOS.
---

## Por qué existe

iOS no tiene ninguna forma integrada de importar las tareas de un archivo `.ics` a Recordatorios. Si un archivo mezcla eventos y tareas, el sistema conserva los eventos y descarta las tareas sin avisar. EasyReminder cubre ese hueco.

## Qué hace

- **Importar.** Las tareas se convierten en recordatorios y los eventos en eventos de calendario, con las zonas horarias correctas y las reglas de repetición completas.
- **Exportar.** Desde una lista de Recordatorios, o desde un calendario y un intervalo de fechas, de vuelta a `.ics`.
- **Avisos honestos.** Los campos que los frameworks de Apple no pueden guardar, como subtareas, etiquetas y asistentes, se listan tras la importación. Nada se descarta sin decirlo.
- **Automatización.** Hay acciones de Atajos y una herramienta de línea de comandos para importar y exportar.
- **Idiomas.** Chino simplificado, inglés y español.

## Cómo se distribuye

Está en el App Store para macOS e iOS. En macOS hay además una descarga directa notarizada con actualizaciones integradas. El código fuente es público en GitHub.

La arquitectura que definí aquí consiste en un paquete central sobre el que se apoyan la app, las acciones de Atajos y la herramienta de línea de comandos. Se convirtió en la plantilla de mis apps posteriores.

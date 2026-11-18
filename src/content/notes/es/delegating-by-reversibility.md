---
title: Delegar en una IA según la reversibilidad
description: Cómo decido qué puede hacer un agente de IA sin preguntarme antes.
date: 2026-11-17
---

Cuando le paso trabajo a un agente de IA, la pregunta que me hago es si la acción se puede deshacer. Lo importante que sea la tarea no cuenta.

## Dos niveles

**Reversible.** Editar archivos, ejecutar tests, refactorizar en local, leer, redactar borradores. El agente lo hace e informa después. No pregunta.

**Irreversible, de cara al exterior o con coste.** Enviar un mensaje, borrar datos, publicar, cambiar una configuración compartida. El agente dice qué va a pasar y espera mi sí.

## Por qué la reversibilidad y no la importancia

La importancia es el eje intuitivo, y falla en los dos sentidos.

Una tarea importante que se puede revertir, como reescribir un módulo central en una rama, no gana nada con una petición de confirmación. La aprobaría de todos modos, y cada petición me enseña a aprobar sin leer.

Una acción trivial que no se puede revertir, como un correo breve, sí merece la pausa. Una vez enviado, el coste de un error ya no está en mis manos.

## Qué hace falta para que funcione

- **Una forma de comprobar después.** Para todo lo que borre o sobrescriba en bloque quiero antes una lista o que se guarde una copia, para poder verificar el resultado yo mismo.
- **Avisos que suenan una vez.** Si ya he decidido cómo tratar un tipo de riesgo, el agente anota la decisión y deja de plantearlo, salvo que haya cambiado algún hecho.
- **El agente señala sus propias decisiones.** Cuando elige entre opciones en mi nombre, marca la elección para que yo pueda revocarla más tarde.

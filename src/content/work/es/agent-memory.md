---
title: Una memoria por capas para agentes de IA
summary: La memoria basada en archivos que mantengo para los agentes de IA con los que trabajo, sincronizada entre dos máquinas, y el registro de lo que sé hacer sin ellos.
---

## El problema

Trabajo con agentes de IA todos los días, en un Mac y en una máquina con Windows. Cada sesión empieza sin recuerdo de la anterior. Volver a pegarlo todo no escala: el registro no deja de crecer, y lo que un agente puede cargar al empezar una sesión es fijo.

## Las capas

- **Registros semanales.** Cada máquina escribe su propio registro en bruto y nunca edita el de la otra, así que las dos no entran en conflicto.
- **Archivos por tema.** Una vez por semana los registros se funden en un conjunto de temas, como un proyecto o una costumbre mía. Se reescriben en el sitio, de modo que ganan precisión sin ganar tamaño.
- **Un perfil breve.** Una página de preferencias y hechos estables que todo agente carga al empezar una sesión. Solo cambia mediante una propuesta de modificación que yo apruebo.

Solo la capa inferior puede crecer sin límite. Todo lo que un agente tiene que leer se mantiene dentro de un presupuesto fijo.

## El registro de capacidades

Trabajar con IA hace fácil perder la cuenta de lo que sé hacer por mí mismo. Por eso, junto a la memoria llevo un registro de capacidades: cada entrada es algo concreto que afirmo saber hacer sin IA, con una forma de comprobarlo. Las entradas se revisan por sorpresa. Una afirmación que falla se marca como revocada y se queda en el registro.

El repositorio es privado, porque es un registro de mi propio trabajo y mis costumbres.

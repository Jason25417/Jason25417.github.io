---
title: hotaru y hotaru_mqtt
summary: 38 pull requests fusionados en un framework web en Rust y en su crate de MQTT, con acceso de escritura desde agosto de 2026.
---

## El proyecto

hotaru es un framework web en Rust de Field of Dream Studio, y hotaru_mqtt es su implementación del protocolo de mensajería MQTT. Me incorporé en julio de 2026 por invitación de los mantenedores. A noviembre de 2026 tengo 37 pull requests fusionados en hotaru_mqtt y uno en el propio hotaru.

## En qué trabajé

- **MQTT v5.** El formato de trama y la negociación de versión entre los clientes y el broker.
- **Un núcleo independiente del runtime.** Desacoplé el protocolo del runtime Tokio para que el crate deje de depender de él.
- **Una adaptación a `no_std`.** Moví una restricción `Send` del punto de uso de `dyn` a un supertrait para que el runtime compile en destinos `no_std` de un solo hilo. Los errores de `spawn_local` pasaron de 83 a 0, con 327 tests en verde y sin regresiones en `std`.
- **Estructura.** Rompí una dependencia circular entre los módulos packet y codec cortando la arista de packet a codec: las definiciones de datos no deben depender de la lógica de codificación.
- **Refuerzo del broker.** Me opuse a un parche propuesto contra la denegación de servicio porque reservaba memoria antes de validar al cliente. La reserva tiene que ir después de la validación.

## Volver a empezar

El proyecto exige que quien contribuye defienda su código en una revisión en directo, línea por línea. Mis primeros parches funcionaban, pero me había apoyado tanto en la ayuda de la IA que todavía no era capaz de hacerlo.

Así que en agosto empecé de nuevo. Volví a auditar el código desde la base 0.8.2, abrí como issues todo lo que había que hacer y reescribí la pila entera de pull requests contra esos issues. Para llevar el seguimiento construí [un panel que audita el árbol de issues](/es/work/dashboard-fleet-kit/). Los mantenedores me dieron acceso de escritura ese mismo mes.

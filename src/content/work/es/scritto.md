---
title: Scritto
summary: Transcripción y traducción que se ejecutan en tu propio dispositivo, para macOS e iOS. Gratis en el App Store.
---

## Qué hace

Scritto graba voz y la convierte en texto en el propio dispositivo, usando en local los modelos de voz Whisper y Parakeet. La transcripción y la traducción se alinean con las mismas marcas de tiempo, así que cada línea traducida queda junto a la frase de la que procede. Las grabaciones van a una biblioteca con búsqueda que se sincroniza por iCloud. La app está traducida a siete idiomas.

## Medir antes de creer

Quería que Scritto distinguiera a los hablantes entre grabaciones por su huella de voz, así que antes de construir la función construí un banco de pruebas. El banco recorre umbrales de huella de voz para hallar la tasa de error igual (EER) y puntúa los experimentos de inyección de términos con tcpWER sobre corpus públicos.

La cifra fue mala. Entre sesiones, la tasa de error igual de hablante salió en el 41,5 %, cerca del azar. Abandoné esa vía por la medición, en lugar de ajustar parámetros hasta que el número mejorase.

El mismo banco resolvió una duda más pequeña. La API de Apple ofrece una forma de inyectar vocabulario propio en el reconocimiento. Una comparación controlada desde la línea de comandos mostró que solo surte efecto con uno de los dos tipos de transcriptor, y cambiar el motor por defecto para conseguirlo habría costado más precisión de la que aportaba.

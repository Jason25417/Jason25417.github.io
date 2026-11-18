---
title: Dashboard Fleet Kit
summary: Un pequeño framework para los paneles locales que se acumulan alrededor de un proyecto personal, con un manifiesto y una página de control. Código fuente disponible.
---

## Qué es

Cada proyecto mío acaba con unos cuantos paneles locales pequeños. Cuando hubo suficientes, arrancarlos, pararlos y encontrarlos se volvió una tarea en sí misma. Dashboard Fleet Kit es el framework que saqué de ahí: un archivo de manifiesto que registra todos los paneles, una página de control que los arranca, los para y comprueba su estado, y un microframework para escribir uno nuevo.

Usa solo la biblioteca estándar de Python. Sin dependencias, sin paso de compilación, sin base de datos.

## El primer panel construido sobre él

El panel del árbol de issues salió de mi auditoría de [hotaru](/es/work/hotaru/). Lee en vivo un árbol de issues de GitHub, muestra qué issues tienen pull requests asociados y cuáles no, y dibuja el mapa de dependencias entre crates.

## Licencia

Los dos tienen el código fuente disponible bajo la licencia PolyForm Noncommercial: gratis para uso no comercial.

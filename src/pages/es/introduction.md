---
title: Introducción
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

### 👀 ¿Qué es Cakecutter?
Algunas veces, lo más difícil es empezar con un proyecto. Cakecutter es una herramienta que te ayuda a cortar la torta (cut the cake en inglés) y empezar tu proyecto instantáneamente.

Lo que Cakecutter es capaz de hacer:
- Usuarios pueden [publicar](/es/publishing-cakes/), [crear](/es/creating-cakes/) o [usar una cake](/es/using-cakes) desde [Cakes.run](https://cakes.run). Cakes son básicamente ficheros TOML files que contienen toda la información que se necesita para crear un proyecto. 
- Según la información en el fichero `Cakefile`, Cakecutter creará todos los ficheros (tú puedes crear el contenido de ellos) en la ubicación correcta.
- Comandos de setup (instalar dependencias, etcétera) pueden ser definidos en el fichero `Cakefile`. Estos comandos se corren luego de que los ficheros son generados.
- Cakecutter puede realizar preguntas al uduario y tomar sus respuestas. Dichas respuestas luego pueden ser utilizadas como variables en la plantilla del proyecto. [Lee la documentación aquí](/es/advance-usage)

## Documentación

- [Instalando la terminal CLI](/es/installation)

- [Usando cakes](/es/using-cakes)

- [Creando una cake](/es/creating-cakes)

  - [El Metadata de Cake](/es/creating-cakes/#el-metadata-de-cake)
  - [Doblando la Mantequilla (Folding the butter)](/es/creating-cakes/#doblando-la-mantequilla-folding-the-butter)
  - [Estructura de fichero](/es/creating-cakes#estructura-del-fichero)
  - [Contenido de fichero](/es/creating-cakes#contenido-del-fichero)
  - [Espolvorear algunos ingredientes adicionales](/es/creating-cakes#espolvorear-algunos-ingredientes-adicionales)

- [Uso Avanzado](/es/advanced-usage)

  - [Realizar preguntas](/es/advanced-usage#realizar-preguntas)
  - [Creando ficheros u archivos basados en respuestas](/es/advanced-usage#creando-ficheros-u-archivos-basados-en-respuestas)
  - [Contenido dinámico de ficheros](/es/advanced-usage#contenido-de-fichero-dinámico)
  - [Corriendo comandos basados en respuestas](/es/advanced-usage#corriendo-comandos-basados-en-respuestas)

- [Ejemplo básico de una Cake](/es/example)

- [Publicar una cake para que la puedan usar todos](/es/publishing-cakes)

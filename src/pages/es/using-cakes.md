---
title: Usando Cakes
description: Cakecutter | Usando Cakes
layout: ../../layouts/MainLayout.astro
---

## Cakes en línea

Luego de instalar `cakecutter` puede correr

```
cc cut <cake> <dir>
```

> `<cake>` es el nombre de la cake y `<dir>` es el directorio donde la plantilla será creada

Para cortar una torta o cake en línea

## Cakes locales

Puedes cortar tus cakes o tortas locales escritas en sintaxis [`toml`](https://toml.io/) corriendo

```
cc local <cake.toml> <dir>
```

> `cake.toml` es la ruta a la cake local y  `dir` es el directorio donde la plantilla será creada

## Con npx

Si estás utilizando cakecutter a través de `npx`, entonces utiliza `npx` como prefijo a los comandos

```
npx cc cut <cake> <dir>
```

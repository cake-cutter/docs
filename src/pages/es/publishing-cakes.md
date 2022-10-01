---
title: Publicar Cakes
description: Cakecutter | Publicar Cakes
layout: ../../layouts/MainLayout.astro
---

## Acceso

Tienes que acceder a tu cuenta antes de publicar una cake.

```
cc login
```

Luego de acceder, ¡puedes publicar la cake!

## Crear el fichero README

El fichero `README` contiene los detalles de la cake y, además, aparecerá en tu sitio web, lo que es genial.

## Encontrar un nombre que no esté en uso

Si una cake con el mismo nombre existe, no podrás publicar la cake (a menos que seas dueño de esa cake). Por eso, asegúrate que el nombre no esté en uso y luego, procede a publicar tu cake

## Publicación

Para publicar una cake, corre el comando `publish`.

```
cc publish <cake.toml>
```

> Aquí `cake.toml` es la ruta de la `cake` que quieres publicar

## Actualizar la cake

Puedes actualizar la cake utilizando el mismo comando. La cake será reemplazada con la nueva.
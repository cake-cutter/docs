---
title: Ejemplo
description: Cakecutter | Ejemplo
layout: ../../layouts/MainLayout.astro
---

### Ejemplo básico de una Cake

Aquí verás un ejemplo básico de una cake que pregunta por el nombre de usuario y crea un fichero cuyo contenido será el nombre de dicho usuario.

```toml
[metadata]
name = "name-printer"
description = "Muestra tu nombre en el fichero en segundos!" # XD

[[questions.name]]
ques = "¿Cuál es tu nombre?"
type = "input"

[filestructure]
"name.txt" = "true"

[content]
"name.txt" = '''
{{index .Ans "name"}}
'''
```

---
title: Uso Avanzado
description: Cakecutter | Uso Avanzado
layout: ../../layouts/MainLayout.astro
---

Es posible que aún prefieras un cli personalizado dado que puedes usar alguna biblioteca de interfaz de usuario de terminal elegante para hacer preguntas basadas en los archivos que crees. ¿Sabías que cakecutter también puede hacer eso? ¿No es genial?


## Realizar preguntas

Puedes realizar preguntas adhiriendo un atributo en la tabla `[questions]`:-

```toml
[[questions.a]] # <- El id que escribas aquí será usado para devolver las respuestas
ques = "Te gusta la Manzana o el Mango"
type = "select"
options = ["Manzana", "Mango"]

[[questions.name]]
ques = "¿Cuál es tu nombre?"
type = "input"
default = "Prefiero no decirlo"
```

- `ques` - La pregunta que se hará
- `options` - Las opciones para `select` (sólo funcionará para el tipo select)
- `default` - El valor por defecto (sólo funcionará para el tipo input)
- `type` - El tipo de pregunta

### Tipos de pregunta

Existen dos tipos -

- `input` - El tipo input es la entrada normal de usuario. La respuesta puede ser cualquier cosa.
- `select` - En el tipo select, se le da al usuario un numéro de opciones de las cuales debe seleccionar una.
- `menu` - Un alias para `select`

Antes de crear la plantilla, el usuario deberá realizar las preguntas y las respuestas serán guardadas

## Creando ficheros u archivos basados en preguntas

¿Recuerdas el valor `true` que debes ingresar si quieres que un fichero o archivo sea creado? Ahora puedes usar el lenguaje de plantillas para retornar `true` o `false` basándote en la respuesta que obtengas.

```toml
"manzana" = '''
{{if eq (index . "id") "value"}}
  true
{{else}}
  false
{{end}}
'''
```

> El `id` aquí es el id de la pregunta. Y el `value` es el valor con el que se debe comparar la respuesta a la pregunta

Esto es equivalente a :-

```js
if (answers["id"] == "value") {
  return true;
} else {
  return false;
}
```

Puedes aprender más acerca del lenguaje de plantillas [aquí](https://pkg.go.dev/text/template)

## Contenido de fichero dinámico

Puedes usar el mismo lenguaje de plantillas para crear contenido dinámico

```toml
[contents]
"test.json" = '''
{
  "name": "{{index . "name"}}"
}
'''
```

> Aquí `name` es el id de la pregunta

Equivalente de la documentación de JS con string:-

```js
`{
  "name": "${answers["name"]}"
}`;
```

Puedes aprender más acerca del lenguaje de plantillas [aquí](https://pkg.go.dev/text/template)

## Corriendo comandos basados en respuestas

Puedes usar el mismo lenguaje de plantillas para retornar `true` o `false`. Si la respuesta es `true`, el comando será invocado

```toml
[commands]
"npm init -y" = '''
{{if eq (index . "id") "value"}}
  true
{{else}}
  false
{{end}}
'''
```

> Aquí `id` es el id de la pregunta y el `value` es la respuesta con la que se compara

Esto es equivalente a :-

```js
if (answers["id"] == "value") {
  return "true";
} else {
  return "false";
}
```

Puedes aprender más acerca del lenguaje de plantillas [aquí](https://pkg.go.dev/text/template)

## Cerrando la sección

Vienen nuevos features en camino, así que mantente en sintonía.

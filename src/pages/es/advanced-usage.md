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

- `ques` - The question that will be asked
- `options` - The options for `select` (will only work with select type)
- `default` - The default value (will only work with input type)
- `type` - The type of question

### Types of question

There are two types -

- `input` - Input type is normal user input. The answer can be anything.
- `select` - In select type, the user is given a number of options from which the user has to select one.
- `menu` - An alias for `select`

before creating the template. the user will be asked these questions, answers to these questons will be saved.

## Creating files based on answers

Remember the `true` value that you have to put if you want a file to be created? Now you can use a templating language to return `true` or `false` based on the answers you get.

```toml
"apple" = '''
{{if eq (index . "id") "value"}}
  true
{{else}}
  false
{{end}}
'''
```

> The `id` here is the id of the question. and the `value` is the value that the answer of the question should be compared with

This is equivalent to :-

```js
if (answers["id"] == "value") {
  return true;
} else {
  return false;
}
```

You can learn more about the templating language [here](https://pkg.go.dev/text/template)

## Dynamic file contents

You can use the same templating language for dynamic content

```toml
[contents]
"test.json" = '''
{
  "name": "{{index . "name"}}"
}
'''
```

> Here `name` is the id of the question

JS doc string equivalent :-

```js
`{
  "name": "${answers["name"]}"
}`;
```

You can learn more about the templating language [here](https://pkg.go.dev/text/template)

## Running commands based on answers

You can also use the templating language to return `true` or `false`. If the return is `true`, the command will be invoked.

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

> Here `id` is the question's id and `value` is the answer that's being compared with

This is equivalent to :-

```js
if (answers["id"] == "value") {
  return "true";
} else {
  return "false";
}
```

You can learn more about the templating language [here](https://pkg.go.dev/text/template)

## Finishing off

There are more cool features to come, so stay tuned.

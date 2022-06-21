---
title: Advanced Usage
description: Cakecutter | Advanced Usage
layout: ../../layouts/MainLayout.astro
---

# Advance Usage

You would might still prefer a custom cli because you can use some fancy terminal ui library to ask questions based on which you create files. Did you know that cakecutter can do that too? Isn't that cooooooooooooooooool?

## Asking questions

You can ask questions by adding a attribute on the `[questions]` tables :-

```toml
[[questions.a]] # <- The id you put here will be used to fetch the answers
ques = "Do you like Apple or Mango?"
type = "select"
options = ["Apple", "Mango"]

[[questions.name]]
ques = "What is your name?"
type = "input"
default = "Don't wanna share"
```

- `ques` - The question that will be asked
- `options` - The options for `select` (will only work with select type)
- `default` - The default value (will only work with input type)
- `type` - The type of question

### Types of question

There are two types -

- `input` - Input type is normal user input, The answer can be anything.
- `select` - In select type, the user is given a number of options from which the user has to select one.
- `menu` - An alias for `select`

before creating the template. the user will be asked these questions, answers to these questons will be saved.

## Creating files based on answers

Remember the `true` value that you have to put if you want a file to be created? Now you can use a templating language to return `true` or `false` based on the answers you get

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

You can also use the templating language to return `true` or `false`. If the return is `true` the command will be invoked.

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

> Here `id` is the question's id and `value` is the answer thats being compared with

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

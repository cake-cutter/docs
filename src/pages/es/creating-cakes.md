---
title: Creando Cakes
description: Cakecutter | Creando Cakes
layout: ../../layouts/MainLayout.astro
---

> Todos los archivos de plantillas están en formato [`.toml`](https://toml.io/en/), lo cual hace fácil editar y compartir con otras personas.

## El Metadata de Cake

El Metadata de Cake consiste en dos propiedades :-

- `name` :- El nombre de la cake
- `description` :- La descripción de la cake

### Ejemplo

```toml
[metadata]
name = "cakecutter"
description = "Una descripción genial"
```

## Doblando la Mantequilla (Folding the butter)

Batter (o Mantenquilla en español) son los comandos que se corren antes de la creación de ficheros u archivos.

```toml
[batter]
1 = [
  "git init", "true"
]
2 = [
  "go mod init", "true"
]
```
La razón de que `true` esté ahí es porque le indica a `cakecutter` corre esto, tiene que estar ahí, de lo contrario el comando no será invocado.
Dirígete a la sección de [`Uso Avanzado`](/es/advanced-usage) para más información.

## Estructura del fichero

Para crear un archivo/directorio, pon el nombre en la tabla `[filestructure]` como key, y `true` como valor.

```toml
[filestructure]
"main.go" = "true"
"bin/" = "true" # << Para crear un directorio, pon / al final
```

El valor `true` le indica a `cakecutter` que cree esto; si el valor no contiene `true`, no se creará el fichero/directorio.
La razón de este comportamiento es debido al dinamismo de `filestructure`. Mientras se crea la plantilla, `cakecutter` hará preguntas al autor de la cake. En base a sus respuestas, los ficheros son creados.

Para la configuración de preguntas, dirígete a la sección de [`Uso Avanzado`](/es/advanced-usage).

## Contenido del fichero

Para crear contenido en un fichero, pon el nombre de éste en la tabla `[content]` como la key y el contenido como valor.

```toml
[content]
"main.go" = '''
package main

import "fmt"

func main() {
  fmt.Println("Hola mamá")
}
'''
```

> Nota: Puedes usar cadenas de texto multilínea mediante 3 comillas dobles `""" """`

Contenido dinámico es también posible mediante lenguaje de plantillas. Dirígete a la sección de [`Uso Avanzado`]('/es/advanced-usage') para más información.

## Espolvorear algunos ingredientes adicionales

Los ingredientes adicionales (toppings) son como la mantequilla o butter, pero con la diferencia de que se corren luego de que el setup esté completo.


```toml
[toppings]
1 = [
  "go mod init example.com/hello", "true"
]
2 = [
  "go build -o bin/cakecutter.exe" = "true"
]
```

## Cerrando la sección

La cake está terminada, guarda todo y sólo corre

```
cc local <path-to-the-file.toml> <directory>
```

> `directory` es el nombre del directorio donde la plantilla va a ser creada

La plantilla debe ser creada en ese directorio.<br>

Dirígete a la sección de [`Cómo publicar una cake`](/es/publishing-cakes) si quieres que la cake sea usada por todos.

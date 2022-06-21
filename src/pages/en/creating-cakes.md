---
title: Creating Cakes
description: Cakecutter | Creating Cakes
layout: ../../layouts/MainLayout.astro
---

> All template files are in [`.toml`](https://toml.io/en/) format, which are easy to edit and share with others.

## Cake Metadata

Cake metadata consists of only two properties :-

- `name` :- The name of the cake
- `description` :- The description of the cake

### Example

```toml
[metadata]
name = "cakecutter"
description = "A cool description"
```

## Folding the Batter

Batter are the commands which are run before creating all the files.

```toml
[batter]
1 = [
  "git init", "true"
]
2 = [
  "go mod init", "true"
]
```

The reason true is there is because it tells `cakecutter` to run this, its needs to be there, or else the command won't be invoked.
Head to [`Advanced Usage`](/en/advanced-usage) section for more information.

## File Structure

To create a file/directory put the it's name in `[filestructure]` table as the key with the value `true`

```toml
[filestructure]
"main.go" = "true"
"bin/" = "true" # << To create a directory put / in the end
```

The value `true` tells `cakecutter` to create this; if the value does not contain `true` it won't create the file/dir.
The reason it's like this is because of dynamic `filestructure`. While creating the template, `cakecutter` will ask some questions configured by the cake author, based on their answers, the files are created.
To configure questions head to [`Advanced Usage`](/en/advanced-usage) section.## File Content

To add content to a file, put its name in `[content]` table as the key with its contents as the value

```toml
[content]
"main.go" = '''
package main

import "fmt"

func main() {
  fmt.Println("Hi mom")
}
'''
```

> Note: You can use multiline strings using 3 quotes `""" """`

Dynamic content is also possible by templating. head to [`Advanced Usage`]('/en/advanced-usage') section for more information.

## Sprinkling some toppings

Toppings are just like batter, but instead of running before everything, they are run after everything to complete the setup.

```toml
[toppings]
1 = [
  "go mod init example.com/hello", "true"
]
2 = [
  "go build -o bin/cakecutter.exe" = "true"
]
```

## Finishing off

The cake is done, save the file , and run

```
cc local <path-to-the-file.toml> <directory>
```

> `directory` is the name of directory where the template will be created

The template should be created in that directory.<br>

Head to [`How to publish a cake`](/en/publishing-cakes) section if you wanna publish this cake for everyone's use.

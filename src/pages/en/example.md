---
title: Example
description: Cakecutter | Example
layout: ../../layouts/MainLayout.astro
---

# Basic Example Cake

Here is a basic cake which asks for the user's name and creates a file with their name as the content

```toml
[metadata]
name = "name-printer"
description = "Prints your name to a file in seconds!" # XD

[[questions.name]]
ques = "What is your name?"
type = "input"

[filestructure]
"name.txt" = "true"

[content]
"name.txt" = '''
{{index .Ans "name"}}
'''
```

---
title: Introduction
description: Docs intro
layout: ../../layouts/MainLayout.astro
---

### 👀 What is Cakecutter?
Sometimes, the most difficult thing is to just get started with a project. Cakecutter is a tool that helps you to cut the cake and start your amazing project instantly. 

What Cakecutter does:
- Users can [publish](/en/publishing-cakes/), [create](/en/creating-cakes/) or [use a cake](/en/using-cakes) from [Cakes.run](https://cakes.run). Cakes are basically TOML files which contain all the information needed to create a project. 
- According to the information in the `Cakefile`, Cakecutter will create all the files and (you can also fill them with content) in the correct location.
- Setup commands (installing dependencies, etc) can be defined in the `Cakefile`. These commands are run after the files are generated.
- Cakecutter can ask questions to the user and take input. The input can then be used as variables for the project template. [Read the docs here](/en/advance-usage)

## Documentation

- [Installating the CLI](/en/installation)

- [Using cakes](/en/using-cakes)

- [Creating a cake](/en/creating-cakes)

  - [Cake Metadata](/en/creating-cakes/#cake-metadata)
  - [Folding the Batter](/en/creating-cakes/#folding-the-batter)
  - [File Strucuture](/en/creating-cakes/#file-structure)
  - [File Content](/en/creating-cakes/#file-content)
  - [Sprinkling some toppings](/en/creating-cakes/#sprinkling-some-toppings)

- [Advanced Usage](/en/advanced-usage)

  - [Asking questions](/en/advanced-usage/#asking-questions)
  - [Creating files based on answers](/en/advanced-usage/#creating-files-based-on-answers)
  - [Dyanmic file contents](/en/advanced-usage/#dynamic-file-contents)
  - [Running commands based on answers](/en/advanced-usage/#running-commands-based-on-answers)

- [Basic Example Cake](/en/example)

- [Publishing a cake for everyone's use](/en/publishing-cakes)

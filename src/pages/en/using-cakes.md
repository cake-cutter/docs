---
title: Using Cakes
description: Cakecutter | Using Cakes
layout: ../../layouts/MainLayout.astro
---

# Using Cakes

## Online cakes

After installing cakecutter you can run

```
cc cut <cake> <dir>
```

> `cake` is the cake's name and `dir` is the directory where the template will be created

to cut an online cake

## Local cakes

You can cut local cakes written in [`toml`](https://toml.io/) files by running

```
cc local <cake.toml> <dir>
```

> `cake.toml` is the path to the local cake file and `dir` is the directory where the template will be created

## With npx

If you are using cakecutter through npx then just prefix the command with `npx`.

```
npx cc cut <cake> <dir>
```

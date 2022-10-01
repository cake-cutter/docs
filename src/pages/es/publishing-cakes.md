---
title: Publishing Cakes
description: Cakecutter | Publishing Cakes
layout: ../../layouts/MainLayout.astro
---

## Logging in

You need to login before you can publish a package.

```
cc login
```

After you have logged in. You can publish the cake!

## Creating a README

You need to create a `README` file. It contains details about the cake and it will also appear on the website so it should be nice.

## Finding a name thats not taken

If a cake with the same name exists. You won't be able to publish a cake with the same name (unless you own that cake). So please make sure that the name is not taken and then publish

## Publishing

To publish a cake you can use the `publish` command.

```
cc publish <cake.toml>
```

> here `cake.toml` is the path of the `cake` you wanna publish

## Updating the cake

You can update the cake by using the same command. The cake will be replaced with the new one.

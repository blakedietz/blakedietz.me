---
title: Listing test expansions in Keyboard Maestro
date: "2016-11-24T12:00:00.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

One of the main gripes I had about Keyboard Maestro was the lack of built in functionality to list text expansions. I like the idea of text expansions, but I often forget them while trying to build my muscle memory. I've recently discovered a bit of a hack to implement this using built in functionality for Keyboard Maestro. I hope that you find this helpful.

Before we begin, here's the final outcome:

<!-- ![](/content/images/2016/11/text-expansion-simple-example.gif) -->

### Create a new macro group

For this example we'll name it `Text Expansion List Tutorial Example`. You can see my personal text expansions in the `Text Expansions` group, ignore those for now.
![](https://cldup.com/78p_SD1KuC.png)

### Create a new text expansion macro

1. Create a new macro.
2. Name this macro `` `tex: Text Expansion Example ``.
3. Create a trigger of type `This string is typed` that is fired when the string `` `tex `` is typed.
4. Create a new action that is of type `Insert text by typing`.
5. Insert the following text `Check out this rad example`.

<!-- ![](/content/images/2016/11/text-expansion-1.png) -->

### Create a macro that lists text expansions

1. Create a new macro.
2. Name this macro `Show List of Text Expansions`
3. Create a trigger of type `Hotkey Pressed`. I use `hyper + p` to show my list of text expansions. Make this whatever combo that works for you.
4. Create a new action that is of type `Show/Hide macro group` and select the `Text Expansion List Tutorial Example`.

<!-- ![](/content/images/2016/11/text-expansion-2.png) -->

### How it Works

So there's not much magic here. This fix is definitely more of a hack because the name of the macro matches the trigger text for the text expansions. This is done because the macro group lists only the name of macros. If trigger text is dropped from the macro name, then this will not work.

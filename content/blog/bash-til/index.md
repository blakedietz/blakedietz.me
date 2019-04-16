---
title: bash TIL
date: "2018-09-18T12:00:00.169Z"
description: bash
---

Here are some notes about BASH utilities and functionalities that I learned about today. This is more for me than you, but if you find it useful, great! :)

## Search for files that don't contain text

You're used to searching for files that contain text, but what if you need to find files that don't contain specific text? Consider a scenario where you have files that need to be updated to include something. You have a mixture of files that contain the updates already and files that don't contain the updates. The following command is helpful in those scenarios.

```bash
find .  -name package.json -exec  grep  -H -E -o -c  "pre-commit"  {} \; | grep 0
```

The above command will search only for files named package.json and return files that have no instance the text "pre-commit".

## Use arguments from previous commands in the current command

Most of the time when make a directory you want to go to it. Or if you're manipulating a lot files in a folder you'll often want to reuse specific paths. Here's a nice way to do that.

```
mkdir foo;
cd !:1;
```

## Sources

- https://stackoverflow.com/questions/1748129/how-do-i-find-files-that-do-not-contain-a-given-string-pattern
- https://stackoverflow.com/questions/3371294/how-can-i-recall-the-argument-of-the-previous-bash-command/3371711

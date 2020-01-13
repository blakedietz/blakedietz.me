---
title: Elixir learnings - 2020 Week 3
date: "2020-01-19T12:00:00.000Z"
description: What I learned about elixir during week 3 of 2020
---

## Elixir

### Documentation

#### You can't use @doc on private functions

Interestingly you can't use doc for private functions. I understand the argument that documentation shouldn't be generated for private functions, but it is a little surprising that you have to use multiline comments instead of doc strings to document them.

## Sources

[defp]: https://elixirforum.com/t/proposal-docp-for-private-function-documentation-and-doctests/3732/14

1. [Documenting private functions][defp]
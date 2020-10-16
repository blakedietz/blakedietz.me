---
title: Elixir learnings - 2020 week 3
date: "2020-01-13T12:00:00.000Z"
description: This week I learned about using module docs and a little bit about metaprogramming in Elixir.
path: "/blog/2020-01-13/elixir-learnings-week-3"
tags: ["elixir", "programming"]
---

## Elixir

### Documentation

#### You can't use @doc on private functions

Interestingly you can't use `@doc` macro for private functions. I understand the argument that documentation shouldn't be generated for private functions, but it is a little surprising that you have to use multiline comments instead of doc strings to document them.

### Metaprogramming

#### Metaprogramming Elixir

I learned about the ability to directly modify your application behavior with metaprogramming in Elixir.

## Sources

[metaprogramming]: https://pragprog.com/book/cmelixir/metaprogramming-elixir

1. [Metaprogramming Elixir][metaprogramming]

---
title: IO.inspect supports a label option.
date: "2020-10-16T00:00:00.000Z"
description: Make your console output easier to read with labels.
slug: "/blog/2020-10-16/io-inspect-labels"
tags: ["elixir", "tip"]
---

Sometimes when you're using `IO.inspect/2` to debug values, your output can be a bit overwhelming. To make things
easier to read, you can pass `IO.inspect/2` a label option.

## Before

```elixir
Interactive Elixir (1.10.4) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> example = %{foo: "bar"}
%{foo: "bar"}
iex(2)> IO.inspect(example)
%{foo: "bar"}
%{foo: "bar"}
```

## After

```elixir
Interactive Elixir (1.10.4) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> example = %{foo: "bar"}
%{foo: "bar"}
iex(2)> IO.inspect(example, label: "BAZ")
BAZ: %{foo: "bar"}
%{foo: "bar"}
```

## Sources

[hexdocs]: https://hexdocs.pm/elixir/master/IO.html#inspect/2

1. [hexdocs][hexdocs]

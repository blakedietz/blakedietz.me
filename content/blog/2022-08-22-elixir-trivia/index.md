---
slug: /blog/2022-08-22/elixir-trivia
title: Enum.into alternatives and matching structs
description: Some new elixir trivia I learned this last week
tags: []
draft: false
date: 2022-08-22T12:00:00.000-06:00
---

## Map.new/2

Instead of leveraging `Enum.into/2` you can use `Map.new/2` with an enumerable collection.

## Pattern matching structs

I learned that you can pattern match structs.

```elixir
def new(%_{} = struct), do: new_from_enum(struct)
```

## References

[reddit]: https://reddit.com/r/elixir/comments/wr186u/mapnew2_is_objectively_superior/
[gh]: https://github.com/elixir-lang/elixir/blob/7e4fbe657dbf9c3e19e3d2bd6c17cc6d724b4710/lib/elixir/lib/map.ex#L195
[docs]: https://hexdocs.pm/elixir/1.13.4/Map.html#new/2

1. [Github usage of of pattern matching a struct][gh]
1. [Reddit thread that introduced me to the ideas][reddit]
1. [Map.new/2][docs]


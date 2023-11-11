---
slug: /blog/2023-11-11/maps-as-map-keys
title: You can use maps as map keys in Elixir
description: Not that you really should though
draft: false
date: 2023-11-11T12:00:00.000-07:00
---

## Maps as map keys

I ran into some code at work that was using maps as map keys. Something to the effect of

```elixir
defmodule User do
  defstruct [:name, :age]
end

user1 = %User{name: "Alice", age: 30}
user2 = %User{name: "Bob", age: 25}

# Using structs as keys in a map
map = %{user1 => "User 1 Data", user2 => "User 2 Data"}

IO.puts(map[user1])  # Outputs "User 1 Data"
```

I didn't realize you could actually do this. But it makes sense if you dive into the elixir
documentation it's front and center

> Maps do not impose any restriction on the key type: anything can be a key in a map. [<sub>1.</sub>][docs]

## Caveats

I wouldn't recommend using maps as keys for two reasons:

- Uniqueness and mutability: All values of the map that are being used as the key must be strictly equal. So for example, if you modify `user1` above and attempt to use the modified version to access the `map` the key would not be found in the map.
- Performance: Using large structs as keys can impact the performance of lookups, inserts, and deletes, because Elixir has to use the entire content of the struct to compute its hash value.

## References

[docs]: https://hexdocs.pm/elixir/1.12/Map.html

1. [Elixir Map ducmentation][docs]

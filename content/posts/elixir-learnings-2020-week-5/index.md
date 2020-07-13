---
title: Elixir learnings - 2020 week 5
date: "2020-01-27T12:00:00.000Z"
description: What I learned about Elixir during week 5 of 2020
path: "/blog/elixir-learnings-week-5"
---

## Elixir

### Map.get defaults

Something small, but I realized that you can pass in a default to `Map.get` in case the key you're looking for doesn't exist.

### Enum.reduce_while

I also discovered that you can use `reduce_while` which allows you to `reduce` on an enumerable collection until a
criteria is met.

### Modules

#### Automatic node discovery

My current place of work is using [peerage][peerage] for automatic _erlang_ node discovery in k8s. This library makes it possible
to have multiple k8s nodes that are sharing a network to automatically discover each other and connect. See also
[libcluster][libcluster] and [horde][horde] for similar automatic node discovery libraries.

## Sources

[blog]: https://sheharyar.me/
[horde-crdt]: https://daniel-azuma.com/articles/talks/elixirconf-2018
[libcluster]: https://github.com/bitwalker/libcluster
[map-get]: https://hexdocs.pm/elixir/Map.html#get/3
[memento-adding]: https://github.com/sheharyarn/memento/issues/3#issuecomment-426757255
[memento-dynamic-nodes]: https://elixirforum.com/t/pows-mnesia-cache-with-dynamic-nodes-containers-in-kubernetes/25674
[memento-peerage]: https://github.com/sheharyarn/memento/issues/17#issuecomment-546143435
[mnesiac]: https://github.com/beardedeagle/mnesiac
[net-split-discusstion]: https://github.com/pow-auth/pow_site/issues/10#issuecomment-542800558
[peerage]: https://github.com/mrluc/peerage
[reduce-while]: https://hexdocs.pm/elixir/Enum.html#reduce_while/3
[horde]: https://github.com/derekkraan/horde

1. [Map.get][map-get]
2. [Enum.reduce_while][reduce-while]

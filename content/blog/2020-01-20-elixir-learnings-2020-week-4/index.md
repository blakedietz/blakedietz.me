---
title: Elixir learnings - 2020 week 4
date: "2020-01-20T12:00:00.000Z"
description: This week I learned about some awesome (🕶️) Elixir learning resources and PaaS.
slug: "/blog/2020-01-20/elixir-learnings-week-4"
tags: ["elixir", "gigalixir"]
---

## Elixir

## Learning resources

### Sites

#### Elixir school

Self proclaimed as

> The premier destination for learning and mastering Elixir

I've recently played with [Elixir school][elixir-school] for learning how to better work with [Ecto associations][ecto-associations].

<!-- Discuss the learning about `join_through` for default fields. -->

#### Elixir forum

I've stumbled upon solutions multiple times in [Elixir forum][elixir-forum] and hadn't taken the time to sign up. Boy, was I missing out. There's a ton of super helpful questions that have already been answered or discussed on the forums. I would recommend becoming a member and asking questions if you can't find what you need through traditional search.

The most insightful [response][elixir-forum-many-to-many] I've seen thus far was in regards to defining a `many_to_many` relationship in Ecto that also used the `timestamps` macro.

<!-- This lead me to better understand that ecto is setting defaults with the macros these aren't database triggers that are setting that.
-->

### Lists

#### Awesome Elixir

[Awesome lists][awesome-lists] are a wonderful way to learn more about different topics. I highly recommend looking for them for a topic you're planning on learning even if it isn't tech related. I started looking through the [Elixir awesome list][awesome-elixir] to learn more about Elixir.

One nugget that I ended up taking away from the caching section was that most Elixir apps don't reach for Redis when they need caching support. A lot of the community seems to point to `:ets`, `mnesia` and `cachex` instead.

#### Fast Elixir

Learned more about good patterns how to write [fast elixir][fast].

### Absinthe

I learned about the dangers of requesting lists of entities in Absinthe without taking the [N + 1][absinthe-n+1] problem into account.

## Platforms

### Gigalixir

I've been wondering about how to deploy my personal Elixir projects and have started to investigate using [Gigalixir][gigalixir]. I haven't used it yet, but it seems like a good candidate to reduce yak shaving in regards to setting up infrastructure. I'm sure I'll post more about this in the future.

## Sources

[absinthe-n+1]: https://hexdocs.pm/absinthe/ecto.html
[awesome-elixir]: https://github.com/h4cc/awesome-elixir
[awesome-lists]: https://github.com/sindresorhus/awesome/blob/master/awesome.md
[ecto-associations]: https://elixirschool.com/en/lessons/ecto/associations/
[elixir-forum-many-to-many]: https://elixirforum.com/t/ecto-many-to-many-timestamps/13791
[elixir-forum]: https://elixirforum.com/
[elixir-school]: https://elixirschool.com/en/
[fast]: https://github.com/devonestes/fast-elixir
[gigalixir]: https://gigalixir.com/

1. [Absinthe N + 1 problem][absinthe-n+1]
1. [Awesome Elixir][awesome-elixir]
1. [Awesome lists][awesome-lists]
1. [Elixir forum: many_to_many][elixir-forum-many-to-many]
1. [Elixir forum][elixir-forum]
1. [Elixir school: Ecto associations][ecto-associations]
1. [Elixir school][elixir-school]
1. [Gigalixir][gigalixir]
1. [fast elixir][fast]

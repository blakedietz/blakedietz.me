---
title: Elixir learnings - 2020 week 6
date: "2020-02-03T12:00:00.000Z"
description: This week I learned about GraphQL project structures, iex configurations and some awesome books and modules.
slug: "/blog/2020-02-03/elixir-learnings-week-6"
tags: ["elixir", "graphql", "hex modules"]
---

## Elixir

### iex

```bash
export ERL_AFLAGS="-kernel shell_history enabled"
```

### Posts

#### A proposal for an Absinthe application structure

Found that [this][graphql-project-structure] was a really helpful discussion on better splitting up your project structure.

### Books

#### Elixir in action

I'm a huge fan of looking at multiple sources to help solidify my foundtaional knowledge. I've heard good things about [this book][elixir-in-action]. I've started reading chapter 5 to make sure I understand GenServer and OTP a little bit more.

### Modules

#### elixslx

Full fledged library for generating xlsx files for reports if you need to.

## Sources

[graphql-project-structure]: http://www.devonestes.com/a-proposal-for-absinthe-project-structure
[elixslx]: https://github.com/xou/elixlsx
[elixir-in-action]: https://www.manning.com/books/elixir-in-action
[iex]: https://hexdocs.pm/iex/IEx.html

1. [A proposal for an Absinthe application structure][graphql-project-structure]
2. [elixslx][elixslx]
3. [Elixir in action][elixir-in-action]
4. [Shell history in iex][iex]

---
title: What's in a name?
date: "2020-10-21T00:00:00.000Z"
description: Let's explore the different ways that you can reference a GenServer.
path: "/blog/2020-10-21/what's-in-a-name"
draft: true
tags: ["elixir", "GenServer", "Supervisors"]
---

First let's just start by referencing the GenServer, via process id.

```elixir
{:ok, pid} = Stack.start_link()
GenServer.call(pid, {:push, 1})
```

However, through reading the docs we see that the GenServer also has a name that defaults to the module that it's
defined with.

```elixir
GenServer.call(Stack, {:push, 1})
```

Use supervisor

```elixir
{:ok, _pid} = Supervisor.start_link([Stack], strategy: :one_to_one)
```

Reference it with Stack and \_pid

Set supervisor id to stack

```elixir
{:ok, _pid} = Supervisor.start_link([
                %{id: Stack, start: {Stack, :start_link, %{}}}
              ], strategy: :one_to_one)
```

Note that id defaults to name of the module also

- Set name as α and also set supervisor id as β try to reference both, see which wins

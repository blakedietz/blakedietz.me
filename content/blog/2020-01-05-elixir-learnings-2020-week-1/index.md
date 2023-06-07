---
title: Elixir learnings - 2020 week 1
date: "2020-01-05T12:00:00.169Z"
description: Pattern matching, iex and some slick libraries.
slug: "/blog/2020-01-05/elixir-learnings-week-1"
tags: ["elixir", "programming", "learnings"]
---

I'd like to reflect on what I've learned this week. There aren't any specific concepts that are of focus, this is essentially the net of what I googled throughout the week.

## Pattern matching on an empty map

Suppose you have a map that contains the following properties

```elixir
foo = %{:bar: "baz"}
```

Suppose that you want to apply a function to the map `foo`. If you want to check whether or not the map `foo` is empty, naively you would want to write a function declaration of the following

```elixir
def some_fun(%{}) do
  # ... do some stuff
end

def some_fun(%{bar: bar} = some_args) do
  # ... do some other stuff
end
```

You would think that passing `foo` into `some_fun` that the first declaration would be called if `foo` were empty. Well, nope, that's not the case. Instead the first function declaration would match on any parameter that is of type `map` even if it were empty. Instead to write a function declaration that would match empty maps you would need to leverage a guard statement in the function declaration.

```elixir
def some_fun(some_args) when some_args == %{} do
    # ... do some stuff
end
```

## Anonymous functions don't need an explicit parameter

I was surprised by this, but anonymous functions also support pattern matching that doesn't require an explicit parameter. This seems like a nice way to get reusable case statements.

```elixir
handle_result = fn
    {:ok, result} ->
        # do some work
    {:error, error} ->
        # do some work
end
```

Here you could reuse this in a set of statements that have common logic.

## iex

iex is an interactive repl that allows you to work with your application without the overhead of running your application in full.

### Prototyping

Prototyping in elixir is a breath of fresh air. You don't need to worry about setting break points in your code in order to interact with the current program state. Instead you can use iex to load in all of your elixir applications to work with functions and application state all from within a repl.

Running `iex -S mix` allows you to load all of your application into memory. From there you can run any functions defined in modules of your applications that are loaded by your `mix.exs`.

For the project I work on at Vetspire, we utilize Phoenix. Phoenix is a web framework written for elixir. Suppose there's an in memory cache that I want to introspect after making a call to an API in the app that's run by Phoenix. I could set a debugger statement at the point in which we modify the API and review the cache while the breakpoint is being hit, or I could simply run the application, make a call to the API and then invoke a get function in the iex repl.

```bash
# Load run the Phoenix application and begin an interactive repl session
iex -S mix phx.server
# Make a call to the API externally
iex(0)> MyApp.SomeCache.list_all() # get a listing of entries that were added to the cache.
```

I don't know about you, but I find this changes the way that I look at building applications. Normally while going through early prototyping phases you have to make changes to the code, wait for a new compilation phase and then make a call to the corresponding API from the client application to test those changes. Instead I can make direct calls to application code while the application is being run.

## Libraries

### Timex

If you're looking for a good datetime library, this seems to be the way to go. I especially like the fact that the goal of the library is to get the work merged into the standard language of elixir.

### Memento

If you need to work with persistent and in memory databases, Memento makes that much easier to do. It adds a nice api to working with both `:ets` and `mnesia`, in memory and distributed persistent databases that are provided by erlang respecitvely.

### Quantum

If you need simple cron behaviors for jobs in your app, This is the way to go.

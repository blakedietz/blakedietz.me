---
title: Elixir learnings - 2020 Week 2
date: "2020-01-12T12:00:00.000Z"
description: What I learned about elixir during week 2 of 2020
---

## Erlang

### iex 

I learned that iex isn't technically a _true_ REPL [<sub>5</sub>](iexrepl).

## elixir

### Application logging

I also got to take a deeper foray into application logging. I've been working on a more complex feature for work and would like to be able to track down any causes of bugs so `IO.inspect` and the like aren't going to be enough.

It turns out that logging in elixir is actually quite simple. As expected it follows industry practices of having different level support. Check out more at [[6]][logging],[[7]][logging-guide].

### Latest release of elixir

A new release of elixir is in release candidate.

https://github.com/elixir-lang/elixir/releases/tag/v1.10.0-rc.0

### Writing documentation

https://hexdocs.pm/elixir/writing-documentation.html

### Guards

#### Calling into functions that can throw

Ran into this 

```
== Compilation error in file lib/vs_integrations/petco/pgr/pet.ex ==
** (CompileError) lib/vs_integrations/petco/pgr/pet.ex:11: cannot invoke remote function patient.client/0 inside guards
    (stdlib) lists.erl:1354: :lists.mapfoldl/3
```

Associated code 

```
  def map_patient_to_pet(patient) when
        patient.client != nil
    do
    ...
```

#### You can write your own guards

https://hexdocs.pm/elixir/guards.html

### mix tasks

https://elixirschool.com/en/lessons/basics/mix-tasks/#custom-mix-task

### Environment variables

https://elixirforum.com/t/how-to-use-if-or-other-condition-for-dev-or-prod/16235

https://hexdocs.pm/elixir/master/Config.html

### Discovering nodes

http://elixir-recipes.github.io/concurrency/connecting-nodes-same-machine/

### Ecto

#### Joining multiple tables

https://elixirforum.com/t/ecto-how-to-join-three-tables/14485

### Scripting

https://thoughtbot.com/blog/is-elixir-a-scripting-language

### Real world reference projects

https://github.com/thechangelog/changelog.com/tree/master/lib

### exunit

#### Running a single test in exunit

It's possible to run a single test in exunit.

```elixir
mix test /tests/path/to/test/some_test.ex:123
```

#### tags

You can create tags for unit tests.

#### Exmachina

#### Connection ownership

https://medium.com/@qertoip/making-sense-of-ecto-2-sql-sandbox-and-connection-ownership-modes-b45c5337c6b7

### To spawn or not to spawn

https://www.theerlangelist.com/article/spawn_or_not


## Blogs

- [My bad ideas][my-bad-ideas]: A blog about erlang and functional programming
- [Keathley][keathley]

## Sources

[exunit-one-test]: https://stackoverflow.com/questions/21878409/in-elixirs-exunit-is-it-possible-to-just-run-one-test
[exmachina]: https://github.com/thoughtbot/ex_machina
[my-bad-ideas]: https://ferd.ca
[keathley]: https://keathley.io
[iexrepl]: https://ferd.ca/repl-a-bit-more-and-less-than-that.html
[logging]: https://hexdocs.pm/logger/Logger.html
[logging-guide]: https://timber.io/blog/the-ultimate-guide-to-logging-in-elixir/#starting-out-with-a-template-project

1. [Stackoverflow][exunit-one-test]
2. [Exmachina][exmachina]
3. [My bad ideas][my-bad-ideas]
4. [keathley.io][keathley]
5. [REPL? A bit more [and less] than that][iexrepl]
6. [Logger][logging]
7. [THE ULTIMATE GUIDE TO LOGGING IN ELIXIR][logging-guide]
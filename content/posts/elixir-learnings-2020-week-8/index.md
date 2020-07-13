---
title: Elixir learnings - 2020 week 8
date: "2020-02-17T00:00:00.000Z"
description: What I learned about Elixir during week 8 of 2020
path: "/blog/elixir-learnings-week-8"
---

## Elixir

### ExUnit

#### Disabling tests with a @tag :skip

I've worked in systems where you can specify different groups of test. For example the last place I worked allowed you to mark a test around the specific domain, whether or not it was an integration test or a unit test as well as whether or not it was a historically slow test. It turns out that ExUnit has tagging support built right into it.

I was curious to see if I could target specific groups of tests. Particularly I wanted to exclude some tests that have been flaky. This is natively suppored in ExUnit.

To do so first find your test that you want to exclude.

```elixir
defmodule App.ExampleTest do
  #...
  test "Some flaky test" do
    # ...
  end
end
```

Add `@tag :skip` above the test.

```elixir
defmodule App.ExampleTest do
  #...
  @tag :skip
  test "Some flaky test" do
    # ...
  end
end
```

Running `mix test` at this point wouldn't cause the test to be excluded. You need to make one more change. Go to `test/test_helper.exs` and then update the `ExUnit.start` to pass in an exclude argument.

```elixir
# test/test_helper.exs
# Exclude tests with @tag :skip
ExUnit.start(exclude: [:skip])
```

As it turns out [`ExUnit.start/1`][exunit-start] accepts the same arguments that [`ExUnit.configure/1`][exunit-configure] takes.

## Sources

[case-template]: https://hexdocs.pm/ex_unit/ExUnit.CaseTemplate.html
[disabling-tests]: https://medium.com/@pomodoro_cc/easily-skip-exunit-tests-in-elixir-31c26b516146
[exunit-start]: https://hexdocs.pm/ex_unit/ExUnit.html#start/1
[exunit-configure]: https://hexdocs.pm/ex_unit/ExUnit.html#configure/1

1. [Case templates][case-template]
2. [Disabling tests with tags][disabling-tests]
3. [ExUnit.start/1 docs][exunit-start]
4. [ExUnit.configure/1 docs][exunit-configure]

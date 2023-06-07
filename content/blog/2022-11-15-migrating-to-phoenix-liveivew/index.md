---
slug: /blog/2022/11/15
title: "Migrating to Phoenix LiveView 0.18"
description: Some patterns for migrating from Phoenix LiveView 0.17 to 0.18.3
tags:
  - Phoenix
  - LiveView
  - Elixir
draft: false
date: 2022-11-15T12:00:00.000-07:00
---

## Properties with a leading colon

If you're using Alpine as part of your stack, you'll most likely have run into this one.

### Problem

```elixir
# ...
def some_component(assigns) do
  ~H"""
  <div :class="{'hidden': ! show }" >
    <%!-- redacted --%>
  </div>
  """
end
# ...
```

### Solution

```elixir
# ...
def some_component(assigns) do
  ~H"""
  <div x-bind:class="{'hidden': ! show }" >
    <%!-- redacted --%>
  </div>
  """
end
# ...
```

## Layout as string

### Problem

```elixir
  # ...
  def live_view do
    quote do
      use Phoenix.LiveView,
        layout: {MyAppWeb.LayoutView, "some_other_view.html"},
        container: {:div, class: "grow flex flex-col overflow-hidden"}
  # ...
```
### Solution

```elixir
  # ...
  def live_view do
    quote do
      use Phoenix.LiveView,
        layout: {MyAppWeb.LayoutView, :some_other_view},
        container: {:div, class: "grow flex flex-col overflow-hidden"}
  # ...
```

## References

[mtlv]: https://fly.io/phoenix-files/migrating-to-lv-0-18/

- [Migrating to LiveView v0.18][mtlv]

---
path: /blog/2022/11/27/multiple-phoenix-liveview-hooks
title: What happens when you put multiple Phoenix LiveView hooks on an element?
description: Asking the obvious so you don't have to.
tags:
  - Phoenix
  - LiveView
  - Phoenix hooks
  - Elixir
draft: false
date: 2022-11-27T12:00:00.000-07:00
---

Even when an idea seems obvious, it can be useful to put a label or name to it. That is, once you explicitly identify something, it becomes easier to reason about or remember if you create a simple fact or label for the idea.

## Only one Phoenix Hook is supported per element

Suppose there exists a `Phoenix.Component` named `some_component`. Assume there are two Phoenix hooks named `Hook1` and `Hook2`. Assume `some_component` has two `phx-hook` attributes defined which reference the aforementioned hook names in the given order respectively.

Only `Hook1` will mount. `Hook2` will essentially be ignored.

```javascript
const Hook1 = {
  mounted() {
    console.log('Hook1');
  }
};

const Hook2 = {
  mounted() {
    console.log('Hook2');
  }
};
```

```elixir
defmodule App.Components do
  use App, :component

  def some_component(assigns) do
    ~H"""
    <div id="some_component" phx-hook="Hook1" phx-hook="Hook2">
      Rendering some_component
    </div>
    """
  end
end
```

The web console would only log `Hook1` as only the first hook is mounted.

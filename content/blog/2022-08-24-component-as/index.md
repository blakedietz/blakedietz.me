---
slug: /blog/2022-08-24-component-as
title: "Phoenix LiveView: Writing a component that takes arbitrary root elements
  as an argument"
description: Write a component that replaces the root element with an arbitrary tag
tags:
  - Phoenix
  - LiveView
draft: false
date: 2022-08-24T12:00:00.000-06:00
---

# ⚠️ Warning

Since the release of [Phoenix LiveView 0.18.0](https://hexdocs.pm/phoenix_live_view/changelog.html#0-18-0-2022-09-20) this post is no longer relevant. Instead use [dynamic_tag/1](https://hexdocs.pm/phoenix_live_view/Phoenix.Component.html#dynamic_tag/1). The remainder of this post is left here for the sake of reference.

---

For a while I've been trying to figure out how to write a higher order component in LiveView that allows you to define the root element. While I wouldn't recommend doing this often, there are infrequent scenarios wherein it might be helpful.

One example is when you're writing a higher order component that's acting as a container. You'd like to make the container remain semantic while also keeping the component reusable.

You can use `Phoenix.HTML.Tag.content_tag/3` to achieve this.

```elixir
def button_as(assigns) do
  assigns =
    assigns
    |> assign_extra_attributes([:as])

  ~H"""
  <%= Phoenix.HTML.Tag.content_tag(@as, render_slot(@inner_block), @extra_attributes) %>
  """
end

def some_component(assigns) do
  ~H"""
  <.button_as as={:label}>Label button</.button_as>
  <.button_as as={:button}>Button button</.button_as>
  """
end
```
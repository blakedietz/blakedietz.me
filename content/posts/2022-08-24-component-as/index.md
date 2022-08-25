---
path: /blog/2022-08-24-component-as
title: "Phoenix LiveView: Writing a component that takes arbitrary root elements
  as an argument"
description: Write a component that replaces the root element with an arbitrary tag
tags:
  - phoenix
  - LiveView
draft: false
date: 2022-08-24T12:00:00.000-06:00
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
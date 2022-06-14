---
path: /blog/2022-05-31/data-phx-main
title: Discovering the container element for Phoenix LiveViews
description: The data-phx-main element makes live.html.heex DOM structure slighty different than app.html.heex. Learn about where it comes from and how to configure it.
tags:
  - software
  - phoenix
  - liveview
draft: false
date: 2022-05-31T12:00:00.000-06:00
---

## tl;dr

`live.html.heex` has an element that is injected by Phoenix LiveView which causes a difference in DOM structure between `live.html.heex` and `app.html.heex`. This difference in structure might impact sharing layouts between `app.html.heex` and `live.html.heex` due to slight differences in your application DOM structure.

One approach to fixing the problem is through using CSS. You can target the additional element with the following:

```css
[data-phx-main] {
  /* your additional styling here */
}
```

The better approach is to configure your LiveView container value in your application's `my_app_web.ex` module. Specifically, set the `:container` value to the following:

```elixir
# ...
  def live_view do
    quote do
      use Phoenix.LiveView,
        layout: {MyAppWeb.LayoutView, "live.html"},
        # Add the following
        container: {:div, class: "liveview-container"}

      unquote(view_helpers())
    end
  end
#...
```

```css
/* Some css */
.liveview-container {
  /* your styling here */
}
```

## Problem

In order to keep the experience the same between Live and non-LiveViews I wanted to style the two layout templates the same. However, when applying the exact same styling to the two different `app.html.heex` and `live.html.heex` views, the `live.html.heex` version was rendering differently than the `app.html.heex` view.

## Assumptions

### App name

For the rest of the post, assume that the app name is `my_app`. So if you started a new phoenix project, you would pass the following parameters: `mix phx.new my_app`.

## First principles

Before we get down to the one line change, let's tease back a little bit of the magic in Phoenix to make sure our foundation for understanding how and when this problem arises is strong.

### Phoenix layout templates

Let's define the different layout templates in a Phoenix LiveView project. When you generate a Phoenix LiveView project there are three files in the `/lib/my_app/templates/layout` directory<sub>[live-layouts]</sub>.

- `/lib/my_app/templates/layout/root.html.heex`: An html template that wraps all child views in your app. Both LiveView and non-LiveView views.
- `/lib/my_app/templates/layout/app.html.heex`: An html template that wraps non-LiveView views.
- `/lib/my_app/templates/layout/live.html.heex`: An html template that wraps LiveView views that call `use Phoenix.LiveView` passing the layout option of `:layout`

These views call `<%= @inner_content %>` to [transclude] the child views into the layout templates.

### How is the layout option passed for child views?

#### `lib/exo_web.ex`

If you read the above description and check your current project's LiveViews, you might be wondering how the layout option is being set for LiveViews. If you read through your LiveView module, you'll most likely see something like the following.

```elixir
defmodule MyAppWeb.ExampleLive.Index do
  use MyAppWeb, :live_view
  # ...
end
```

There aren't any references to passing the `:layout` param to LiveView anywhere. There is one key line here: `use ExoWeb, :live_view`. If you open up `lib/my_app_web.ex` you'll see something similar to the following:

```elixir
# ...
  def live_view do
    quote do
      use Phoenix.LiveView,
        # Here's the line of interest!
        layout: {MyAppWeb.LayoutView, "live.html"}

      unquote(view_helpers())
    end
  end
# ...
```

In this module the `live_view` macro is defined which passes the needed `:layout` argument to `Phoenix.LiveView`. This is how LiveViews are using `live.html.heex` as their layout.

### Where does the magical `data-phx-main` div come from?

I actually had a heck of a time finding out where the `data-phx-main` element came from. In the long run, I ended up finding the first call and the last call where the element of interest is rendered without finding the exact code that's responsible for rendering `data-phx-main` upon first pageload.

- [First call](https://github.com/phoenixframework/phoenix_live_view/blob/master/lib/phoenix_live_view.ex#L465)
- [Last call](https://github.com/phoenixframework/phoenix_live_view/blob/master/lib/phoenix_live_view/helpers.ex#L366-L370)

LiveViews have an associated container element that is set when rendering. The container element can be configured for the LiveView by passing a `:container` parameter when `use`ing `Phoenix.LiveView` in your app.

## Solution

Passing `container: {:div, class: "liveview-container"}` allows you to define any element as well as sets of attributes, styles and classes you want to define on the containing element. For sake of simplicity I've defined a `div` with a class of `liveview-container`. You can of course use more semantic html elements if you so choose.

```elixir
# ...
  def live_view do
    quote do
      use Phoenix.LiveView,
        layout: {MyAppWeb.LayoutView, "live.html"},
        # Add the following
        container: {:div, class: "liveview-container"}

      unquote(view_helpers())
    end
  end
#...
```

## References

[transclude]: https://en.wikipedia.org/wiki/Transclusion
[live-layouts]: https://hexdocs.pm/phoenix_live_view/live-layouts.html

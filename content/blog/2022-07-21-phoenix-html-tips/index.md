---
slug: /blog/2022-07-21/pht
title: Using multiple inputs_for for the same entity
description: Tips for working with the Phoenix.HTML module
tags:
  - phoenix
  - elixir
  - programming
  - LiveView
draft: false
date: 2022-07-21T12:00:00.000-06:00
---

# ⚠️ Warning

Since the release of [Phoenix LiveView 0.18.0](https://hexdocs.pm/phoenix_live_view/changelog.html#0-18-0-2022-09-20) this post is no longer relevant. The remainder of this post is left here for the sake of reference.

--- 

## Make sure to pass an id for multiple inputs_for for the same entity

You can use multiple `inputs_for` for the same entity, just make sure to pass ids to ensure that Phoenix can diff the fields correctly.

```elixir
# some-file.ex
def render(assigns) do
~H"""
  <.form for={@user_changeset} let={f} %>
    <%= inputs_for f, :friend, fn friend -> %>
      <!-- ... -->
    <% end %>
    <!-- ... -->
    <%= inputs_for f, :friend, [id: "secondary-friend-input"], fn friend -> %>
      <!-- ... -->
    <% end %>
  <% end %>
"""
```

---
path: /blog/2022-07-21/pht
title: Using multiple inputs_for for the same entity
description: Tips for working with the Phoenix.HTML module
tags:
  - phoenix
  - elixir
  - programming
  - LiveView
draft: true
date: 2022-07-21T12:00:00.000-06:00
---
\## Make sure to pass an id for multiple inputs_for for the same entity

You can use multiple \`inputs_for\` for the same entity, just make sure to pass ids to ensure that Phoenix can diff the fields correctly.

\`\``elixir

<.form for={@user_changeset} let={} %>

  <%= inputs_for f, :friend, fn friend -> %>

  <!-- ... -->

  <% end %>

  <!-- ... -->

  <%= inputs_for f, :friend, \[id: "secondary-friend-input"], fn friend -> %>

  <!-- ... -->

  <% end %>

<% end %>

\`\``
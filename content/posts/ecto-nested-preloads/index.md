---
title: Ecto nested preloads
date: "2020-10-08T00:00:00.000Z"
description: The various ways you can preload in Ecto
path: "/blog/2020-08-10/ecto-nested-preloads"
tags: ["programming", "elixir", "ecto", "cheatsheet"]
---

## The many different ways to preload

Ecto has quite a few different ways to preload entities. I always find myself forgetting each of the different ways,
so I'm just going to post each approach in here for a placeholder.

Assume you have a schema such as the following:

- Person
- Friends
    - Many to many relationship with Person
- Comments
    - Belongs to Person

### Keyword list

This approach is the one that I always forget exists and isn't as well documented as the other approaches. It's also
the main reason why I wrote this post.

```elixir
App.Repo.preload(person, [friends: [], posts: [:comments]])
```

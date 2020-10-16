---
title: Elixir learnings - 2020 week 12
date: "2020-03-16T00:00:00.000Z"
description: Mucking with the database from Gigalixir.
path: "/blog/2020-03-16/elixir-learnings-week-12"
tags: ["elixir", "programming", "learnings", "gigalixir"]
---

## Gigalixir

### Resetting your database

Drop into a remote console

```bash
gigalixir ps:remote_console
```

Tear down the database and re-seed it.

```elixir
# Migrate down
Ecto.Migrator.run(MyApp.Repo, Application.app_dir(:app, "priv/repo/migrations"), :down, [all: true])
# Re run migrations
Ecto.Migrator.run(MyApp.Repo, Application.app_dir(:app, "priv/repo/migrations"), :up, [all: true])
# Run seeds
seed_script = Path.join(["#{:code.priv_dir(:app)}", "repo", "seeds.exs"])
Code.eval_file(seed_script)
```

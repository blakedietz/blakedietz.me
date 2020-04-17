---
title: Elixir learnings - 2020 week 10
date: "2020-02-29T00:00:00.000Z"
description: What I learned about Elixir during week 12 of 2020
path: "/blog/elixir-learnings-week-12 "
---

## Gigalixir

### Resetting your database

Drop into a remote console

```
bash
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

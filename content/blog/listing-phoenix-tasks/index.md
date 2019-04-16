---
title: How to hijack a webpage
date: "2017-12-22T12:00:00.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
---

---

Note to the reader: These commands are current as of Phoenix 1.3.

---

I've been working on a side project to hone my skills in another language and web framework. I've decided to pick Elixir and Phoenix. The project I'm working on is named ["Dank Kombucha"](https://app-dev.dankkombucha.com). Although it's not quite in a working state, I've gone through quite a few learning experiences since the start. There's nothing quite like a project to really put your theoretical knowledge of something to the test.

Here's what I've learned about Elixir tasks thus far.

## What are `mix task`s?

Put simply, mix tasks are Elixir functions that offer behavior to complete a built-in or user defined task which can be run from the command line. Tasks are often associated with modules provided by hex dependencies but there are also some built in tasks offered by Elixir.

Here's an example of a task that is offered by Phoenix to create a new Phoenix project.

```
mix phx.new my_project
```

## Discovering `mix task`s

If you want to learn what tasks are available in your project you can run `mix help` from within an Elixir project. This will create a list of all possible tasks that can be run from within the Elixir project that you're working in.

Pairing `mix help` with `grep` can help you to cut down on the noise if you already know what you're looking for.

```
mix help | grep 'phoenix\|phx'
mix local.phoenix      # Updates Phoenix locally
mix local.phx          # Updates the Phoenix project generator locally
mix phoenix.gen.html   # Generates controller, model and views for an HTML based resource
mix phoenix.new        # Creates a new Phoenix v1.3.0 application
mix phoenix.server     # Starts applications and their servers
mix phx.digest         # Digests and compresses static files
mix phx.digest.clean   # Removes old versions of static assets.
mix phx.gen.channel    # Generates a Phoenix channel
mix phx.gen.context    # Generates a context with functions around an Ecto schema
mix phx.gen.embedded   # Generates an embedded Ecto schema file
mix phx.gen.html       # Generates controller, views, and context for an HTML resource
mix phx.gen.json       # Generates controller, views, and context for a JSON resource
mix phx.gen.presence   # Generates a Presence tracker
mix phx.gen.schema     # Generates an Ecto schema and migration file
mix phx.gen.secret     # Generates a secret
mix phx.new            # Creates a new Phoenix v1.3.0 application
mix phx.new.ecto       # Creates a new Ecto project within an umbrella project
mix phx.new.web        # Creates a new Phoenix web project within an umbrella project
mix phx.routes         # Prints all routes
mix phx.server         # Starts applications and their servers
```

You can also list all tasks under a dependency's module by executing commands of the following form `mix <dependency_name>`. So for example if you want to list tasks that are provided by Ecto you can run the following.

```
mix ecto
==> comeonin
Compiling 2 files (.ex)
Generated comeonin app
==> db_connection
Compiling 23 files (.ex)
Generated db_connection app
==> phoenix_pubsub
Compiling 12 files (.ex)
Generated phoenix_pubsub app
==> mime
Compiling 1 file (.ex)
warning: String.strip/1 is deprecated, use String.trim/1
  lib/mime.ex:28

Generated mime app
==> plug
Compiling 1 file (.erl)
Compiling 44 files (.ex)
Generated plug app
==> phauxth
Compiling 14 files (.ex)
Generated phauxth app
==> bamboo
Compiling 21 files (.ex)
Generated bamboo app
==> phoenix
Compiling 74 files (.ex)
Generated phoenix app
==> postgrex
Compiling 62 files (.ex)
Generated postgrex app
==> dank_kombucha_api
Ecto v2.2.7
A database wrapper and language integrated query for Elixir.

Available tasks:

mix ecto.create        # Creates the repository storage
mix ecto.drop          # Drops the repository storage
mix ecto.dump          # Dumps the repository database structure
mix ecto.gen.migration # Generates a new migration for the repo
mix ecto.gen.repo      # Generates a new repository
mix ecto.load          # Loads previously dumped database structure
mix ecto.migrate       # Runs the repository migrations
mix ecto.migrations    # Displays the repository migration status
mix ecto.rollback      # Rolls back the repository migrations
```

## Ecto Tasks

For some reason there are some tasks that are not listed when those options are run. I found them by reading through [this authN/Z example](https://github.com/riverrun/phauxth/wiki/Getting-started#useful-phoenix-commands).

```
# create the database, run migrations and seed data
mix ecto.setup

# drop the database and then run ecto.setup
mix ecto.reset
```

The above commands are super useful, specifically the `ecto.reset` task. For example if I want to test user authentication of my personal email address, and I want to start tabula rasa, just running `mix ecto.reset` allows me to start from ground zero.

## Phoenix Tasks

```
# see what routes are defined
mix phx.routes
```

Of course for Phoenix, you can always check the `router.ex` file for a list of routes, but sometimes it's nice to get a pretty printed listing instead.

## Sources

- David Whitlock, [Getting Started](https://github.com/riverrun/phauxth/wiki/Getting-started#useful-phoenix-commands)

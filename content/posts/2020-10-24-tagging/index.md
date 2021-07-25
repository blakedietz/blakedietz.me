---
title: Tags
date: "2020-10-24T00:00:00.000Z"
description: All the different tagging styles you can use for tests.
path: "/blog/2020-10-24/elixir-tags"
draft: true
tags: ["elixir", "tags"]
---

```elixir
@moduletag integration: true
```

```elixir
@tag integration: true
describe "integration tests" do
    # integration tests
end
```

```bash
mix test --only integration: true
mix test --include integration: true

# Shorthand
mix test --only integration
mix test --include integration
```

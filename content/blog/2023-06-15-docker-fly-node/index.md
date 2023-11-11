---
slug: /blog/2023-06-15/dockery-fly-node
title: Adding node.js to your Phoenix Dockerfile for fly.io
description:
draft: false
date: 2023-06-15T12:00:00.000-07:00
---

Updated 2023-11-11 after [this dumpster fire](https://github.com/nodesource/distributions/issues/1709) of a migration happened. See [here](https://github.com/blakedietz/blakedietz.me/blob/f86b7752003a322648f704279d13291246760631/content/blog/2023-06-15-docker-fly-node/index.md) for the previous version.

For some projects, avoiding the JS ecosystem just isn't possible. If you ever find yourself needing to add `npm` modules to your Phoenix app hosted on fly.io, here are the changes required to ensure your build step works.

## Assumptions

- Note that this guide assumes you've already run `npm init` in the `assets` directory of a Phoenix project.
- The guide also assumes that you have the associated `Dockerfile` and supporting changes from running `fly launch` to host your app on https://fly.io in your project.

## Step by step

`curl` is included as a dependency to be installed in the `apt-get` call.

```docker
RUN apt-get update -y && apt-get install -y build-essential git curl \
     && apt-get clean && rm -f /var/lib/apt/lists/*_*
```

Install `node` and `npm`

```docker
RUN apt-get update && apt-get install -y ca-certificates curl gnupg
RUN mkdir -p /etc/apt/sources.list.d /etc/apt/keyrings
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
RUN echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update && apt-get install nodejs -y

```

Finally, node modules are installed from `npm` to make sure they're available for the build step.

```docker
RUN npm install --prefix assets
#...
# The above needs to be run before this step
RUN mix assets.deploy
```

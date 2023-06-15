---
slug: /blog/2023-06-15/dockery-fly-node
title: Adding node.js to your Phoenix Dockerfile for fly.io
description: 
draft: false
date: 2023-06-15T12:00:00.000-07:00
---

For some projects, avoiding the draw of the JS ecosystem just isn't possible. If you ever find yourself needing to add npm modules to your Phoenix app hosted on fly.io, here are the changes required to ensure your build step works.

## Assumptions

- Note that this guide assumes you've already run `npm init` in the `assets` directory of a Phoenix project.
- The guide also assumes that you have the associated `Dockerfile` and supporting changes from running `fly launch` to host your app on https://fly.io in your project.

## Step by step

`curl` is included as a dependency to be installed in the `apt-get` call. 

```docker
RUN apt-get update -y && apt-get install -y build-essential git curl \
     && apt-get clean && rm -f /var/lib/apt/lists/*_*
```

`curl` is then used to download a version of the nodejs ppas for `apt`. Here version `20` is being used, but feel free to update to whatever version you need for your project.

```docker
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs
```

Finally, node modules are installed from `npm` to make sure they're available for the build step.

```docker
RUN npm install --prefix assets
#...
# The above needs to be run before this step
RUN mix assets.deploy
```

## The patch

```diff --git a/Dockerfile b/Dockerfile
index 795f853..6543192 100644
--- a/Dockerfile
+++ b/Dockerfile
@@ -21,9 +21,12 @@ ARG RUNNER_IMAGE="debian:${DEBIAN_VERSION}"
 FROM ${BUILDER_IMAGE} as builder
 
 # install build dependencies
-RUN apt-get update -y && apt-get install -y build-essential git \
+RUN apt-get update -y && apt-get install -y build-essential git curl \
     && apt-get clean && rm -f /var/lib/apt/lists/*_*
 
+RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
+RUN apt-get install -y nodejs
+
 # prepare build dir
 WORKDIR /app
 
@@ -51,6 +54,8 @@ COPY lib lib
 
 COPY assets assets
 
+RUN npm install --prefix assets
+
 # compile assets
 RUN mix assets.deploy
```

## The full file

Here's the full `Dockerfile` with the changes applied.

```docker
# Find eligible builder and runner images on Docker Hub. We use Ubuntu/Debian
# instead of Alpine to avoid DNS resolution issues in production.
#
# https://hub.docker.com/r/hexpm/elixir/tags?page=1&name=ubuntu
# https://hub.docker.com/_/ubuntu?tab=tags
#
# This file is based on these images:
#
#   - https://hub.docker.com/r/hexpm/elixir/tags - for the build image
#   - https://hub.docker.com/_/debian?tab=tags&page=1&name=bullseye-20220801-slim - for the release image
#   - https://pkgs.org/ - resource for finding needed packages
#   - Ex: hexpm/elixir:1.14.0-erlang-25.0.4-debian-bullseye-20220801-slim
#
ARG ELIXIR_VERSION=1.14.0
ARG OTP_VERSION=25.0.4
ARG DEBIAN_VERSION=bullseye-20220801-slim

ARG BUILDER_IMAGE="hexpm/elixir:${ELIXIR_VERSION}-erlang-${OTP_VERSION}-debian-${DEBIAN_VERSION}"
ARG RUNNER_IMAGE="debian:${DEBIAN_VERSION}"

FROM ${BUILDER_IMAGE} as builder

# install build dependencies
RUN apt-get update -y && apt-get install -y build-essential git curl \
    && apt-get clean && rm -f /var/lib/apt/lists/*_*

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get install -y nodejs

# prepare build dir
WORKDIR /app

# install hex + rebar
RUN mix local.hex --force && \
    mix local.rebar --force

# set build ENV
ENV MIX_ENV="prod"

# install mix dependencies
COPY mix.exs mix.lock ./
RUN mix deps.get --only $MIX_ENV
RUN mkdir config

# copy compile-time config files before we compile dependencies
# to ensure any relevant config change will trigger the dependencies
# to be re-compiled.
COPY config/config.exs config/${MIX_ENV}.exs config/
RUN mix deps.compile

COPY priv priv

COPY lib lib

COPY assets assets

RUN npm install --prefix assets

# compile assets
RUN mix assets.deploy

# Compile the release
RUN mix compile

# Changes to config/runtime.exs don't require recompiling the code
COPY config/runtime.exs config/

COPY rel rel
RUN mix release

# start a new build stage so that the final image will only contain
# the compiled release and other runtime necessities
FROM ${RUNNER_IMAGE}

RUN apt-get update -y && apt-get install -y libstdc++6 openssl libncurses5 locales \
  && apt-get clean && rm -f /var/lib/apt/lists/*_*

# Set the locale
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && locale-gen

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

WORKDIR "/app"
RUN chown nobody /app

# set runner ENV
ENV MIX_ENV="prod"

# Only copy the final release from the build stage
COPY --from=builder --chown=nobody:root /app/_build/${MIX_ENV}/rel/app ./

USER nobody

CMD ["/app/bin/server"]

# Appended by flyctl
ENV ECTO_IPV6 true
ENV ERL_AFLAGS "-proto_dist inet6_tcp"
```

---
path: /blog/{{year}}-{{month}}-{{date}}/
title: Sending and receiving incoming SMS messages with Phoenix and ex_twilio
description: elixir,phoenix,twilio
tags: []
draft: true
date: 2022-03-30T12:00:00.000-06:00
---
## Background

While working through some of the [ex_twilio documentation](https://github.com/danielberkompas/ex_twilio/issues/135), I couldn't find any specific examples of how to respond to incoming text messages. I was surprised to see such a basic example missing from the documentation. After a little digging I was able to create a simple solution.

This article will walk through how to respond to incoming text messages from twilio via Phoenix and ex_twilio.

## Set up

### Create a Phoenix project

In order to receive messages from twilio we'll need to set up a REST endpoint. The endpoint will be called whenever the SMS webhook is called.

```bash
mix phx.new app
cd app
# Install deps and set up postgres
mix setup
```
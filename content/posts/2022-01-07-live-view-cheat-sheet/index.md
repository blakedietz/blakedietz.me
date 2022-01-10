---
path: /blog/2022-01-07/elixir-live-view-cheat-sheet
title: Elixir live view cheat sheet
description: Commonly referenced resources for elixir live view
tags:
  - cheat sheet
  - elixir
  - live view
draft: false
date: 2022-01-07T12:00:00.000-07:00
---

## Lifecycle methods

### mount or handle_params

> The golden rule is: always load data on mount. But if you add live navigation with `live_patch`, the data that can be changed on-the-fly must be now loaded on `handle_params`.[<sub>1</sub>][mount-or-handle]

## PubSub

### MyApp.Endpoint.subscribe or Phoenix.PubSub.subscribe ?

> Of the whole “pubsub” based api on the endpoint (8 funs) two happen to be mostly delegations. That’s what I consider “providing a complete api” instead of requiring users of channels to not only know how to fetch the pubsub module on their own, but also to look in multiple places for functionality, which is supposed to be one cohesive set. (Also removing API would need deprecation or even a major version release)
>
> Phoenix channels align very much with pubsub api wise – which makes sense given pubsub was extracted out of the channels codebase – but it’s still a subset of pubsub in that it has some additional constraints around how messages need to look like and which information is provided by those messages for channels/sockets to be able to pick them up. Also as mentioned theres the fastlaneing optimizations.
>
> That does affect even subscribing. If you use Phoenix.Endpoint.subscribe it’s reasonable to expect to receive only messages, which adhere to the format mentioned. If you subscribe with Phoenix.PubSub that assumption is off.
>
> Plain Phoenix.PubSub is more low level than the channels based messaging.[<sub>2</sub>][presence]

## References

[mount-or-handle]: https://elixirforum.com/t/mount-vs-handle-params-on-the-liveview-life-cycle/31920/3
[presence]: https://elixirforum.com/t/phonenix-pubsub-subscribe-or-myapp-endpoint-subscribe/34412/5

1. [mount vs handle params on the liveview lifecycle][mount-or-handle]
1. [Phoenix pubsub subscribe or myapp endpoint subscribe][presence]

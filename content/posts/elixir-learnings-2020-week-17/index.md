---
title: Elixir learnings - 2020 week 17
date: "2020-04-27T00:00:00.000Z"
description: What I learned about Elixir during week 17 of 2020
path: "/blog/2020-04-27/elixir-learnings-2020-week-17"
tags: ["elixir", "programming", "learnings"]
---

## Elixir

This week's post is going to be pretty light on original content. Here's a digest of some informative links I read this week.

### Implementing fuzzy search with Postgres and Ecto

I was surprised by this [article][fuzzy] as to how easy it is to implement fuzzy search. Of course by now I probably
shouldn't be surprised considering that it feels like everything in the Elixir ecosystem is built with the utmost
thought and care.

### The tipping point for Elixir/Phoenix

Not that Elixir hasn't already been on the rise, but I think that the release of Phoenix's liveview will act as a tipping
point event for the Elixir ecosystem. Part of the reason I chose to leave my last job was to pursue working with
Elixir because I felt like it was going to be a leading web technology. The comments in [this hacker news thread][hn-liveview]
help to summarize my thoughts and feelings about the promise of Elixir and Phoenix in the web development community.

Here's the top comment from that hacker news thread:

> I was a Rails user for almost a decade. I switched to Phoenix/Elixir 3 years ago. Elixir is a super simple language. It has no OO concepts and everything is functions first. In fact, it's so good that I started teaching it for universities. All my production web applications are now fully on Elixir.
> Elixir is one of those languages where everything has been done perfectly as of the time of this comment. When I say perfect, I mean, there has been never once in my career where I hit a roadblock due to the language's limitation or complexity or flawed assumption. I faced this with other languages, but not Elixir.
>
> I'm currently a full time consultant writing, teaching and deploying production apps for clients in Elixir. Most of my apps have served my clients well beyond my contractual agreement. It's almost deploy and forget because of Phoenix. It also scales amazingly well. It's extremely performant.
>
> I just re-wrote the entire crappy mess Wordpress core in Elixir and enjoyed the process. In any other language, I wouldn't be saying the same. It's really an enjoyable language that forces you to rethink the way you write code. Don't be put off by this statement, I mean that in a really good way. And once you start thinking interms of functions, you just won't touch any of those terrible OO programming paradigms (Eg. writing for loops, nesting conditionals, etc.). You will start writing maintainable, beautiful code.
>
> You will appreciate Elixir a lot especially if you have a background in horrible programming languages like Javascript. You will literally start finding ways to use Elixir in your entire stack like I am. It's that good.
>
> Enough said. Give it a shot.

### Async tasks

I was hoping that something similar to javascript's `async/await` primitives were available in the language. Looks like
`Task.async` and `Task.await` are the equivalent. Here's [an example][async-tasks].

## Sources

[fuzzy]: http://tech.forwardfinancing.com/elixir/ecto/postgres/fuzzy-search/2017/12/20/fuzzy-search-in-elixir.html
[liveview]: https://github.com/phoenixframework/phoenix/releases/tag/v1.5.1
[hn-liveview]: https://news.ycombinator.com/item?id=22947341
[async-tasks]: https://www.simon-neutert.de/2017/async-http-requests-elixir/

1. [Implementing fuzzy search with Postgres and Ecto][fuzzy]
1. [Phoenix 1.5 release][liveview]
1. [Build a real-time Twitter clone with LiveView and Phoenix 1.5 ][hn-liveview]
1. [Parallel Http Requests with HTTPoison in Elixir][async-tasks]

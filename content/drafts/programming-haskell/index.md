---
title: Programming Haskell
date: "2020-06-17T12:00:00.000Z"
description: Foo
path: "/blog/2020-06-16/programming-haskell"
---

> We’ll give you a lambda expression. Keeping in mind both alpha equivalence and how multiple heads are nested, choose 
> an answer that is equivalent to the listed lambda term:

1. $\lambda xy.xz$

Options:

- $\lambda xz.xz$
- $\lambda mn.mz$
- $\lambda z.(\lambda x.xz)$

The first thing to notice with this question is that there's a free variable in the function body. That means that the 
first option can be removed from our selection. That leaves us two more options.

- $\sout{\lambda xz.xz}$
- $\lambda mn.mz$
- $\lambda z.(\lambda x.xz)$

There are two tools that we can use at this point. Alpha reduction and Beta reduction. Let's start with an Alpha 
reduction.

$$
\lambda xy.xz
$$
$$
\lambda x.\lambda y.xz
$$


---
title: Debugging strategies
date: "2019-04-17T12:00:00.169Z"
description: Techniques for dealing with those tricky bugs 🐛🐛🐛.
---

Throughout the last few years I've learned debugging techniques that have helped me to get through some pretty insidious
bugs. Through trial and error as well as by osmosis I've come up with a handful of tips that helps me to squash those
bugs.

![](./bugcatcher.png)

## Isolate your problem

One of the best ways to help cut through the complexities of a tricky bug is to isolate your problem. That is,
whenever you find yourself up against a tricky problem, attempt to reduce the number of moving parts within the surrounding system.

To do this, I often create the simplest possible example to reproduce the problem. Often times I'll usebasic sandboxes like [jsfiddle](https://jsfiddle.net),
[repl.it](https://repl.it) or [codesandbox](https://codesandbox.io). Doing so helps you to remove parts of your system
that may introduce implicit assumptions. It also helps you to check assumptions that are made as you move the example
into the newer environment because doing so forces you to find each assumption that was used to make the current environment work.

For example, if you have problems with css styling for a feature, removing the application styling by reconstructing the
feature in a more isolated environment could give you valuable information about your problem. Perhaps you
have styling in your app that's impacting the way an element is being rendered. Or, if you still have the problem
when it is reconstructed in the new environment, you have at least cut down part of your problem search space by knowing
that it is not your application that's causing the bug to occur.

There are other added benefits to reducing problems down to simple examples. Often times when you're trying to show another developer in the open source community a problem that you're running into, you can be limited by not wanting to share your source code publicly through a git issue. Making a simpler example allows you to not only isolate your problem to help you better understand the problem, but it may also empower you to share the problem with the open source community in cases where it might be something related to open source software that you're consuming.

In general, simpler is better. This doesn't change when trying to hunt down pesky bugs. So, next time cut down the number of parts in your system. Try and make the simplest example possible to reproduce the problem.

## Don't lead the witness

Sometimes when you just can't figure out what's causing "the bug", it can be good to reach out to your teammates. Speaking with
teammates can be a very fruitful exercise. It forces you to articulate the problem at hand and in turn helps you to
better analyze if you truly understand what the problem is. You get bonus points if you have to write the problem
statement out, as often times the act of writing by itself can help to better elucidate your understanding of the problem.

The biggest draw to asking your teammates for help is the opportunity to gain a new perspective on the problem that you hadn't taken into account
. However depending upon how you ask the question, the way you pose the problem can ruin the chance of your teammate offering a new perspective.
When asking questions, try to leave as little information about your solution out of the problem. Often times, including your
proposed solution can lead to pushing your teammate onto the same track of thought, which almost defeats the purpose of
reaching out for help in the first place.

Whenever possible, propose the problem you have. It can be best to try and create a problem statement that reduces the
problem into its simplest parts with no information about the solution. From there you can ask your teammates the
question and see if they start solving the problem in the same way you would have. If you're lucky, sometimes you'll get
a completely different solution path offered.

Kudos to Josh Unger for showing me this one. I'll never forget all of the times he interrupted me with, "Don't bias me!"
when I was asking him for some insight on a problem I was having. It was al

## Step away

Sometimes it's just best to step away. No seriously, give it a break. Go on a walk, work on another task. As long as you aren't under extreme pressure from a deadline (and hell even if you are) give your mind a chance to distance itslef from the problem. It's a great way to gather new perspective and more importantly regain energy for more willpower and patience.

## Read the fucking error (RTFE)

You've heard of RTFM, well, RTFE. But seriously, when was the last time that you looked at an error and then kept on debugging only to find that Stackoverflow post that described the exact fix you spent _way too much time_ trying to figure out? Read the error, read it again, and for good measure give it a google search if it's not clear what the error means. You certainly can't be the first person to have encountered the error, or maybe you are you little snowflake.

## Systems thinking

Breaking your problem space down into a systems thinking approach can be extremely helpful when trying to isolate bugs. It also helps you to [isolate your problem](#isolate-your-problem) by removing whole systems from the problem space.

As a simple exercise, here's a rough breakdown of systems for a web application stack. This is by no means exhaustive.

- Client computer
  - Operating system
- Browser
  - Browser javascript engine
  - Browser rendering engine
  - Browser caching
- Your application frontend code
  - Application markup
  - Application css
  - Application code
  - Libraries
    - Library code
    - Library css
    - Library markup
- CDN
- Network layer
- Your application backend code
  - Application code
  - Third party code
  - Database
  - Micro services your app code depends upon
  - Application cache
- Application server
  - Storage
  - Compute resources

Sometimes the act of simply writing this list out is helpful enough. For example while devloping web apps it can be easy to forget the implicit assumption that you're dependent upon a network layer. Using systems thinking you can help to select the systems that most likely need to be observed to further find information about that tricky bug.

## More logging

Sometimes you just can't find it. Sometimes you're just not clever enough to figure out how it happened. That pesky bug made it to live another day. In those cases don't give up.

It may take weeks or even months to reproduce a bug. For those types of scenarios it can be helpful to gather more information about events leading up to and after the bug occurs. So try to log information around the parts of the codebase that may have the highest chance of causing the bug.

In these scenarios remain persistent. Creating placeholder tasks to check back in within the next sprint can help to keep you from forgetting and give you more time to gather information about the bug in the meantime.

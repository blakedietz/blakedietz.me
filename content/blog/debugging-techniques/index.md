---
title: Debugging techniques
date: "2019-04-17T12:00:00.169Z"
description: Techniques for dealing with those tricky bugs 🐛🐛🐛.
---

Throughout the last few years I've learned debugging techniques that have helped me to get through some pretty insidious 
bugs. Through trial and error as well as by osmosis I've come up with a handful of tips that helps me to squash those 
bugs.

## Isolate your problem

One of the best ways to help cut through the complexities of a tricky bug is to isolate your problem. That is, 
whenever you find yourself up against a tricky problem, attempt to reduce the number of moving parts within the problem 
space.

To do this, I often create brand new projects or utilize basic sandboxes like [jsfiddle](https://jsfiddle.net), 
[repl.it](https://repl.it) or [codesandbox](https://codesandbox.io). Doing so helps you to remove parts of your system
that may introduce implicit assumptions. 

For example, if you have problems with css styling for a feature, removing the application styling by reconstructing the 
feature in a more isolated environment could give you valuable information about your problem. For example, perhaps you 
have styling in your app that's impacting the way your element is being rendered. Or, if you still have the problem
when it is reconstructed in the new environment, you have at least cut down part of your problem search space by knowing 
that it is indeed not your application that's causing the bug to occur.

You can continue to use a binary search technique to continue reducing your problem space until you can further nail 
down what is the root cause of the bug. That is, you can jump between different systems that could possibly be impacting 
your bug. So for a client side rendering bug, you could say there are a few different systems that could cause the 
problem:

- Browser rendering engine
- Application markup
- Application css
- Application code
- Library code
- Library css
- Library markup

## Step away

## Systems thinking

From the previous example, we can apply some basic systems thinking. If we take the [Isolate your problem](#isolate-your-problem)
example.

- Browser layer
    - Browser rendering engine
- Application layer
    - Application markup
    - Application css
    - Application code
- Library layer
    - Library code
    - Library css
    - Library markup

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

## More logging

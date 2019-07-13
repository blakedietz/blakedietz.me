---
title: Scrum tactics
date: "2019-07-12T12:00:00.169Z"
description: Scrum tactics I like
---

For the most part scrum-but is inevitable. Scrum doesn't fit every team's dynamic, and that's okay. Here's my version of scrum-but that I've found useful both leading teams and working on them.

The bare minimum parts of scrum that I've found useful are the following:

- standup
- sprint planning
- backlog grooming
- sprint retro

I'll simply discuss the ways of doing each of these facets of scrum that I've found have been successful in the context of a team.

### Standup

#### Bookends

Make your standup short and sweet. Use a key word to denote when people are done speaking. It helps to put a bookend on the conversation and opens the door for the next person in the rotation. Our teams have used "rutabaga" as our bookend.

So for example:

> Me: L24: I fixed a bug with js variables not being encoded correctly. N24: I commit to shipping the bug fix and then completing the logging refactor task. **Rutabaga**.

It's more fun when you make the word your own. So that way when you hire on someone new, they can give you that weird look that says, "Rutabaga?". Make it something that your team likes, maybe something like "pylons" or "fliff". In my experience bookends helps to shorten the message being delivered at standup as most people are waiting with baited breath for their next turn.

#### Commit

During your standup, encourage your team to commit to the tasks they are planning on doing in the day. It's far more meaningful when you hear that from your teammates. Your teammates are there to hold you accountable and you are there to do the same for your teammates. Notice my update from the previous section.

> Me: L24: I fixed a bug with js variables not being encoded correctly. N24: I **commit** to shipping the bug fix and then completing the logging refactor task. Rutabaga.

Now imagine if I gave an update like this instead:

> Me: L24: I fixed a bug with js variables not being encoded correctly. N24: I'm going to try and ship the bug fix and then continue working on the logging refactor task. Rutabaga.

I've found this benefits the person making the commitment more than the team from a psychological perspective. You're publicly saying that you're going to complete something by the end of the day. That helps to raise the stakes even more. Also, what's the worst that could happen? You run into an unforeseen issue and you don't complete the task you set out to do. That's okay! That's what scrum is about. You learn how to better estimate tasks from your experience implementing the things you previously estimated.

You get bonus points if you announce that you committed to something and you didn't finish it the next day. So for example:

> Me: L24: **I committed to shipping the js encoding and completing the logging refactor**. I only completed shipping the js encoding problem. N24: I commit to putting the logging refactor in code review.

Notice that I mentioned that what I committed to. I then set a smaller goal that was a subset of the previous goal I set. Again, committing is more for the person giving the update than it is for your team. Instead of repeating yourself from the previous day, committing to a smaller more attainable task helps to set your sights on something you are more likely to achieve within the day.

### Sprint planning

#### Follow a strict agenda

Sprint planning is a must have meeting. It's the chance for your team to set the goal posts for your next block of work. This is an important meeting because everyone needs to be crystal clear as to what you're pushing for. Otherwise why split your year into arbitrary blocks of time?

Most of the failed sprint plannings I've seen don't often have a well defined agenda. In my opinion there's no room for that, especially in a reocurring and well defined meeting such as sprint planning. To reduce the time spent during planning on context switching, I recommend creating a sprint planning template. This is the one place that you'll use to answer all the formulaic check ins before you get to the most important part of the meeting: planning.

Here's my planning template in markdown:

```markdown
# Sprint

## Sprint planning

### Any time off

- Holidays?
  - No
- Personal days?
  - Me
    - No
  - Teammate x
  - Teammate y

### Any responsibilities

- UI team rotation?
- Escalations rotation?

### Commitments

- [ ] Checked in with team α
  - [ ] Person x

### Themes

- Logging
- Frontend performance performance issues

### Leftover work from previous sprint
```

This way your team knows exactly what they are going to expect. Common questions that are forgotten, often until the middle of sprint planning can be taken care of before you get into the planning itself. This helps to reduce the number of context switches you'll take.

I also like the themes section of the template. It's easy to forget the body of work you're delivering when you're working on bits and pieces here. Explicitly calling out the theme helps to keep your team connected to the overall goal that you're working towards.:w

#### Plan, don't groom

In order for your planning to be successful, you should only be focusing on pulling items in the backlog into your current sprint. One problem I've seen with sprint planning is that it often devolves into a backlog grooming session. People start remembering tasks that they were supposed to do and add them into the backlog or even worse the current sprint. I find that this means that your team is probably disorganized and that expectations have not been properly set. This is also a sign that you probably aren't doing a very good job at backlog grooming.

### Backlog grooming

Backlog grooming helps you to prepare for your next sprint. It a process that helps to realign the priorities you have with the work that you have scheduled. Done well, backlog grooming helps to shorten your sprint planning.

### Sprint retrospective

Sprint retrospective is a chance for you to look back and learn from your successes and failures. It's important to take pause and reflect on how you work and the outcomes of that approach. Take 15 minutes to let your team reflect.

I've found that retrospectives can either have their own separate meeting or can be lumped into sprint planning. If you decided to go for a separate meeting make it short and put it near the end of your sprint before the weekend. This will yield better results as problems and solutions that your team faced will be fresh on their mind.

If you decide to lump retro in to your sprint planning then make sure it's the first thing your team does. This helps with pacing for planning. Also something else that I've found can counteract people forgetting what they remember is to create a document for your retro at the beginning of the sprint. That way at any time in the sprint if they learn something that will be useful to share at retro they can write it down in the document for sharing.

#### Three questions

I've found that retros are most useful when you limit them to three questions:

- What went well?
- What didn't go well?
- What can we do to get better?

The first two questions really lead into the last question. If your team discovered a new tool or methodology for work, and the team should continue using said tool or methodology, then that will fit right into the last question. If something broke down during the sprint, such as communication between teams, documenting that can be useful for future reference. If you find tha a certain team consistently drops the ball with communication you will have a historical record of exactly what happened, which can help for you to course correct in the future.

#### Keep track of what you can do better

It's easy to say that you're going to just do something better and then just walk away without doing anything. In the teams I've lead, I made a point to keep track of what we said we were going to do better and check in during retro to see if we actually did. This is important as it's a simple way to shape your team's culture and practices over time.

If you find that there was something that your team said they were going to do better that your team didn't do, see what their response is when reviewing those items. If there is a consistently passionate response, see if you can create reminders for your team during the sprint to help reinforce the behaviors to do those things. Otherwise, if the team's response is somewhat uninterested, maybe it's not that valuable to do after all. I'll normally keep track of something that we committed to do better for a couple of sprints. If people don't seem to care I'll let it fall off the list, otherwise, I'll try and keep pushing within the team to ensure those things are more likely to happen.

## Special cases

Sometimes things just don't fit into the scrum framework very well. Often times I find that it's nebulous tasks or objectives. Here are a couple of approaches that I find valuable.

### Rapid fire backlog grooming

For very large bodies of work that require multiple parties it can be difficult to put the backlog in the right order. For example, during one of my previous positions we were tasked with migrating from managed hosting into AWS. The body of work alone was difficult to grasp. On top of that we were working with an external consultant to ensure compliance with HIPPA. This lead to dependencies that were difficult to see as we were both investigating and attempting to scope work at the same time.

We found that our backlog was consistently out of alignment with our priorities. In order to better grasp the body of work over time we created a more intensive backlog grooming session. We scheduled the session for a one hour period. The goal of the session was to align our bakclog to our priorities as much as possible given the new information we discovered during sprint. To do this we wanted to cover as many stories in the backlog as possible so we set a timer to five minutes per story. Developers would help to delineate constraints on the story, discuss new learnings about our consultant's deliverables and mention priority as quickly as possible. This allowed us to refine new tasks as much as possible, while also getting a better understanding of what was about to come into our future sprints. Keeping things limited to five minutes helped with focus and created a sense of excitement from the intensity of that focus. Also the timebox helped to build more context for the whole project as you were more likely to get further into future work than you would in a normal backlog grooming session.

These sessions are not sustainable for months at a time. I best recommend them when taking on a new initiative. It helps to get everyone on the same page and you'd be surprised how quickly you start understanding the dependencies in your project.

### Investigation stories

Sometimes you just don't know how hard something is going to be until you do it. In those scenarios I use investigation stories. I'll create a timeboxed task that's at most x points of work. This helps you to stop from blowing out your sprint points on one task. The output of these stories isn't normally anything directly usable. Instead you'll either create a design document from your learnings, or you can create more well defined stories for the actual implementation.

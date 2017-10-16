# Tech Lead Role

## Why

Why do we need Tech Leads in squads and outcome teams?  I like [Pat Kua](https://medium.com/featured-insights/5-tips-for-being-an-effective-tech-lead-7ec36391de34) on the subject:

> **"A good sign of effective tech leadership and a team working together is that everything feels like it’s written by the same developer mindset."**

This is a good thing, as it makes the code much easier to read and understand.

High maturity self organizing teams require only a very light touch from their tech lead, and possibly don't require the role to exist at all - when developers can talk things out and come to alignment on their own efficiently, set good direction and effectively come up with solutions, the tech lead doesn't need to do much. In teams like this, it is their responsibility to stay out of the way, to keep the team rolling. On teams that are still working on attaining this level of maturity, it is the role of the tech lead to get them there.

So, what does it take?

## What

In our organization today, it can be a little confusing. Sometimes the phrase "Tech Lead" is used to describe someone like this:

* A highly technical leader that acts as a partner to the Outcome Team Product Owner(s). This relationship is sometimes referred to as the "Entrepreneur/Scientist" relationship - both have areas of specialty, both have important skills to bring to the leadership process for all of the squads on the Outcome Team.

It can also be used to describe someone like this:

* A highly technical leader that is closely associated with a particular *squad* - a senior developer that's sitting with the squad they serve daily. They go to their squad's standup every day, they are deeply knowledgeable of their squad's backlog, they act as a partner to the Iteration Manager and/or Business Analyst on the squad. 

For this article, we'll be talking about both - though from time to time when we need to differentiate, we'll refer to the first role as an *Architect*, and the second more squad focused role as a *Tech Lead*.

## How

In both cases, these roles at TELUS digital require technical capability, people skills, [architecture skills](architecture.md), and determination. The Architect role has more Enterprise Architecture focus for their entire Outcome Team, the Tech Lead has more focus on Solution Architecture, though both roles will end up collaborating on all of it.

## Differences between leadership roles and Senior Developer

Often leaders have been recognized for outstanding service as a Senior Developer.  This gives them good experience regarding technology problem solving, good instincts to spot problems with specific solutions. However, the old saying goes, ["What got you here won't get you there"](https://www.amazon.ca/What-Got-Here-Wont-There/dp/1401301304). In both roles, it can  be tempting to continue being a major contributor to the codebase (particularly when the team is challenged to meet deadlines) - though, this is counter productive. It's important for the Tech Lead and Architect to not get in the way of the team. The leader that takes on too much of their teams' work ends up causing a situation where the other developers have less knowledge of the code being written (as it was written by someone else). This can lead to the team feeling paralyzed; they feel like they don't understand sections of the codebase, which leads to them feeling like they shouldn't change them. When leaders come in and out of a codebase without fully embedding themselves in the team's processes and mindset, this can be particularly disruptive. Late night coding sessions result in the team scrambling to understand the codebase the next morning, leaders picking up large un-analyzed sections of the code [leads to inefficiency](smaller-stories.md), and causes lots of disruption. 

In the end, unless Architects and Tech Leads are very careful to avoid this kind of disruption, the team will actually scale less and less over time. The rest of the team, without much to do, will either become bored and move on, or their skills will atrophy. Doing software development work is the critical experience it takes to go from developer to Senior, and from Senior to Lead. When Leads take on too much of this work, it robs the team of its own chance to become stronger.

## Team Coach

If these leadership roles are expected to put down some of their old habits, one of the new ones they're definitely expected to pick up is coaching the developers on the team, both collectively and individually.

It's also not uncommon for Tech Leads to go through the git log each day, looking for good practices to amplify. You may find a new, more elegant way to handle something, and be thinking of several places where it might apply. 

### Group Coaching

When a team leader spots a pattern they want spread around a codebase, often activities like mob coding, dev huddles, or lunch and learns are effective ways to do this.

#### Dev Huddle

Dev Huddle meetings are team meetings where developers focus on technical aspects of a codebase. Good practices for dev huddles include showing code - opening up an editor and walking through a codebase, looking at patterns that we want to use more often, describing how it works. The tech lead might facilitate, developers may call out patterns they like. If the lead has spotted a pattern they like, they might ask the developer who came up with it to walk through it with the squad. Sometimes Dev Huddles also have a space for discussion topics, like design decisions, information sharing.

#### Lunch and Learn

A lunch and learn is a format where someone develops some content to present to the team - it can be as simple as a code walkthrough, or formal presentation that relies on a deck. These tend to be "information sessions", helping a squad learn a new technology all at once. They require a little more planning than Dev Huddles, as someone must come up with the content, but are very effective at getting a squad to a certain base-level of information on something.  Its important not to forget the lunch aspect! Use something like Doordash, or order pizza even. Hungry devs don't code as well as devs who aren't hungry!

#### Mob Coding

[Mob code](https://en.wikipedia.org/wiki/Mob_programming) sessions are a group coding activity. Many teams book a one hour mob code session on a regular basis as an effective way to tackle tech debt, or better understand design patterns. 

### Individual Coaching

It's not uncommon for people in either of these roles to hold [one on one](one-on-ones.md) (1:1) meetings with the other developers working on the teams they serve.  As part of these 1:1 meetings leaders can focus on how a particular developer can continue to improve. 

## References

https://medium.com/featured-insights/5-tips-for-being-an-effective-tech-lead-7ec36391de34

https://www.thoughtworks.com/insights/blog/three-common-mistakes-first-time-tech-lead

http://www.se-radio.net/2016/08/se-radio-episode-265-pat-kua-on-becoming-a-tech-lead/

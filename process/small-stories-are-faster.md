## Why

Small stories are beautiful, as they flow through the system more quickly. This gives us faster feedback, which means that its easier to find and fix bugs.  It also means that each increment has less risk in it, as less code is changed. 

### Faster feedback compound benefits

It's easy to see that faster stories lead to faster feedback - QA can look at them even faster. However, the size benefit compounds - teams that have large stories find that their QA folks are spending more time QA'ing stories, which often means that QA people who are busy with older stories will be busy longer - it not only takes a dev more time to build the code, it also takes more time for QA folks to test it. This means that the lag between when the dev finished and when the QA can pick it up is likely going to be longer, even on teams with extra QA capacity. On teams that have large stories *without* extra QA capacity, in many examples lag time between "dev complete" and "QA started" ends up being measured in *weeks*. Even if QA somehow is able to test this large story in half the time it took to develop, that's the best we can hope for is weeks plus days. In the case that the story needs to go back to dev, the likelihood is that the code that originally had the bug has changed radically, and may not even exist. This wastes time for the team in several ways chasing bugs in code that have since been removed or refactored.

## What

One popular approach is to aim for stories that take one day to develop. This places a responsibility on developers to communicate when they predict that stories are too large - they need to ask their BA friends to slice the story down to be thinner. Eventually over time, the team story writers will get better at understanding what a smaller story looks like, and this will have to happen less often.


## How

The [INVEST](https://martinfowler.com/bliki/UserStory.html) principles around what a good story looks like are still important - each story should be independent, negotiable, valuable, small, and testable. So, given these constraints, how do you make stories smaller?  Here's one example: 

>
~~~
Story #132
In order to respond to complaints, 
As a Customer Support Manager (CSM),
I want to capture a complainant's name and email address in addition to the complaint.
~~~

> There is no reason whatsoever, that we could not split this into three actual stories (not tasks):
> * story #132 can be about adding name/email fields to the page that already captures the complaint. Also the DB changes are in this one.
> * story #133 can add validations to the two fields (mandatory, must contain an @)
> * story #134 can be about a pending-status for the email unless a verification email results in a click to confirm.
> * story #135 can be about the aesthetics of the fields. We’ll assume no pre existing non-functional-reqs (NFRs) citing CSS classes to use for new fields of certain types.
>
> If we’re chasing Minimal Viable Product (MVP), and are going live five times a day as well as suffering 100 support requests an hour, then #132 followed by #133 then #134 then #135 going live separately, is maximum throughput (biz-val delivery into production). There is some flair for doing some of them in different orders, or tactically choosing to never do one or two of them.
> If your business people/ customers (or their proxies) only want to sign off after #135, and/or are quite distant from the project/team room, then fix that. Organize some training if you have to.


*Thanks to Paul Hammant's blog post on [small stories](https://paulhammant.com/2012/11/12/smaller-stories/) for the example.*

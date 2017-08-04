
# Architecture

# Why

# What is this 'Architecture' of which you speak? Are we building a house?

 We're *not* building condos, of course - and we're not making blueprints, or designing grand entryways - we're making software. So, what do we mean when we say "Architecture" in Software Development*? 

We're generally referring to software *design* decisions - but generally, when we say architecture we mean the design decisions that will be [difficult to change later](https://martinfowler.com/ieeeSoftware/whoNeedsArchitect.pdf). Sometimes when we say architecture we also mean software design decisions that we feel are important - perhaps they effect privacy, or have other regulatory impact. 

If you have a need to persist data, and you're trying to figure out how to do that, this might be considered a decision that's difficult to change later. If we start out in PostgresQL and move to MySQL later, we're going to have to migrate our data to the new database, think differently about clustering, possibly change code that was relying on specific PostgresQL features. It's a design decision like any other, but one that's going to have broader implications. 

Let's say you're making decisions about logging - no database involved. If your system processes financial transactions, and just logs everything, its possible you'll end up logging a significant amount of information about a credit card. This could get us in trouble if it violates PCI standards. The decision might not be difficult to change, but it does have a big impact on us from a regulatory perspective.

If you name a function `submitOrder` this is an act of software design, of course - but in most cases we would not call it architecture. It's trivial to change later, and doesn't have any regulatory impact.

There are different kinds of architecture, too. We'll talk about two of them here, Enterprise Architecture and Solution Architecture.

## Solution Architecture

Tech Leads and the squads they serve often have to make design decisions about how to solve a particular problem. "We need an app that allows people to save their checking account number so that we can bill them monthly".  No problem - we'll stand up a UI that allows the user to enter the information, we'll use Auth Proxy to handle login, we'll integrate with the BTO service that accepts the checking account number, we'll make sure to use server side rendering and responsive design to make it fast and work well on a phone. These are all Solution Architecture decisions. They represent the software design decisions the team is making about how to tackle the work in front of them. 

Making good Solution Architecture decisions is essentially a process of applying technology experience to solving business problems - so its important to work closely with your Product Owner or Business Analyst friends so that we can deeply understand what the business problem is. A buzzword compliant solution architecture that looks beautiful on paper is only good if its helping to solve the business problem in an elegant way.

## Enterprise Architecture

If "Solution Architecture" focuses on each individual Application,  Enterprise Architecture focuses on how they all fit together in a larger ecosystem. Using GraphQL on one app is Solution Architecture - a decision that most squads will begin using GraphQL within TELUS digital is Enterprise Architecture. Bigger yet, deciding that most of TELUS, including BTO and Tech Strat, will centralize on RESTful approaches to integration over SOAP is Enterprise Architecture. 

# How



* As a note, I don't like construction or real estate development analogies for software, [I consider them harmful](http://www.developerdotstar.com/mag/articles/reeves_design.html). I much prefer *gardening* analogies for software development, likely a habit I picked up reading ["Growing Object Oriented Software Guided by Tests"](http://www.growing-object-oriented-software.com/). 
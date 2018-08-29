# User Stories

## Why

When developers don't have a clear understanding of what work they're supposed to do, they'll end up spending a lot of their time figuring out what to do next. This is expensive, as developers are often the bottleneck in software development.

Old-fashioned concepts like the "Business Requirements document" and "Functional Requirements" have been found to be harmful to an agile / lean / open source oriented approach to software development for a number of reasons:
- They take forever to write
- They take forever for developers to try to parse in to something useful
- They don't at all facilitate iterative process

## What

User Stories are a more modern approach to helping developers answer the question "how do I know what software to make?" Mike Cohn puts it best on [his website](https://www.mountaingoatsoftware.com/agile/user-stories): 

> User stories are part of an agile approach that helps shift the focus from writing about requirements to talking about them. All agile user stories include a written sentence or two and, more importantly, a series of conversations about the desired functionality.
>
> User stories are short, simple descriptions of a feature told from the perspective of the person who desires the new capability, usually a user or customer of the system. They typically follow a simple template:
> 
> As a < type of user >, I want < some goal > so that < some reason >.

It's common practice to write stories out on 3x5 index cards with a marker, forcing them to be fairly short, which places the focus on the conversation. It's more common at TELUS digital to enter them in to JIRA to facilitate teams that are distributed, though often teams which are kicking off a new project will work with markers, sticky notes and 3x5 cards as they're building up an initial release plan.

Mike goes on to illustrate the flexibility of the concept. Stories can describe very coarse grained requirements, or very fine grained requirements:

> One of the benefits of agile user stories is that they can be written at varying levels of detail. We can write a user story to cover large amounts of functionality. These large user stories are generally known as epics. Here is an epic agile user story example from a desktop backup product:
> 
> `As a user, I can backup my entire hard drive.`
> 
> Because an epic is generally too large for an agile team to complete in one iteration, it is split into multiple smaller user stories before it is worked on. The epic above could be split into dozens (or possibly hundreds), including these two:
>
> `As a power user, I can specify files or folders to backup based on file size, date created and date modified.`
> 
> `As a user, I can indicate folders not to backup so that my backup drive isn't filled up with things I don't need saved.`
> 

## How

Bill Wake's [article on the INVEST mnemonic](http://xp123.com/articles/invest-in-good-stories-and-smart-tasks/) goes in to more detail on what makes a good story.

> Characteristics of good stories:
>
> - **Independent**: the stories can be delivered in any order
> - **Negotiable**: the details of what's in the story are co-created by the programmers and customer during development.
> - **Valuable**: the functionality is seen as valuable by the customers or users of the software.
> - **Estimable**: the programmers can come up with a reasonable estimate for building the story
> - **Small**: stories should be built in a small amount of time, usually a matter of person-days. Certainly you should be able to build several stories within one iteration.
> - **Testable**: you should be able to write tests to verify the software for this story works correctly.

For more on the importance and practical advice on how to achieve small stories, check out the article on [smaller stories](process/small-stories-are-faster.md).

Once a story has stabilized, and before its picked up by developers, it's common practice to include acceptance criteria in order to help a developer know when they're finished. QA folks often go by the acceptance criteria when validating a story and developing a test strategy. When present, acceptance criteria often follow a "Given, When, Then" pattern. Martin Fowler's article on the [Given When Then](https://martinfowler.com/bliki/GivenWhenThen.html) pattern describes it well:

> The essential idea is to break down writing a scenario (or test) into three sections:
>
> The 'given' part describes the state of the world before you begin the behavior you're specifying in this scenario. You can think of it as the pre-conditions to the test.
>
> The 'when' section is that behavior that you're specifying.
>
> Finally the 'then' section describes the changes you expect due to the specified behavior.
>
> Example:
> ```plain
> Feature: User trades stocks
>  Scenario: User requests a sell before close of trading
>    Given I have 100 shares of MSFT stock
>       And I have 150 shares of APPL stock
>       And the time is before close of trading
> 
>    When I ask to sell 20 shares of MSFT stock
>      
>     Then I should have 80 shares of MSFT stock
>      And I should have 150 shares of APPL stock
>      And a sell order for 20 shares of MSFT stock should have been executed
> ```

Stories often have their own life cycle. They may start out as literal 3x5 cards or sticky notes; be entered later in to JIRA, and later still enhanced with acceptance criteria pairing with a QA. 

## References

Martin Fowler's [article on user stories](https://martinfowler.com/bliki/UserStory.html) is succinct, complete and well written.

Mike Cohn wrote what is now the [standard book on writing user stories](https://www.amazon.com/gp/product/0321205685?ie=UTF8&tag=martinfowlerc-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=0321205685).

Bill Wake came up with the [INVEST mnemonic](http://xp123.com/articles/invest-in-good-stories-and-smart-tasks/) described above.

Martin Fowler's article on [Given When Then](https://martinfowler.com/bliki/GivenWhenThen.html) explains its roots in the BDD approach to software development.

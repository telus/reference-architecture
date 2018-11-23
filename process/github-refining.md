# GitHub Refining

## Why

At TELUS digital, we use Jira and GitHub to manage our stories and issues respectively. While Jira is completely managed by a team's Product Owner, GitHub is an open forum for any consumers of the product. When maintaining a product used by a large customer base, GitHub issues can pile up due to other tasks being prioritized more. GitHub Refining makes time for addressing these issues, reducing stress on both the developers and consumers of the product. Issues that are brought up in GitHub become regularly prioritized and made into stories, while also being addressed in a way that makes your team's priorities transparent to the issue reporter.

## What

This document will cover the suggested process for handling GitHub Refining efficiently. Suggestions include:

- Scheduling
- Amount of work taken in
- Prioritization & Organization

## How

### Labeling

GitHub Refining requires the use of detailed GitHub labels. These labels will not only help prioritize issues while giving the reporter transparency, but also guide future GitHub Refining sessions.

#### Status Labels

Status labels define where in the process a GitHub issue is. They are as follows:

- triage
  - Automatically assigned to the issue via the triage-new-issues bot. This keeps track of new issues that require labels to be assigned to them.
- status: review needed
  - The team has acknowledged the issue and will discuss its viability at a later time
- status: design review
  - If your team has a designer, this is used when the issue needs to be checked for design approval. An optional step in the refining process addresses issues with these labels.
- status: reviewed
  - The team has reviewed the issue and a story for it has been created in Jira.
- status: in progress
  - The Jira story for this issue is being actively worked on.
- status: on hold
  - Due to team priorities changing, work on this issue has stopped and is now on hold.
- status: blocked
  - Due to a prerequisite blocking progress, the issue cannot be worked on.
- status: stale
  - The issue was determined to be old and possibly no longer relevant. In this case, a follow-up should be put on the issue asking if it is still relevant.
- status: won’t fix
  - The issue was acknowledged but will not be fixed.
- status: completed
  - The Jira story for this issue has been completed. It is at this point this issue can be closed.

#### Priority Labels

Priority labels define how urgent a particular issue is. They are as follows:

- priority: low
- priority: medium
- priority: high
- priority: critical

#### Type Labels

Type labels define the topic of the issue. They are as follows:

- type: defect
  - This is typically for reported bugs.
- type: discussion
  - For issues made to discuss a concept.
- type: docs
  - For issues related to improving product documentation.
- Type: enhancement
  - For issues inquiring about adding or improving features in the product.

### Timing

GitHub Refining is a streamlined process meant to make as little impact on a team’s day as possible. Therefore, the recommended time it should take is _30 minutes_. The recommended frequency of performing GitHub Refining is once per week.

- Time box steps 1-3 for _20 minutes_
- Time box design review for _10 minutes_ (If applicable. Otherwise, give 30 minutes to steps 1-3.)

### GitHub Refining Facilitator

Every week, it is recommended that a new Github Refining Facilitator be selected. This person will be responsible for triaging issues on days where GitHub Refining is not happening. Additionally, they will lead the GitHub Refining meeting for that timeframe.

### Process

1. Review stories with the ‘triage’ or ‘review needed’ label, assess and assign an appropriate label, and rename the issue if unclear. _Every issue requires ‘status’, ‘type’, and ‘priority’ labels._
  * First review triaged or unlabeled issues.
  * Second, review issues that were marked as “Review Needed”

2. Review Pull Requests
  * Look at pull requests (oldest first) _not made by renovate or a team member_ and assign them to a team member to look at right away.
  * Look at pull requests made by a team member that are very old and backlog them.

3. Determine high priority issues and create duplicate stories in Jira.
  * Typically pull in 1 request or defect/accessibility issue every week, based on capacity. The goal is to complete at least 4 GitHub issues per month.
  * _Note:_ if applicable, when something needs a design review, reach out to the reporter to reach out to their team’s designer (who will reach out to their design lead for a design review)
  * Sort all issues by ‘recently updated’ and filter by highest priority, pull in the top reviewed issue
  * The Jira stories only need to link to GitHub, no duplicate information required

4. If your team has designers, check on the status of issues in ‘Design Review’ (can be asynchronous)
5. Refinement facilitator, follow up on any issues last updated over 30 days ago (can be asynchronous)

## Who

* Product Owners

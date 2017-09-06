### Team culture, communication, knowledge and training

#### Abstract goal: 
* Time, time, time! Management to empower, QA for fight for and make good use of time
* Induce communication and improve knowledge sharing through multi channels
* Upskill team members to move to RA/Nightwatch stack
* Encourage team members to contribute collectively to [tasks](https://telusdigital.atlassian.net/projects/TESTING/issues) / [issues](https://github.com/telusdigital/g-testing/issues) to increase QA quality


#### Why?
* QA team members do not have time to tackle tech debts, or upskill to increase work efficiency (e.g: Learn automation)
* Need to encourage team members to voice out concerns (a lot of quiet "Doers"), team members have few communication channels (e.g: rely on weekly QA guild) for knowledge sharing, low visibility outside of squads, haunted us in knowledge transfer in the past.
* For alignment, RA apps will go with Nightwatch for E2E, not a lot QA members know JS/NW
* 1: Increase team member visibility 2: Development outside of day to day scope 3: Make it a team battle than a one man battle

#### Breakdowns
| Description | Target | Current | Path |
| -- | -- | -- | -- |
| Tech maturity : Time allowance | Appropriate time is allowed for team members to tackle tech debts and upskill| Often there was no time | Management, PO and Scrum masters need to realize the problem, empower the team members to do so; team members need to voice out and justify with team the need|
| Tech maturity : Channels | Different channels for training and upskilling, all team members contribute and actively participate | Mostly through peers or self discovery. On broader level: relying on once in a while learn sessions and [QA weekly guild meeting](https://docs.google.com/spreadsheets/d/1rIy_G2ke5QFE9dFlrj9dPNtIdvIsNxWbGDv0RrFH_y8), although not everyone attends | 1: Paring (e.g: Peers, TW) 2: Provide more frequent learning opportunities, e.g: similar to coding dojo 3: Host more frequent (via invite of speakers?) learn sessions|
|Knowledge sharing| Knowledge is well written, consolidated, properly indexed / easily searchable and it encourages members to self serve | Knowledge is scattered and hard to find | Tied to Documentation below |
|Additional QA contribution| Team member contribute outside of job scope to ensure higher maturity for QA in Digital | Few team members willing or able (due to time constraint) to contribute to overall [QA backlog](https://telusdigital.atlassian.net/projects/TESTING/issues/TESTING-86?filter=allopenissues) | 1: Lifting time constraint; 2: Articulate the value (especially personal level) of different initiatives |  
|Recognition and value| Team members feel motivated, recognized, valued and rewarded to contribute their best |Pro: Most team members feel valued and recognized in squads. Con: All QAs are contractors | Recognition programs(e.g: Tokens of awesomeness), FTE opportunity, what else?|

### Standards, processes and documentation 

#### Abstract goal: 
* Establish standards and streamline processes for teams as guidance.
* Have proper and consolidated documentation

#### Why?
* Most teams have their own standards and processes, while autonomy is fine, somethings it creates confusion and messiness. We also should align on some general standards such as browser/platform coverage, so teams know what and what not to support.
* So it's easier for team to post/get information for knowledge sharing.

#### Breakdown:
| Description | Target | Current | Path |
| -- | -- | -- | -- |
| QA process and standards (across digital) | Have well defined standards on testing, including coverage, sign off process, etc.. | [Started on browser, platform, device, screensize coverage](https://github.com/telusdigital/g-testing/wiki), different squads have different process, but do prefer to align on someone broader level | Construct standards/processes based on team's need and different data(e.g: customer), announce to broader team for adoption/alignment|
| Definition of test scope and coverage | The scope(what's covered, what's not) and coverage of testing in each squad is well defined and documented | These information are frequently not written and lives in team member's head, knowledge transfer is difficult|1: Encourage written definition of test scopes and coverages. 2: Have overall [standards](https://github.com/telusdigital/g-testing/wiki/Browser-support-standards) for teams to reference |
| Proper documentation | (Tied to Knowledge sharing section) Have consolidated and easy to use documentation| Information scattered: some live in mediawiki via obelisk.telus.com, some in google drive, some in github| Github + Confluence going forward, former being tech doc, later being business oriented|
| Tooling (hardware/software) | Enable team members to perform their roles via necessary tools| Windows laptop owners don't have admin rights to begin with, no Mac? no IDE? | Team members: voice out needs; Management: provide support once reasons justified |
|Hiring|Hiring: have a standard process and guide to enable all team members to be involved and perform resume screening, job posting updates, interviews | Resume scanning request come from different channels, job postings are everywhere and outdated, relying on certain team members for interview instead of empowering squad members| Resume: tools, consolidate channels; Job postings:single src of ; Interview: leverage [Playbook](https://docs.google.com/document/d/1HWWgc7Kz1dXrEzu7XA7SY9BycJpLFXgVeKB8MXQMRL0/ to allow team members to perform both tech and culture assessments
| Onboarding | Onboarding: have an onboarding playbook to familiarize new members with our tech stack, tools, standards, docs etc... | Nothing yet so a lot of in person onboarding = time consuming| Construct onboarding playbook |
| Test account / Test data management | Test account sharing should follow a proper channel for ease of sharing and security purposes| Many asks in slack channels to ask for account information, historically people posted passwords in slack channel| Amel is working on this? |

### Visibility / Reporting 

#### Abstract goal: 
* Ensure QA work is visible to Digital as a whole, surface useful data from testing perspective.

#### Why?
* No one outside of QA knows what QA is doing, we should turn this blackbox into a whitebox

#### Breakdown:
| Description | Target | Current | Path |
| -- | -- | -- | -- |
| Work visibility | Team members have clear goals, clear focus and visible outcome to show? |Team members' work is visible in squads, but blackboxed elsewhere | Provide and encourage different channels for surfacing visibility such as slack channels, QA guild 10 min standup? |
| Surfacing overall QA status| Overall data on QA is gathered, surfaced and shared via visual representation | Only certain data is visible and shared (via [domo](./domointegration) such as LinkTiger, Saucelabs usage, JIRA / Defects), not everyone cares about them? | ?? |
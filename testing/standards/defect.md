# Defect standards

## Why

-   We want to provide sufficient and wholistic information to developers on defects/issues found, in order to properly diagnose, reproduce, and resolve them.

-   We want to be able to monitor and measure production and staging defects to see the application health and trend, in order to make informed decisions on specific areas for improvement.

## What

We need a standard process of how to
-   Properly report defects
-   Properly monitor defects

To accomplish the above, we use [JIRA][JIRA] for issue tracking, and align on using the issue type `TD Defect` for all production and staging defect reports.

This specific issue type contains useful fields for diagnosis, it also enables data collection and visualization through domo, so that we can do data analysis on defects across all teams.

## How

JIRA:

Make sure the issue type `TD Defect` is enabled for your project by following this [google doc][Enable TD Defect].

When logging defects, make sure to provide as much information as possible, such as:

-   Testing environment
-   Defect nature
-   Browser type

etc.

So that application owners can easily identify and investigate the problem.

As mentioned in the `What` section, we want to be able to visualize defect data.
These are tracked in [the Domo/defect reports][DOMO: defect] view.

## FAQ

Q: “TD Defect” is not showing up when I create issue?

A: That’s because it’s not configured for your project, refer to the documentation: [enabling your project for TD Defect][Enable TD Defect] for instructions.


## Who

@qa

## Reference
*   [How to enable your JIRA project to use TD Defect](https://drive.google.com/open?id=1RnsCCp0q7grCmi2nRqOB0-Cnhd1mMBox7uhUSg1EB2k)
*   [TD Defect initiative doc](https://docs.google.com/document/d/1kupC2NN8nfqjnRILcpYNbeiDbMOye9ngK0T8hL3wqw8)
*   [TD Defect onboarding tracker](https://drive.google.com/open?id=1Wk4Ap_eaUIdess_sZUlIrBTxwzrwdM8NX0wkvXOiAhg)

[Enable TD Defect]: https://docs.google.com/document/d/1RnsCCp0q7grCmi2nRqOB0-Cnhd1mMBox7uhUSg1EB2k
[JIRA]: https://telusdigital.atlassian.net
[DOMO: defect]: https://telus.domo.com/page/1527406136

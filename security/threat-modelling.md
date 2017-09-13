## Why
Threat modelling provides a systematic approach to enumerating the security of
an application. It's a focused approach to identifying the entry points into a
system and the trust boundaries within. Threat modelling has been described as
one of the most important processes to creating secure code. It is important to
adopt the attackers perspective when conducting a threat modelling activity. Threat modelling
can identify conceptual gaps within your applications control mechanisms, which
if left unmitigated could lead to a vulnerability. The output of a threat
model (typically a ranked list of threats against the system) can be used in
risk management decisions as well as inform further Penetration Testing processes.
## What
Threat Modelling is used in a variety of ways within the security community. In
this case TELUS Digital has described it as a discipline of adopting the attackers viewpoint identifying entry points into the system, trust boundaries and coming up with a prioritized list of threats to the system. 
## How
Threat modelling begins by decomposing the application into its components,
identifying the trust boundaries between those components and the data flows
that move throughout the system. Entry points into the system, whether they are
input fields in a web form, database inserts, administrative terminals or others are enumerated and ranked using a categorization methodology. TELUS Digital has settled on employing the STRIDE model created by Microsoft as it's Threat Cateogorization methodology.
STRIDE is an acronym comprised of the following threats. Spoofing, Tampering,
Repudiation, Information Disclosure, Denial of Service, and Escalation of
Privilege. By using this formalized threat categorization, threats can be
systematically identified, and compensating controls established for
mitigation. A completed threat model can be given to the security team to
positively inform follow up Security testing processes to ensure the designed controls are working as expected.
An artifact to capture the output of the threat modelling exercise
hasn't been arrived at but teams conducting that activity can review the
resources section for guidance on how to conduct this process.
## Who
A Threat modelling exercise should be undertaken with your team and the
assigned security resource as a facilitator, the resultant threat model can be
used as a reference to adequate controls are developed.


##Resources
1. https://www.owasp.org/index.php/Application_Threat_Modeling

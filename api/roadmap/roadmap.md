# Engagement
-- Why: when a team comes to API Practice for support there is a clear engagement model.
-- Outcome: what does API Practice provide to teams in terms of RACI?
-- Outcome: when does API Practice disengage? What is our definition of done?
-- Outcome: how are teams onboarded into the Practice community?
-- Documentation: Define new project onboarding process.
-- Documentation: Define the above (def'n of done, etc).
-- Culture: Use and socialize new project onboarding process.

# Modelling
-- Why: ensure that teams think about system concepts in a unified way. Build conceptual "LEGO" blocks for thinking about business and technology problems within Telus.
-- Outcome: a Domain Model for any given functional area.
-- Outcome: an Aspect Model for all given technology areas.
-- Documentation: Domain Modelling (DDD)
---- Starting with Commerce Domain.
-- Documentation: NFR Modelling (AOD)

# Gateway
Why: Blue/Green deployments, traffic draining, canary releases, unified middleware. Routing rules. Failovers, retries, test routing, rate limiting, access control, policy management, metrics and reporting. Service discovery (dynamic IP routing -- Consul or etcd). Circuit breaking (to a virtual service?). Caching responses.
Documentation: API Gateway and Management Platform Requirement Definition
Outcome: requirement definition for an API Gateway.
Outcome: selection of an API Gateway.
Tech: API Gateway istio.io
Outcome: o16n of the selected gateway.
Tech: Monitoring and reporting (platform dashboard and control). What metrics?
Outcome: reports on the defined metrics from the gateway. Example: which BTO services are slowest?
Tech: Should the Gateway be used to throttle authorized, but poorly behaved, AuthProxy clients?

# Catalog
Why: we need a view of the field of battle. Both discoverability of building blocks and a map for rapidly determining "what services use system X", for example in the case of a failure.
Outcome: a catalogue of internal and external APIs available to developers, 
Outcome: evolving into an API Explorer and
Outcome: developer onboarding portal integrated with the TDS portal.
Documentation: API Team Scorecarding
Documentation: API Catalogue
Documentation: Implement catalogue with TDS components
Documentation: Design API Name Registry for API Cataloguing Site
Documentation: Design API taxonomy (tags) for API Catalogue
Documentation: API Explorer
Documentation: API Developer Portal
Tech: API Documentation tech (buy/build)?
Culture: Why did we move from APIary?
Tech: What does Sina need to authenticate?

# Forum
Why: The API Forum is an existing weekly discussion event for the API community. It exists to foster cohension and share information relating to the API Practice.
Outcome: a teaching plan for API University
-- Survey potential students for an idea of topics (eg: Paul Trieu)
Outcome: a plan for the evolution of the forum:
-- Documentation: Plan Teardown Curriculum (starting with the API Starter Kit)
-- Culture: Socialize Show-and-Tell
-- Culture: Socialize API Practice model.
-- Culture: Rotate BTO members through API Practice.
-- Culture: Roadmap interlock in API Forum.
-- Documentation: Curriculum Definition for API University
-- Culture: Review API backlog.
-- Culture: TALK ABOUT THE APIs YOU ARE MAKING.

# FXR APIs
Why: DDD modelling indicates that these are likely our business logic APIs.
Outcome: each of these APIs is created and uplifted.
Domain APIs:
-- Constraints API
-- Offers API
-- Store API
-- Products API
-- Services API
-- Addons API
-- Accessories API
-- Billing API
(-- Payments API)
-- Segments API
-- Customers API
-- Prospects API
-- Carts API
---- Tech: Unifying Cart Between Mobility and Home Solutions
---- In progress via DDD work.
-- Provisioning API
---- Phone Number Management API (Nutella)
-- Orders API
---- Tech: Order Automation (Deprecate "Swivel Chair" Services)

# NFR APIs

Tech: API Status Page
Why: We'd like to be able to see, at a glace, what is up and down.
Outcome: there is a dashboard clearly showing the status of all APIs
Documentation: integrated with API Catalogue.
-- Tech: Uptime reporting.

Tech: Contract Testing.
Why: we'd like to ensure that we understand the APIs on which we rely and are stable and working.
Documentation: Policy on writing contract tests and promoting them to other teams' build processes.
Tech: Contract testing for downstream serives.
Documentation: eg: report on which BT services are slowest (NFR performance testing).
Documentation: more generally, document RESTful development best practices. Opinionated.

Tech: API Starter Kit Design and Build and Provisioning
Why: We maintain an API starter kit to make it easy for teams to build business logic APIs that start with our existing technology prebaked.
Outcome: (continuing) support of the API starter kit project.
-- Currently adding example E2E testing.

Tech: AuthProxy
Why: AuthProxy provides a clean developer experience authenticating into SDF.
Outcome: (continuing) support and o16n of AuthProxy.
-- Documentation
-- Design
-- Build
-- Test (we have a single contract test with SDF).

Tech: GraphQL iBFF Design and Implementation
Why: to simplify content hydration, generalize the BFF pattern, and reduce content model coupling.
Outcome: (continuing) design, development, o16n, and support for a GQL BFF.
-- GraphQL POC
-- Content(ful) Hydration API
-- Documentation
-- Design
-- Build
-- Test
-- Store API (from DDD modelling) is the POC candidate.
-- My Account travel plans is POC.

Tech: Separate Session API from AuthProxy.
Why: Temporary session data persistence is a general need. Currently the Session API is tightly coupled with AuthProxy. For example, this could be used to further generalize our shopping cart flows.
Outcome: Session API is separated from AuthProxy and operationalized.
Session API:
-- Example: make a long-lived cart to track abandonment.
-- Documentation
-- Design
-- Build
-- Test

Tech: Logging.
Why: we want to be able to audit the business and technical functions of our APIs from a central location.
Outcome: a unified logging methodology across all APIs, including scrubbing logs for inappropriate information (example: PII).
Tech: Log view errors.
Tech: Log Aggregation and Scrubbing
Tech: Include versus Image versus Instance

Documentation: NFR Standards.
Why: Separate from, and in support of, business requirements, APIs have technical requirements which need to be understood from the point of view of Telus Digital.
Outcome: Standards documenation around NFRs, potentially including (and nonexhaustively):
-- Accessibility
-- Audit and control
-- Availability (SLA)
-- Backup
-- Capacity, current and forecast
-- Certification
-- Compliance
-- Configuration management
-- Dependency on other parties
-- Deployment
-- Documentation
-- Disaster recovery
-- Error Reporting
-- Efficiency (resource consumption for given load)
-- Effectiveness (resulting performance in relation to effort)
-- Emotional factors (like fun or absorbing or has "Wow! Factor")
-- Environmental protection
-- Escrow (n/a)
-- Exploitability
-- Extensibility (adding features, and carry-forward of customizations at next major version upgrade)
-- Failure management
-- Fault tolerance (e.g. Operational System Monitoring, Measuring, and Management)
-- HATEOAS maturity (none)
-- Legal and licensing issues or patent-infringement-avoidability
-- Logging and aggregation
-- Interoperability
-- Maintainability
-- Modifiability
-- Network topology
-- Open source
-- Operability
-- Performance / response time (performance engineering)
-- Platform compatibility
-- Price
-- Privacy
-- Portability
-- Quality (e.g. faults discovered, faults delivered, fault removal efficacy)
-- Readability
-- Recovery / recoverability (e.g. mean time to recovery - MTTR)
-- Reliability (e.g. mean time between failures - MTBF, or availability)
-- Reporting
-- Resilience
-- Resource constraints (processor speed, memory, disk space, network bandwidth, etc.)
-- Response time
-- Reusability
-- Robustness
-- Safety or Factor of safety
-- Scalability (horizontal, vertical)
-- Security
-- Software, tools, standards etc. Compatibility
-- Stability
-- Supportability
-- Testability
-- Throughput
-- Transparency
-- Usability by target user community (developers?)

----------

External:

Epics:

Culture: Sync with TD roadmap
Culture: Incentivized API Uplift Development
Culture: TDIM Interlock
Culture: BTO resource sharing as part of external outcomes/API university.

Tech: Support
-- My Account Salesforce Case Integration
-- My Account Win at Wifi
-- My Account Prepaid Debit Architecture
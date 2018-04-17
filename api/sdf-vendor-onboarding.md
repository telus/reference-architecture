## Onboarding Vendors into SDF

Most of the functionality Digital relies on is provided by other business units within TELUS, particularly BTO.

Sometimes a particular piece of functionality, a "capability", is provided to TELUS by a vendor.

This document discusses the rationale behind using a vendor product and the way to do so safely within the TELUS technology stack.

### Rationale

Sometimes vendors have expertise in parts of our business and are willing to sell that expertise to TELUS at a price whereat it is more cost-effective for TELUS to buy the business capability from them than to operationalize it internally.

Consuming a vendor-provided capability comes with a strategic challenge: part of the business logic core to TELUS is now provided by another company. This puts TELUS at a disadvantage in negotiations with the vendor: they will tend to increase prices and reduce service quality over time, to increase profit.

If those changes in the value of the vendor service are lower than the cost to TELUS to replace the vendor with another vendor, or with an internal service, then we as TELUS find ourselves in a difficult strategic position.

Keeping this pattern in mind, TELUS can architect software ahead of time in order to make transitioning away from vendors a more attractive business case in future. This document lays out the decision criteria, and logical and physical architectures behind that strategic pattern.

### Decision Criteria

This integration pattern only applies to:

* vendors external to TELUS, that 
* provide capabilities to TELUS, that
* are accessed in a logically synchronous manner, and that
* are useful to more than one TELUS business unit (i.e. outside of just Digital, e.g. to Digital and to BTO).

### Logical Integration Architecture

All synchoronous business capabilities are to be exposed through an enablement gate ([hub-and-spoke pattern](http://www.enterpriseintegrationpatterns.com/ramblings/03_hubandspoke.html)).

### Physical Integration Architecture

SDF (the [service delivery framework](http://go/sdf)) is the current-state physical implementation of the logical enablement gate. SDF is the hub of our (logically) synchronous hub-and-spoke pattern.

From Digital's point of view SDF is the source of (practically) all logical capabilities rendered as physical APIs.

Therefore, in order to expose a vendor capability within TELUS (recall: more widely than simply within Digital) it should be exposed as an API via SDF. SDF provides a _de facto_ abstraction, or façade, in front of vendor capabilities.

How to do so is described below.

#### API Standards

First, a note about standards.

APIs should be RESTful, [as defined by TM Forum (TMF) standard 630 (TMF630)](https://www.tmforum.org/resources/standard/tmf630-api-design-guidelines-3-0-r17-5-0/). Intelligent people can, and do, disagree with TMF630, however it is the baseline for RESTful API design across the Telecommunications Industry. It serves as our starting point.

If there is an [Open API standard](https://projects.tmforum.org/wiki/display/API/Open+API+Table?_ga=2.135202227.302817916.1523970242-590607174.1523970242) more specific to the vendor capability than TMF630 that standard supercedes TMF630. In essence: wrap the vendor capability in the most specific standard possible. The TMF Open APIs implement TMF630 to a greater or lesser extent depending upon its use case applicability.

Ideally, the selected vendor for a given capability natively implements a relevant TMF Open API, or TMF630. If this is not the case, careful thought must be given to whether to wrap it in a TMF Open API-conformant interface before SDF exposure, after, or neither (this is currently a case-dependent judgement call).

#### SDF Onboarding

* See [the SDF API Governance documentation](http://habitat.tmi.telus.com/collaborate/display/sdf/API+Governance).

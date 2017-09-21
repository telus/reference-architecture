# Device farm

## Why
We are living in a mobile first world, reflected by our TELUS.com and My Account app customers: 

- Web with ~ 61% traffic (filtering Samsung default browser traffic) coming from mobile devices. Src: [Domo][Domo: mobile vs desktop], Aug/17 data
- My Account has 630k from native app. Src: [Domo][Domo:my account active user], Aug/17 data

As such, leveraging real devices(see why not emulators and simulators in [FAQ][Devicefarm FAQ]) to mimic and test end to end use cases should be an essential part of the quality assurance scope, which aligns with the TELUS Digital principles:

- Mobile first - simplicity
- End-to-end experiences


---

## What

Devicefarm is a platform aiming to provide teams with real mobile automation and manual testing environments / capabilities.

It consists of infrastructure and software layers that we built from ground up, utilizing opensrc projects such as Selenium and Appium.

It is a huge step in the mobile first initiative, we hope to raise visibility, awareness, and empower teams to improve their mobile testing through this project.

In terms of features, it aims to provide

- Manual physical testing inventory
- Automation test run environment (beta)
- Sync browsing capabilities (alpha)
- A collaboration space for team members to work with mobile

And more coming soon<sup>TM</sup>!

You can also join __#devicefarm__ on slack to get access to [livestream][DF livestream] of the devicefarm in Toronto to get a sneak peak!

---

## How (and benefits)

#### Hardware/infrastructure

We have:

- Wall fixture w/ devices secured in front, and shelving area as work station, standing or sitting! ![][DF media: frontview]
- Mac mini servers powering automation system ft. security alarm![][DF media: servers and alarm]
- Additional security w/ Nest cam![][DF media: nestcam]

#### Software/framework

We have [farmville][Farmville] which provides
- Web automation environment via Selenium/Appium + Nightwatch(or any other testing framework working)

  - Visually, it looks like ![][DF media: webapp]
  - Benefits: 
    - By running automated web tests on the devicefarm, teams can quickly gain a sense of how their apps performs on different devices/operating systems/screensizes. These automated tests(when written properly) have rapid feedback, high accuracy, low false positives, and most importantly frees up team members to focus their testing on the non-repetitive and meaningful exploration.
    - Devicefarm is placed in an open area, having your apps running against it is a great way to showcase and promote your work done. And potentially giving other teams inspiration how to create theirs.

- Native app automation environment, via Expresso/XCUITest

  - Visually, it looks like ![][DF media: app]
  - Benefits:
    - Similar to web automation, but focusing on native apps

- Sync browsing (action on one device, and it will be performed across all devices)

  - Visually, it looks like ![][DF media: sync]
  - Benefits:
    - Exploratory testing across multiple devices at the same time! Great tool for testers and POs!
    - Multi threaded visual validation for both published apps and in dev apps! Great tool for designers and front-end devs!

- And of cause, manual testing inventory:

  - Visual demonstration by the Mobility GTM team on their iPhone launch prep: ![][DF media: mobility]
  - Benefits:
    - Providing a physical inventory for teams to do ad hoc/exploratory testing with real devices

---

## Questions?

- Check out the [FAQs][Devicefarm FAQ]
- Join __#devicefarm__ on slack and ask away

--- 

## Who

@qa @devs @designers

--- 
## Links

#### Docs
* [Project timeline](https://drive.google.com/open?id=1ULtbWMwvXWEm0zlySrsRdYP_oSWnj4yAufoiXFH_dQw)
* [User requirements](https://docs.google.com/document/d/1IZPupA8_tuLNRlLnf4C1DLoGfQOO-cW_4goald-9J1g)(to construct design v2)
* [Inventory and HW information](https://drive.google.com/open?id=1nu_K7_OBW4UnX5XE5O5yRrlu_5w6z7K-UpvrTWo070E)
* [Presentation deck towards guilds](https://drive.google.com/open?id=1wtiAdEhmzqcxYLyoSAQ77BVBh34UIpgPAv_dMzLoepc)
* [Early stage design ideas](https://docs.google.com/document/d/1eFVSMpoER5ShzC7Ex2_BIgULc_Ucyd2tdlTqDKGuS-4)

#### Media
* [Album: Wall mount in production](https://goo.gl/photos/aVsJWxJjRwWaMLSX8)
* [Mock: wall mount](https://drive.google.com/open?id=0B-bqF6r0I5YgR0RVVVRvWHB2SEk)
* [Mock: 2 pieces](https://drive.google.com/open?id=0B-bqF6r0I5YgbnFDbmhQbmoxMzA)
* [Drawing: mock design](https://drive.google.com/open?id=0B-bqF6r0I5YgUG9ERkNIQ1BQR1k)
* [Drawing: Software layer](https://drive.google.com/open?id=0B-bqF6r0I5YgTmEtQ1BrbHBIZ2M)
* [Ghostlab: sync browsing](https://drive.google.com/open?id=0B-bqF6r0I5YgWTR6SnNCWURRYUk)
* [Design draft v1: Wall mount](https://drive.google.com/open?id=0B-bqF6r0I5YgVHFCY0JDWjZacHM)
* [Design draft v1: mobile station](https://drive.google.com/open?id=0B-bqF6r0I5YgQ3FtMmNVLS1rV1U)
* [Design draft v2: Wall mount](https://drive.google.com/open?id=0B-bqF6r0I5YgYjQ3YW5ERVhMYnd2bEhwWG5KcHRDWU5IRDRF)
* [Design draft v2: Mobile station](https://drive.google.com/open?id=0B-bqF6r0I5YgVFIxR3RxYjNpZDBhejZBSXRjS09MWHZzcUJF)


#### Tech

* [Grid FW setup repo](https://github.com/telusdigital/farmville)
* [Machine setup](https://drive.google.com/open?id=1rkqCqPDlNR_aH4zrTGWEqb-jyF8jJ6-pI1EH13hl3rA)
* [Framework requirements design](https://docs.google.com/presentation/d/1NlHf1CCi6PQ23HwIUYKgGEQcOrGelzJgb9ZKEwX21ZA)
* [Grid setup](https://drive.google.com/open?id=1CNwNHZbw8i8rchWri6SmIffWFrocuJjTcgv0wNAo8RI)
* [Enabling tests to run on mobile (Ruby stack)](https://docs.google.com/document/d/1XKPbiIAv8J9TNBvzB5itStKnPnt_vDQ3r5Qvo1XxL-U)
* [Early sample run with 2 nodes](https://drive.google.com/open?id=0B-bqF6r0I5YgWWxZa0I3dmQ3ODg)


#### Services

* [Perfecto](https://www.perfectomobile.com/)
* [Saucelab's Test Object](https://app.testobject.com)
* [Amazon's AWS Device Farm](https://aws.amazon.com/device-farm/)


#### References

* [Building a device lab - Lara Hogan](https://drive.google.com/open?id=0B-bqF6r0I5YgTUtWN2FnOW5Fbk0)
* [ETSY's mobile device lab](https://codeascraft.com/2013/08/09/mobile-device-lab/)
* [Mobile marketing stats](http://www.smartinsights.com/mobile-marketing/mobile-marketing-analytics/mobile-marketing-statistics/)
* [Saucelabs: Automated mobile testing requires real device and emulators](https://drive.google.com/open?id=0B-bqF6r0I5YgZzJIaTd4OE83aXM)

[Domo: mobile vs desktop]: https://telus.domo.com/page/1401343950/kpis/details/1984288719
[Domo:my account active user]: https://telus.domo.com/page/818380619/kpis/details/2118611472
[Devicefarm FAQ]: devicefarmfaq.md

[DF media: frontview]: devicefarm_media/df_frontview.jpeg

[DF media: servers and alarm]: devicefarm_media/server_n_alarm.jpeg

[DF media: nestcam]: devicefarm_media/nestcam.jpeg

[Farmville]: https://github.com/telusdigital/farmville

[DF media: vote]: devicefarm_media/vote.gif

[DF media: webapp]: devicefarm_media/webapp.gif

[DF media: app]: devicefarm_media/applandscape.gif

[DF media: sync]: devicefarm_media/syncbrowse.gif

[DF media: mobility]: devicefarm_media/mobility.gif

[DF livestream]: https://video.nest.com/live/VujA91jdFd
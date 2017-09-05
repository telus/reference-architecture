# Device farm

## Why
Web is already living in a mobile first world, telus.com customers are no different, with close to 60% traffic (filtering Samsung default browser traffic, src: Analytics team) coming from mobile devices (Smart phones and tablets). Plus we have ~500k traffic from native app (src: Vader / My Acc app squad)

Given the above, testing on mobile should be an essential part of the testing scope, especially from an E2E perspective, as it mimics the user journey more so than the lower level functional testing.

Emulators and simulators are good tools to help with mobile testing, but they don't cover all the grounds. (See [Reference]()) After all, our customer are not using emulators and simulators to browse, hence we need test coverage on real physical devices.

## What

Now that we've established the need for real device testing, with the resources we have as a teleco (easy to access devices and plans), all we need to do is setting up a network that connects the dots(devices), allowing team members to easy perform automation and manual testing. 

Enters Devicefarm, a system consists of infrastructure, hardware layer and software layer to enable the above.

## How

Take a look at our live stream to give you a rough idea!
https://video.nest.com/live/VujA91jdFd
Password: Telus1337!

## Questions?
Check out the [FAQs](https://github.com/telusdigital/g-testing/wiki/Devicefarm_FAQs)

## Who

@qa

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


## Services

* [Perfecto](https://www.perfectomobile.com/)
* [Saucelab's Test Object](https://app.testobject.com)
* [Amazon's AWS Device Farm](https://aws.amazon.com/device-farm/)


## References
#anchor-test
* [Building a device lab - Lara Hogan](https://drive.google.com/open?id=0B-bqF6r0I5YgTUtWN2FnOW5Fbk0)
* [ETSY's mobile device lab](https://codeascraft.com/2013/08/09/mobile-device-lab/)
* [Mobile marketing stats](http://www.smartinsights.com/mobile-marketing/mobile-marketing-analytics/mobile-marketing-statistics/)
* [Saucelabs: Automated mobile testing requires real device and emulators](https://drive.google.com/open?id=0B-bqF6r0I5YgZzJIaTd4OE83aXM)
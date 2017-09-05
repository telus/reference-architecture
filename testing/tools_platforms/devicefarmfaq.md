#### Q: Why are we doing this again?
###### A: Check out the [Why](https://github.com/telusdigital/g-testing/wiki/devicefarm) section

#### Q: Why building it with physical devices instead of just using emulators/simulators?
##### A: Let's look at the following points
##### 1. **Customers** Do our customers use emulators or physical devices? We should test under real usage conditions which cannot be provided by emulators and simulators. Emulators are often inferior in performance because they need to mimic the hardware + software layer, making them slower to use than real devices. Simulators, while faster, as it only mimics the software layer, might behave different than what real devices do. Here's a complete [showdown](https://www.guru99.com/real-device-vs-emulator-testing-ultimate-showdown.html) of such debate.
##### 2. **Inventory** As a Telecom, we can easily access a lot of devices with data plans loaded, in fact we have 2 full drawers in TOR and VAN with testing devices, but they are not well known to team members, especially new team members. The tracking of those drawers is also poor, we often have devices missing as they are not properly logged. With Devicefarm, it(will) serves as a centralized inventory for teams to access the physical devices for testing purposes.
##### 3. **Visual effects** Having the real devices easily visible in the office, flashing and showing products built (by running automated tests), has higher visual impact to promote mobile testing than emulators and simulators running on one's computer.
##### 4. **It's just cooler** Don't you think?

#### Q: Why hosting in house instead of utilizing cloud services (Perfecto, Saucelabs testobject, Amazon device farm, Google firebase)
##### A: 1: Resources: We are a teleco, we have easy access to tons of devices and putting any plan we want on them. Why not take advantage of that? (We already have lots of devices in both [Toronto](https://podio.com/teluscom/uet-8mxsl9/apps/device-shelf) and [Vancouver](https://docs.google.com/document/d/1imE-Q3JGlJBLPMDJ9Cx4quES7NVos2avCZNr73t15yQ)) </br><br>2: Pricing, we cannot justify spending 300k per year on a hosted device lab just yet, without proving value and defining long term scaling strategy.</br>

#### Q: Is this only for Toronto?
##### A: It will be in both TOR and VAN, piloting in TOR for now

#### Q: How much % of user devices does Devicefarm cover
##### A: Currently(08/08/17) with the 14 devices, ~ 70% based on [Top 25 mobile devices card in DOMO](https://telus.domo.com/page/1401343950/kpis/details/646456757)

#### Q: What security measures are there
##### A: For wall mount, the Mac minis are secured inside a lockable area (see [Design draft v2: Wall mount](https://drive.google.com/open?id=0B-bqF6r0I5YgYjQ3YW5ERVhMYnd2bEhwWG5KcHRDWU5IRDRF)), the devices are to be secured by leverage a [3rd party](http://shopguard.com/) locking unit which is used in TELUS stores(in progress). For the mobile cabinet, the doors will be locked and only accessed by TELUS employees via badges(To be implemented). We also intend to include a [security cam](https://nest.com/camera/meet-nest-cam-iq/).

#### Q: How does it work from a tech perspective?
##### A: Long story short: Mac minis power devices as Appium nodes, connects to a Selenium grid/server, which handles requests and deligate to nodes based on desired capabilities.

#### Q: Why Appium?
##### A: Open source, supports both iOS and Android, largest in market, built on Selenium folks with selenium experience can easily understand

#### Q: Why Mac minis?
##### A: Needed for iOS automation

#### Q: Why only 4 devices per mac mini?
##### A: It only has 4 USB slots. (Q: Why not put in USB adapters to plug in more? A: performance and power consumption). FYI Perfecto (who specializes in physical device testing) recommends the optimum being 2 devices per servers. We will start with 4 and gauge the performance as we go along.

#### Q: How do you manage the devices? 
##### A: For a short term strategy, we will rely on open source frameworks such as https://github.com/groupon/Selenium-Grid-Extras, as well as some process management scripts to check the health of devices.  For a long term strategy, a proper MDM (mobile device management) system needs to be established (cost associated, to research)

#### Q: How many devices do you plan to have? How do you scale?
##### A: To start, we will have around 15-20 devices on the [wall display](https://drive.google.com/open?id=0B-bqF6r0I5YgaDU5QXFhLU9WWUNWaDdtenZDTnVfWm9sVGNR), once we prove out the value and need, we will go to phase 2 to craft out the [device cabinet](https://drive.google.com/open?id=0B-bqF6r0I5YgVFIxR3RxYjNpZDBhejZBSXRjS09MWHZzcUJF), which will host around 50-60 devices. As a long term scaling strategy, in house hosting might not be maintainable, so we will seek out cloud services once we reach that point.

#### Q: How much are we spending on this?
##### A: Ask Ben for details, Slack: @benexpress; Email: ben.chen@telus.com

#### Q: Why device farm, not device lab?
##### A: The rationale is that a farm can be "grown" or scaled up, where as a lab perceives a confined space and a static image, a farm can be nurtured by the inspiration of its farmers (us all) where as a lab is more of a ... ok I can't BS any longer, there's no difference between the two, call it whatever you like.

#### Q: What's the status of this project?
##### A: Check out #devicefarm on Slack for updates and progress.

#### Q: I can't find the answer I want!
##### A: Ask in #devicefarm on Slack, or contact Ben: Slack: @benexpress; Email: ben.chen@telus.com
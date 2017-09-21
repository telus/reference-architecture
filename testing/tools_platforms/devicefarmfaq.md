<details><summary>Q: Wait...why are we building this again?</summary><p> 
        
Check out the [Why][Devicefarm: Why] section

</p></details>

---

<details><summary>Q: Why building it with physical devices instead of just using emulators/simulators?</summary><p> 

Let's look at the following points

1. **Customers**: Do our customers use emulators or physical devices? We should test under real usage conditions which cannot always be provided by emulators and simulators. 
2. **Limitations**: Emulators are often inferior in performance because they need to mimic the hardware + software layer, making them slower to use than real devices. Simulators, while faster, as it only mimics the software layer, might behave different than what real devices do. Here's a complete [showdown][Real vs simulator and emulator] of such debate.
3. **Inventory**: As a Telecom, we can easily access a lot of devices with data plans loaded, in fact we have 2 full drawers in TOR and VAN with testing devices, but they are not well known to team members, especially new team members. The tracking of those drawers is also poor, we often have devices missing as they are not properly logged. With Devicefarm, it(will) serves as a centralized inventory for teams to access the physical devices for testing purposes.
4. **Visual effects**: Having the real devices easily visible in the office, flashing and showing products built (by running automated tests), has higher visual impact to promote mobile testing than emulators and simulators running on one's computer. 
5. **It's just cooler** Don't you think?

</p></details>

---

<details><summary>Q: Why hosting in house instead of utilizing cloud services (Perfecto, Saucelabs testobject, Amazon device farm, Google firebase)</summary><p> 
        
1. Resources: As mentioned in the previous question, we are a telecom, we have good access to physical devices. (We already have lots of devices in both [Toronto][Toronto inventory] and [Vancouver][Vancouver inventory]) Why not take advantage of such by building on top of what we have?
2. Pricing, we cannot justify spending 300k per year on a hosted device lab just yet, without proving value and defining long term scaling strategy.

</p></details>

---

<details><summary>Q: Is this only for Toronto?</summary><p> 
        
It will be in both TOR and VAN.

We are currently piloting in TOR to promote the concept, gather feedback and make sure it provides value for teams. Once we have a good turnout, it will be much easier to obtain backing to establish Devicefarm in Vancouver as well.

**Follow up Q:**

If it's currently only in TOR, how can VAN use it?

A: Aside from the manual use cases such as sync browsing and physically testing with the devices, all other functionalities can be performed remotely (e.g: web or native app automation). 

There's also a [live stream][Nest stream] broadcasting the wall mount 24/7 (for access, join #devicefarm on Slack)

</p></details>

---

<details><summary>Q: How much % of user devices does Devicefarm cover</summary><p> 
        

Currently(08/17) with the 14 devices, ~ 70% based on [Top 25 mobile devices card in DOMO][Top 25 device]

</p></details>

---

<details><summary>Q: How does it work from a tech perspective?</summary><p> 
        
Long story short: Mac minis power devices as Appium nodes, connects to a Selenium grid/server, which handles requests and deligate to nodes based on desired capabilities.

</p></details>

---

<details><summary>Q: How can I start using devicefarm for running my automated tests?</summary><p> 
        
For web automation, if you are using Nightwatch.js, or you are still on the Ruby/Cucumber automation stack that we had previously implemented(yes it's still supported), then you are in luck! It would be simply pointing to the Selenium server dedicated for devicefarm in your Selenium config. Where is this Selenium server you ask? Checkout our [starter-kit][starter-kit]! (WIP/PR in progress)

</p></details>

---

<details><summary>Q: Why Appium?</summary><p> 
        
- Open source 
- Supports both iOS and Android native or hybrid
- Most popular in market = higher chance support
- Good [documentation][Appium documentation]
- Easily integrated with Selenium, the concepts(such as desired capabilities) are easily understood by folks with Selenium experience, which most testers have

</p></details>

---

<details><summary>Q: Why Mac minis?</summary><p> 
        
- iOS automation needs OSX (the operating system that Macs runs)
- Mac minis are the cheapest amoung all Mac machines

</p></details>

---

<details><summary>Q: How many devices does one Mac mini support?</summary><p> 
        
Currently: 4

Reason being: Each mini has 4 USB slots, and we want to avoid using USB adapters to plug in more, which will introduce performance impact

FYI [Perfecto][Perfecto] (who specializes in physical device testing) recommends 2 devices per server for performance optimization. We will start with 4 and gauge the performance as we go along.

</p></details>

---

<details><summary>Q: How are the devices managed?</summary><p> 
        
- Software layer: For a short term strategy, we currently just use selenium grid's console, as well as some shell scripts to manage the devices.  For a long term strategy, a proper MDM (mobile device management) system [needs to be established][Github MDM issue].

- Hardware / infrastructure: Currently manually managed

</p></details>

---

<details><summary>Q: What security measures are there</summary><p> 

For hardware:

1. The devices are secured by leveraging [Shopguard's][Shopguard] locking unit which is also used in TELUS stores, these units are connected to a central alarm so that if any of the devices is detached, or any of the cables is cut, the alarm will go off. 

2. The the Mac minis are secured inside a lockable area in the wall mount / fixture

3. We have a [Nestcam][Nestcam] monitoring the wall fixture 24/7, with live streaming and video history capabilities.

For software:

1. The Selenium server will be accessed via API tokens (WIP) much like how Saucelab's API end point functions.

</p></details>

---

<details><summary>Q: How many devices do you plan to have? How do you scale?</summary><p> 
        
To start, we will have around 16-24 devices on the wall fixture(Phrase 1), once we prove out the value and identify the need, we can either 

1. Go to phase 2 to craft out the [device cabinet][Device cabinet], which will host around 50-60 devices. 
2. Seek out cloud services (Saucelabs's Testobject, Perfecto, Amazon devicefarm, Google firebase, etc) as a long term scaling strategy. As in house hosting might not be maintainable and cost effective.

</p></details>

---

<details><summary>Q: Why "Devicefarm:, not "Devicelab" or anything else?</summary><p> 
        
The rationale is that a farm can be "grown" or scaled up, where as a lab perceives a confined space and a static image, a farm can be nurtured by the inspiration of its farmers (us all) where as a lab is more of a ... ok I can't BS any longer, it really doesn't matter so call it whatever you like.

</p></details>

---

<details><summary>Q: I can't find the answer I want!</summary><p> 
        
1. Ask in #devicefarm on Slack
2. contact Ben: Slack: @benexpress / Email: ben.chen@telus.com

</p></details>

---


[Devicefarm: Why]: devicefarm.md#why

[Toronto inventory]: https://podio.com/teluscom/uet-8mxsl9/apps/device-shelf

[Vancouver inventory]: https://docs.google.com/document/d/1imE-Q3JGlJBLPMDJ9Cx4quES7NVos2avCZNr73t15yQ

[Top 25 device]: https://telus.domo.com/page/1401343950/kpis/details/646456757

[Shopguard]: http://shopguard.com/

[Nestcam]: https://nest.com/ca/cameras/nest-cam-indoor/overview/

[Nest stream]: https://video.nest.com/live/VujA91jdFd

[Appium documentation]: http://appium.io/slate/en/master/?javascript#

[Perfecto]: https://www.perfectomobile.com/

[Github MDM issue]: https://github.com/telusdigital/farmville/issues/18

[Device cabinet]: https://drive.google.com/open?id=0B-bqF6r0I5YgVFIxR3RxYjNpZDBhejZBSXRjS09MWHZzcUJF

[Real vs simulator and emulator]: https://www.guru99.com/real-device-vs-emulator-testing-ultimate-showdown.html

[starter-kit]:https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/e2e
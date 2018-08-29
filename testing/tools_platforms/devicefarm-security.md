# Devicefarm security

## Why

The TELUS [Devicefarm][devicefarm] is a physical platform to provide teams with real mobile automation and manual testing environments. Given it houses expensive computing equipment, is is imperative to properly secure and monitor the devicefarm for theft prevention.

## What

Securing the devicefarm's physical resources, which includes:

- Devices mounted on the wall fixture
- Hardware / equipments inside the wall fixture

## How

**Devices**

- Are secured via [Shopguard][shopguard]'s [riser unit][4wriser]
- Each device is attached to a recoiler so the devices can be pulled out for use. 
- At its base, the unit is connected to a central alarm for additional security.
- Here's picture of what the assembly looks like: ![assembly][]

**Hardware and equipment** 

- Are secured in the wall fixture via a lockable cabinet

**Alarm**

- Is secured in the wall fixture as mentioned in #2, and arms all devices connected to it

- Will go off alerting nearby personnel if:
  - The devices are forced off the riser units they attach to
  - Or the riser units removed
  - Or the cables connected to the units are cut

- To _silence/deactivate_ the alarm when it goes off, use the remote control located by the TV stand next to the devicefarm:
  - Press the red button once to silence alarm for 30 seconds, and use the time to investigate the incident
  - Hold the red button until 3 alarm beeps have passed to deactivate the problematic device (all remaining devices will still be alarmed)
  - The remote control looks like this: ![remote][]
  - Here's a complete manual for the alarm: ![alarmmanual][]

## Who

@telusdigital/digital-farmers @qa @peopleops

## References

- Shopguard: www.shopguard.ca

[devicefarm]: ./devicefarm.md

[shopguard]: www.shopguard.ca

[4wriser]: https://drive.google.com/open?id=0B-bqF6r0I5YgNXNXZW5mWkpyV2tPcTg2ZDdDSU1OQTh4bDJR

[remote]: ./devicefarm_media/remote.jpeg

[alarmmanual]: ./devicefarm_media/alarm_manual.jpg

[assembly]: ./devicefarm_media/assembly.jpeg

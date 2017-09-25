# Devicefarm security

## Why

### Hardware level:

To ensure the physical inventory for devicefarm is properly secured and monitored for theft prevention

## What

Securing the devicefarm physical resources, which includes

- Devices mounted on the wall fixture
- Hardware / equipments inside the wall fixture

## How

**Devices**

- Are secured via [Shopguard][Shopguard]'s [riser unit][4wriser]
- Each device is attached to a recoiler so the devices can be pulled out for use. 
- At it's base, the unit is connected to a central alarm for additional security.
- Here's picture of what the assembly looks like: ![assembly]

**Hardware and equipments** 

- are secured in the wall fixture via a lockable cabinet


**Alarm**

- Is secured in the wall fixture as mentioned in #2, and arms all devices connected to it. 
- Will go off alerting nearby personels if
  - The devices are forced off the riser units they attach to
  - Or the riser units removed
  - Or the cables connected to the units are cut
- To *silence/deactivate* the alarm when it goes off, use the remote control located by the TV stand next to the devicefarm:
  - Press the red button once to silence alarm for 30 seconds, and use the time to investigate the incident
  - Hold the red button until 3 alarm beeps have passed to deactivate the problematic device (all remaining devices will still be alarmed)
  - The remote control looks like this: ![remote]
  - Here's a complete manual for the alarm: ![alarmmanual]

## Who

@qa @peopleops

## References

* Shopguard: www.shopguard.ca

[Shopguard]: www.shopguard.ca
[4wriser]: https://drive.google.com/open?id=0B-bqF6r0I5YgNXNXZW5mWkpyV2tPcTg2ZDdDSU1OQTh4bDJR
[remote]: ./devicefarm_media/remote.jpeg
[alarmmanual]: ./devicefarm_media/alarm_manual.jpg
[assembly]: ./devicefarm_media/assembly.jpeg
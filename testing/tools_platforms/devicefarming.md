# Using the Devicefarm

## Why

Because we want to start using [this][devicefarm] badboy!


## What

A onboarding guide for teams to start running their [e2e tests][e2e tests]


## How

Devicefarm has been integrated in the [TELUS Digital starter-kit][sk] for running [Nightwatch][nw] tests.

The Nightwatch config can be viewed [here][sk-dfconfig], with information on the [Selenium server url and port][sk-dfconfig_selenium].

### Custom npm scripts

You can write your own npm scripts to run tests in the Devicefarm.

It requires certain `capabilities` for the Selenium grid capability matcher to find matching Appium node (which powers its corresponding physical device), these capabilities are:

|name|description|example|optional|
|--|--|--|--|
|platformName|Name of the operating system|ios, android|n|
|platformVersion|Version of the operating system|7.0 (android), 10.1.1(ios)|y|
|browserName|Name of the browser to be tested with|safari, chrome|n|
|deviceName|Name of the device tag|See the `keys` in [devicelist][devicelist]|y|

So say you want to run your test on the Google Pixel in the Devicefarm, the script would look like:

```json
"scripts": {
    "pixel":"browserName=chrome platformName=android deviceName=Pixel nightwatch"
}
```

And you can run the command:

`npm run pixel` 

to kick off the test

Or, say you want to run test on iOS 10.1.1, doesn't matter which device it is, the script would look like

```json
"scripts": {
    "ios10":"browserName=safari platformName=ios platformVersion=10.1.1 nightwatch"
}
```

And you can run the command:

`npm run ios10` 

to kick off the test


### CLI

We also have implemented an shell script `run-devicefarm.sh` in the [starter-kit/e2e section][sk]

The purpose of the script is:
-   To provide an easy and out-of-the-box integration for teams to test in the Devicefarm
-   To consolidate and centralize the list of [devices][devicelist] available in the devicefarm for maintainence purposes 
(e.g: when new devices are added or old devices removed, there won't be a need to do manual updates on your end!)

To use the script, run:

`
<path-to-e2e-dir>/run-devicefarm.sh -d <device>
`

e.g:

`
./run-devicefarm.sh iphone7
`

The script will prompt you if an invalid device is passed as the target, and provide an up-to -date list of avaiable devices to use, e.g:

![][deviceshell]

This information can also be found in the [devicelist][devicelist], where device is the `key` of each entry.

You can also specify `tag` or `env` as part of the [Nightwatch command line options][nw-cli] by running:

`
<path-to-e2e-dir>/run-devicefarm.sh -d <device> -t <tag> -e <env>
`

e.g:

`
./run-devicefarm.sh -d pixelxl -t ci -e prod
`


## Who

@telusdigital/digital-farmers @qa @peopleops

## References

[sk]: https://github.com/telusdigital/telus-isomorphic-starter-kit/tree/master/e2e

[sk-dfconfig]: https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/e2e/nightwatch.devicefarm.conf.js

[sk-dfconfig_selenium]: https://github.com/telusdigital/telus-isomorphic-starter-kit/blob/master/e2e/nightwatch.devicefarm.conf.js#L41_L42

[nw]: http://nightwatchjs.org/
[nw-cli]: https://github.com/nightwatchjs/nightwatch-docs/blob/master/guide/running-tests/runner-options.md
[e2e tests]: ../functional/e2e.md
[devicefarm]: ./devicefarm.md
[devicelist]: ./devicelist.json
[deviceshell]: ./devicefarm_media/rundfshell_device.png

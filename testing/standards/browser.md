## Desktop Browsers

### Desktop traffic data by browser family
[Src: Domo, 2017 data (up to 5/16/2017)](https://telus.domo.com/page/1401343950/kpis/details/780336012)

Total visits: 12 mil
![](http://i.imgur.com/DRm2JWE.png)

Significant browsers per traffic %

| Browser Name | % |
| ------------- | ------------- |
| Chrome | 49% |
| IE | 19% |
| FF | 14% |
| Safari | 11% |
| Edge | 7.6% |

### Desktop traffic data by browser family, version
[Src: Domo, 2017 data (up to 5/16/2017)](https://telus.domo.com/kpis/details/1688963890)

Total visits: 12 mil
![](http://i.imgur.com/V3HbVhN.png)

Significant browser/version per traffic %

| Browser | Version | % |
| --- | --- | --- |
| Chrome | 56 | 19.5% |
| IE | 11 | 18.7% |
| Chrome | 55 | 14.5% |
| Chrome | 57 | 9.5% |
| Edge | 14 | 7.3% |
| Safari | 10.0 | 6.4% |
| FF | 51 | 3.5% |
| FF | 52 | 3.2% |
| FF | 50 | 2.5% |

### Support standard for desktop browsers:

| Browser | Latest version | Supported version |
| ------- | -------------- | ----------------- |
| Chrome  | [58](https://en.wikipedia.org/wiki/Google_Chrome_version_history) | N = 58, N - 2|
| Firefox | [53](https://en.wikipedia.org/wiki/Firefox_version_history)  | N = 53, N - 2|
| Internet Explorer  | [11](https://en.wikipedia.org/wiki/Internet_Explorer_version_history) | 11 |
| Microsoft Edge | [15](https://en.wikipedia.org/wiki/Microsoft_Edge)  | N = 15, N - 1|
| Safari | [10](https://en.wikipedia.org/wiki/Safari_version_history) | N = 10, N - 1|

### Notes:

Chrome: 58 newly released late in April 2017

Firefox: 53 newly released late in April 2017

Internet Explorer: Only supports version 11 given it's currently the [only supported IE by Microsoft](https://www.microsoft.com/en-ca/windowsforbusiness/end-of-ie-support)

Microsoft Edge: 15 newly released mid in April 2017

***

## Mobile Browsers

### Mobile traffic data by browser family

[Src: Domo, 2017 data (up to 5/16/2017)](https://telus.domo.com/page/1401343950/kpis/details/1771340277)

Total visits: 24 mil
![](http://i.imgur.com/kfe7WtV.png)

Significant mobile browsers per traffic %

| Browser | % |
| ---- | ---- |
| Safari | 40% |
| Chrome | 32% |
| Samsung | 23% |
| Android | 2.6% |

Insignificant mobile browsers per traffic %

| Browser | % |
| ---- | ---- |
| Blackberry | 0.4% |
| Firefox | 0.3% |
| IE | 0.1% |


### Mobile traffic data by browser family, version

[Src: Domo, 2017 data (up to 5/16/2017)](https://telus.domo.com/page/1401343950/kpis/details/1326234590)

Total visits: 24 mil
![](http://i.imgur.com/FfLEdhf.png)

Significant mobile browser/version per traffic %

| Browser | Version | % |
| ---- | ---- | ---- |
| Safari | 10.0 | 23% |
| Samsung Browser | 4.0 | 20% |
| Safari | 10.x with some 9.3.5 data | 14% |
| Chrome mobile | 55 | 11% |
| Chrome mobile | 56 | 10% |
| Chrome mobile | 57 | 6% |
| Safari | 9 | 3% |
| Android browser | 4.0 | 2.6% (620k visits) |

### Support standard for mobile browser:

| Browser | Latest version | Supported version |
| ------- | -------------- | ----------------- |
| Chrome  | [58](https://en.wikipedia.org/wiki/Google_Chrome_version_history) | N = 58, N - 2|
| Safari  | [10](https://en.wikipedia.org/wiki/Safari_version_history) | N = 10, N - 1|
| Samsung | [5.4](https://en.wikipedia.org/wiki/Samsung_Internet_for_Android)  | N = 4.0, N - 1|
| Android | [4.0](https://en.wikipedia.org/wiki/Mobile_browser) | N = 4.0, N|

### Notes:

Chrome: 58 newly released late April 2017

Samsung: Even though 4.0 is the only traffic higher than 1%, v3.3 ~ 60k monthly visit.

Android: Essentially the older Chrome

***

# Available browser versions on Saucelabs:

## Automation

[Saucelabs supported platforms](https://saucelabs.com/platforms)

## Manual

As per [manual session selection](https://saucelabs.com/beta/manual)

* Edge: 13, 14
* IE: 6 to 11
* Chrome: 26 to 58 + dev and beta
* FF: 4 to 53 + dev and beta
* Safari: 5 to 10
* Opera: 11, 12

# Telus Digital E2E UI test analytics

What we are running today:

[Src: as of 5/24/2017](https://telus.domo.com/page/-100000/kpis/details/1831635828)

[How it was gathered](https://github.com/telusdigital/domoeverything)

![SS](http://i.imgur.com/fZ57kpw.png)


# Definition of Supported

TODO: Need contribution from all team members to define what it means for a browser to be supported

Template:

* Functionally tested, core business functionalities must be working
* Visually tested, UI and user experience must be working
* Security tests executed and pass, no security leaks
* Performance tests executed and pass a certain threshold

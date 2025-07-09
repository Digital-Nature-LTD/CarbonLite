# CarbonLite
A lightweight tool (~17 KB) that blacks out a browser window when the user has not interacted with the page for a while.

![A preview of CarbonLite in action](carbon-lite-preview.png "CarbonLite when activated")

## Installation
There are a few installation options depending on your own level of expertise/comfort with web development. If you are maintaining a website through a CMS then you will likely want the simple option, but do also check out the simple with configuration option if you would like to customise CarbonLite

### Simple installation
The most simple installation just requires the script to be added to your site
```html
<script defer="defer" type="text/javascript" src="https://cdn.jsdelivr.net/gh/Digital-Nature-LTD/CarbonLite@v1.0.0/dist/umd/carbonlite-simple.min.js"></script>
```

### Simple installation - with configuration
As with the simple installation, but you can add parameters to personalise Carbon Lite - see the configuration section below for a list of available parameters
```html
<script defer="defer" type="text/javascript" src="https://cdn.jsdelivr.net/gh/Digital-Nature-LTD/CarbonLite@v1.0.0/dist/umd/carbonlite-simple.min.js?message=My Custom Message"></script>
```

### NPM package
You can install the package with npm
```shell
npm i @digital-nature-ltd/carbon-lite
```
You can then import and use CarbonLite in your scripts. 
```javascript
import CarbonLite from '@digital-nature-ltd/carbon-lite';

const cl = new CarbonLite();
// Call init to start CarbonLite.
// You can also pass configuration options to the init method
cl.init({
    timeout: 3000
});
```


### Need help with installation?
We're keen to get CarbonLite installed on as many sites as possible. If you're not able to get it up and running yourself then please get in touch with us on <hello@digital-nature.co.uk> and we will help with the installation - free of charge.


## Configuration
There are several options available to personalise the CarbonLite overlay and message, you can add these to the url parameters when you're adding the script to your page, or to the configuration object when calling the init method.

Note that examples each show a single parameter, but you can add several using the `&` character between each parameter - `e.g. src="https://cdn.jsdelivr.net/gh/Digital-Nature-LTD/CarbonLite@v1.0.0/dist/umd/carbonlite-simple.min.js?timeout=45000&message=Hello, world!"`.

### Timeout
This is the number of milliseconds before CarbonLite is triggered
#### Param: timeout
#### Default: 60000 (60 seconds)
#### Example
```html
<!-- CarbonLite triggers after 45 seconds of inactivity -->
<script defer="defer" type="text/javascript" src="https://cdn.jsdelivr.net/gh/Digital-Nature-LTD/CarbonLite@v1.0.0/dist/umd/carbonlite-simple.min.js?timeout=45000"></script>
```

### Message Timeout
This is the number of milliseconds that it takes for the CarbonLite message to fade out after the user interacts with the page
#### Param: messageTimeout
#### Default: 3000 (3 seconds)
#### Example
```html
<!-- The message fades out after 10 seconds -->
<script defer="defer" type="text/javascript" src="https://cdn.jsdelivr.net/gh/Digital-Nature-LTD/CarbonLite@v1.0.0/dist/umd/carbonlite-simple.min.js?messageTimeout=10000"></script>
```

### Message
The message displayed in the middle of the screen when CarbonLite is active
#### Param: message
#### Default: Saving the planet, one (dark) pixel at a time
#### Example
```html
<script defer="defer" type="text/javascript" src="https://cdn.jsdelivr.net/gh/Digital-Nature-LTD/CarbonLite@v1.0.0/dist/umd/carbonlite-simple.min.js?message=My website is reducing carbon"></script>
```

### Background Colour
The background colour when CarbonLite is active. Note that the purpose of CarbonLite is to reduce energy usage, so please ensure you choose a low-energy colour if you're replacing the default
#### Param: backgroundColour
#### Default: #000 (black)
#### Example
```html
<!-- Using a named colour -->
<script defer="defer" type="text/javascript" src="https://cdn.jsdelivr.net/gh/Digital-Nature-LTD/CarbonLite@v1.0.0/dist/umd/carbonlite-simple.min.js?backgroundColour=green"></script>
```

Note that when using a hex colour you should encode the hash as %23 otherwise the value will be lost
```html
<!-- Note that when using a hex colour you should encode the hash as %23 -->
<script defer="defer" type="text/javascript" src="https://cdn.jsdelivr.net/gh/Digital-Nature-LTD/CarbonLite@v1.0.0/dist/umd/carbonlite-simple.min.js?backgroundColour=%23333"></script>
```

### Message Colour
The text/icon colour of the messages shown while CarbonLite is active
#### Param: messageColour
#### Default: #222
#### Example - As "Background Colour" but with updated parameter name

### Message Colour on Hover
The text/icon colour of the CarbonLite message while hovering 
#### Param: messageColourHover
#### Default: #DDD
#### Example - As "Background Colour" but with updated parameter name

### Message Border Colour
The colour of the CarbonLite message border, not that this is only shown when the CarbonLite background has been removed
#### Param: messageBorderColour
#### Default: #DDD
#### Example - As "Background Colour" but with updated parameter name

### Message Drop Shadow Colour
The colour of the CarbonLite message drop shadow, not that this is only shown when the CarbonLite background has been removed
#### Param: messageDropShadowColour
#### Default: #555
#### Example - As "Background Colour" but with updated parameter name


## Events
CarbonLite can be suspended and resumed using custom events, this can be useful if there are times that you would like to prevent CarbonLite from triggering, e.g. while watching a video

### Suspend
Closes CarbonLite and stops it from re-opening
```javascript
const customEventSuspend = new CustomEvent('carbon-lite-suspend');
document.dispatchEvent(customEventSuspend);
```

### Resume
Restarts the CarbonLite timer (from 0s)
```javascript
const customEventResume = new CustomEvent('carbon-lite-resume');
document.dispatchEvent(customEventResume);
```
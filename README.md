# dd-nuxt

## Use case
If you want to log your errors that occur at the Vue site of your app while being executed in SSR mode on the server and you are running your app in a serverless mode like Lambda Functions, AWS Amplify or Clouflare Workers, this module got you covered.

If you want to surveillance errors during execution in the browser, use datadogs RUM library.

## What this plugin does
This plugin pushes errors from the vue server runtime to Datadog.

## What this plugin does not
This plugin will not push errors that happen in SPA-Mode/what ever happens in the browser.
This plugin will also not push errors that occur in your `/server` folder.


## Setup

1. Add this module to your `nuxt.config.ts`
2. Configure needed runtime variables: 
```javascript
ddNuxt: {
    host: "http-intake.logs.us5.datadoghq.com",
    apiKey: "your secret api key",
    serviceName: "your service name",
  }
  ```
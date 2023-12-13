const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "video": false,
    "chromeWebSecurity": false,
    "screenshotOnRunFailure": true,
    "screenshotOnAssertionFailure": true,
    "screenshotsFolder": "cypress/screenshots",
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
  },
  "retries": {
    "runMode": 1,
    "openMode": 1
  },

  reporterOptions: {
    "reportDir": "cypress/reports",
    "reportFilename": "10 DAILY REPORT - [datetime]",
    "html": true,
    "json": false,
    "overwrite": false,
    "saveHtml": true,  
    "combine": true,  
    "timestamp": "mm-dd-yyyy_HH.MM", 
  }
});
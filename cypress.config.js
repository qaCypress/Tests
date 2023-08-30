const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        log({ message, status }) {
          if (status === "success") {
            console.log(`✅ ${message}`); // Success message with a green checkmark
          } else if (status === "failure") {
            console.log(`❌ ${message}`); // Failure message with a red X
          }
          return null;
        },
        
      });

     

      
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
    
  }
});




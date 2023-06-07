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
    "chromeWebSecurity": false
    
    
  },

  support: (on, config) => {
    on("fail", (error, runnable) => {
      // Capture a screenshot with a delay after a test failure
      cy.wait(1000).then(() => {
        cy.screenshot(); // Take a screenshot
      });
      throw error; // Re-throw the test failure to fail the test
    });
  },
  
});




const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    chromeWebSecurity: false,
    watchForFileChanges: false,
    specPattern: "*/.feature"
  },
});

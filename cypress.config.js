const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      module.exports = (on, config) => {
        on('file:preprocessor', cucumber())
      }
    },
    chromeWebSecurity: false,
    watchForFileChanges: false,
    specPattern: "**/*.feature"
  },
});

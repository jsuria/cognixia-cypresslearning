const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here test
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  },

  env:{
    "someEnvironment":"sandbox",
    "someAPI":"https://reqres.in/api/fleur"
  },

  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "reportFilename":"mochaTestRun",
    "charts": false,
    "reportPageTitle": "Mocha Test Suite",
    "html": true,
    "embeddedScreenshots": true,
    "inlineAssets": true
  },
});

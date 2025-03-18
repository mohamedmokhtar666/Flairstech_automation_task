const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const report = require("multiple-cucumber-html-reporter");

module.exports = defineConfig({

  defaultCommandTimeout: 40000,
  watchForFileChanges: false,
  pageLoadTimeout: 50000,

  env: {
    allureResultsPath: "allure-results"
  },
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      on("after:run", async () => {
        report.generate({
          jsonDir: "cypress/cucumber-json",       // Folder where JSON reports are stored
          reportPath: "cypress/reports/cucumber-html-report",  // Folder to save HTML report
          openReportInBrowser: false,
          metadata: {
            browser: {
              name: "chrome",
              version: "latest",
            },
            device: "Local test machine",
            platform: {
              name: "Windows",
              version: "11",
            },
          },
        });
      });
      return config;
    },
    specPattern: "cypress/e2e/features/*.feature",
  }
});
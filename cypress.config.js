const { defineConfig } = require('cypress')
const { readFileSync } = require('fs');

module.exports = defineConfig({
  projectId: 'xxx',
  chromeWebSecurity: false,
  video: false,
  pageLoadTimeout: 30000,
  numTestsKeptInMemory: 1,
  watchForFileChanges: false,
  defaultCommandTimeout: 20000,
  requestTimeout: 10000,
  viewportWidth: 1280,
  viewportHeight: 914,
  scrollBehavior: 'bottom',
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      const envName = config.env.name;
      const envconfig = readFileSync(`./cypress/config/cypress.${envName}.json`);
      const configValues = JSON.parse(envconfig);
      config.env = {
        ...configValues,
      };
      config.baseUrl = configValues.baseUrl;
      require('./cypress/plugins/index.js')(on, config)
      return config;
    },
  },
  reporter: "cypress-qase-reporter",
  reporterOptions: {
    "apiToken": "xxxx",
    "projectCode": "xxx",
    "logging": true
  }
})

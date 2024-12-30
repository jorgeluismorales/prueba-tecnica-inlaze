const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://test-qa.inlaze.com/auth/sign-in',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

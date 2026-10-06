const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "u26dkd",
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      
    },
  },
});

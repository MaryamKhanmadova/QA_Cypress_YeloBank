const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.yelo.az/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

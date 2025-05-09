const {defineConfig} = require('cypress')

module.exports = defineConfig({
    e2e: {
        // Configure your E2E tests here
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
        reporter: "mochawesome",
        reporterOptions: {
            reportDir: "mochawesome-report",
            overwrite: false,
            html: true,
            json: true
        }
    },
});
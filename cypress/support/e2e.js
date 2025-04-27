// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.Commands.overwrite('type', (originalFn, element, text, options = {}) => {
    const isPassword = element.attr('type') === 'password';

    if (isPassword) {
        options.log = false;
        return originalFn(element, text, options).then(() => {
            Cypress.log({
                name: 'type',
                message: '********',
                $el: element
            });
        });
    }
    return originalFn(element, text, options);
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
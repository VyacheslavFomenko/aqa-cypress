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
import "./commands"

Cypress.Commands.overwrite("type", (originalFn, element, text, options = {}) => {
    const isPassword = element.prop("type") === "password";
    if (isPassword) {
        options.log = false;
        return originalFn(element, text, options).then(($el) => {
            Cypress.log({name: "type", message: "********", $el: element});
            return $el;
        });
    }
    return originalFn(element, text, options);
});

Cypress.Commands.add("login", ({email, password}) => {
    cy.visit("https://qauto.forstudy.space/", {
        auth: {
            username: "guest",
            password: "welcome2qauto"
        }
    });
    cy.get(".btn.btn-outline-white.header_signin").click();

    cy.get("#signinEmail").type(email);
    cy.get("#signinPassword").type(password);

    cy.contains('Login').click();
});

Cypress.Commands.add("register", ({url, name, lastName, email, password}) => {
    cy.visit(url, {
        auth: {
            username: "guest",
            password: "welcome2qauto"
        }
    });
    cy.get(".hero-descriptor_btn.btn.btn-primary").click();

    const nameInput = () => cy.get("#signupName");
    const lastNameInput = () => cy.get("#signupLastName");
    const emailInput = () => cy.get("#signupEmail");
    const passwordInput = () => cy.get("#signupPassword");
    const confirmedPasswordInput = () => cy.get("#signupRepeatPassword");

    nameInput().clear().type(name);
    lastNameInput().clear().type(lastName);
    emailInput().clear().type(email);
    passwordInput().clear().type(password);
    confirmedPasswordInput().clear().type(password);

    cy.contains('Register').click();

    cy.writeFile(`qauto${Math.random(10)}.config.js`, { baseurl: url, user: {name, lastName, email, password }});
});


Cypress.Commands.add("createExpense", (carId, expenseData ) => {
    cy.request({
        method: "POST",
        url: "/api/expenses",
        body: {
            carId,
            ...expenseData
        }
    }).then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body.data.id).to.eq(carId);
        expect(res.body.data.mileage).to.eq(expenseData.mileage);
        expect(res.body.data.liters).to.eq(expenseData.liters);
        expect(res.body.data.totalCost).to.eq(expenseData.totalCost);
    });
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
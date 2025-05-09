import GaragePage from '../third-homework/garagePage';
import ExpensesPage from '../third-homework/fuelExpensesPage';

const config = require("/config/qauto.config.js");

describe("Create Car and catch it's id", () => {
    beforeEach(() => {
        cy.visit(config.baseUrl, {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });
        cy.login({email: config.user.email, password: config.user.password});
    });
    it("Create car", () => {
        cy.intercept("POST", "/api/cars").as("createCar");

        GaragePage.addCar(50);
        cy.wait("@createCar").then(({response}) => {
            expect(response.statusCode).to.eq(201);
            const carId = response.body.data.id;

            cy.writeFile("cypress/fixtures/createdCar.json", {id: carId});
        });
    });
});
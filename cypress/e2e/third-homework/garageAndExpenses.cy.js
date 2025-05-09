import GaragePage from './garagePage';
import ExpensesPage from './fuelExpensesPage';
const config = require("/config/qauto.config.js");

describe("", ()=>{
    beforeEach(() => {
        cy.visit(config.baseUrl);
        cy.login({email: config.user.email, password: config.user.password});
    });

    it("should successfully add car to garage and fuel Expenses", ()=>{
        GaragePage.addCar(50);
        ExpensesPage.addFuelExpenses({vehicle: "Audi TT", date: "25.04.2000", mileage: 50, cost: 1000});
    });
});
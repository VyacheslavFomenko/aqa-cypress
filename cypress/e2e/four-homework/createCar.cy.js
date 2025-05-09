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

    it("should check if created car exist", () => {
        cy.fixture("createCar.json").then(({id}) => {
            cy.request({
                method: "GET",
                url: "/api/cars",
            }).then((res)=>{
                expect(res.status).to.eq(200);
                const car = res.body.data.id.find(car => car.id === id);
                expect(car).to.exist;
                expect(car.brand).to.eq("Audi");
                expect(car.model).to.eq("A6");
                expect(car.mileage).to.eq(100);
            });
        });
    });

    it("Creates expense for car via API", ()=>{
        cy.fixture('createdCar.json').then(({ id }) => {
            const expenseData = {
                mileage: 100,
                liters: 10,
                totalCost: 1000,
            }
            cy.createExpense(id, expenseData);
        });

        cy.writeFile('cypress/fixtures/createdExpense.json', expenseData);
    });

    it("Validates expense in UI", () => {
        cy.fixture("createdExpense.json").then((exp) => {
            cy.visit("https://qauto.forstudy.space/panel/expenses");
            cy.get("#carSelectDropdown").select('Audi A6')

            cy.get(".table.expenses_table").within(() => {
                cy.contains(exp.mileage);
                cy.contains(exp.liters);
                cy.contains(exp.totalCost);
            });
        });
    });
});

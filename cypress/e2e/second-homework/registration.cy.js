import {faker} from "@faker-js/faker";

describe("Check Registration flow", () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/", {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });
        cy.get(".hero-descriptor_btn.btn.btn-primary").click();
    });

    it("should have Registration title", () => {
        cy.contains("Registration").should("be.visible");
    });

    context("Name field validation", () => {
        const nameInput = () => cy.get("#signupName");

        it("should show error when empty", () => {
            nameInput().focus().blur();
            cy.contains("Name required").should("be.visible");
            nameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
        });

        it("should show error when less than 2 characters long", () => {
            nameInput().type("A").blur();
            cy.contains("Name has to be from 2 to 20 characters long").should("be.visible");
            nameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
            nameInput().clear();
        });

        it("shouldn't show error when 2 symbols", () => {
            nameInput().type("Aa").blur();
            cy.contains("Name has to be from 2 to 20 characters long").should("not.exist");
            nameInput().clear();
        });

        it("shouldn't show error when 20 symbols", () => {
            nameInput().type(faker.string.alpha(20)).blur();
            cy.contains("Name has to be from 2 to 20 characters long").should("not.exist");
            nameInput().clear();
        });

        it("should show error when more than 20 characters long", () => {
            nameInput().type(faker.string.alpha(21)).blur();
            cy.contains("Name has to be from 2 to 20 characters long").should("be.visible");
            nameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
            nameInput().clear();
        });

        it("should show error when enter invalid symbol", () => {
            nameInput().type("Tom@#").blur();
            cy.contains("Name is invalid").should("be.visible");
            nameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
            nameInput().clear();
        });

        it("shouldn't work with spaces", () => {
            nameInput().type("   Tom   ").blur();
            cy.contains("Name is invalid").should("be.visible");
            nameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
            nameInput().clear();
        });
    });
    context("Last name field validation", ()=>{
        const lastNameInput = () => cy.get("#signupLastName");

        it("should show error when empty", () => {
            lastNameInput().focus().blur();
            cy.contains("Last name required").should("be.visible");
            lastNameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
        });

        it("should show error when less than 2 characters long", () => {
            lastNameInput().type("A").blur();
            cy.contains("Last name has to be from 2 to 20 characters long").should("be.visible");
            lastNameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
            lastNameInput().clear();
        });

        it("shouldn't show error when 2 symbols", () => {
            lastNameInput().type("Aa").blur();
            cy.contains("Last name has to be from 2 to 20 characters long").should("not.exist");
            lastNameInput().clear();
        });

        it("shouldn't show error when 20 symbols", () => {
            lastNameInput().type(faker.string.alpha(20)).blur();
            cy.contains("Last name has to be from 2 to 20 characters long").should("not.exist");
            lastNameInput().clear();
        });

        it("should show error when more than 20 characters long", () => {
            lastNameInput().type(faker.string.alpha(21)).blur();
            cy.contains("Last name has to be from 2 to 20 characters long").should("be.visible");
            lastNameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
            lastNameInput().clear();
        });

        it("should show error when enter invalid symbol", () => {
            lastNameInput().type("Lobik@#").blur();
            cy.contains("Last name is invalid").should("be.visible");
            lastNameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
            lastNameInput().clear();
        });

        it("shouldn't work with spaces", () => {
            lastNameInput().type("   Lobik   ").blur();
            cy.contains("Last name is invalid").should("be.visible");
            lastNameInput().should("have.css", "border-color", "rgb(220, 53, 69)");
            lastNameInput().clear();
        });
    });

    context("Email field validation", ()=>{
        const emailInput = () => cy.get("#signupEmail");

        it("should show error when empty", () => {
            emailInput().focus().blur();
            cy.contains("Email required").should("be.visible");
            emailInput().should("have.css", "border-color", "rgb(220, 53, 69)");
        });

    });
});

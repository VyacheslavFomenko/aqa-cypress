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
        });
    });
});

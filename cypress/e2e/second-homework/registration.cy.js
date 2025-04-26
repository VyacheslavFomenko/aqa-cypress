import { faker } from "@faker-js/faker";

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
});

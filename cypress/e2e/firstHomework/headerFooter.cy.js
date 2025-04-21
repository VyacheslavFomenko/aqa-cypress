describe("Find Header and Footer elements", () => {
    beforeEach(() => {
        cy.visit("https://qauto.forstudy.space/", {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });
    })

    it("should find all buttons in the header", () => {
        cy.get("header").should("be.visible");

        cy.get("button")
            .should("have.length.at.least", 1)
            .each(($btn) => {
                cy.wrap($btn)
                    .should("be.visible")
                    .and("not.be.disabled");
            });

        cy.get("a")
            .should("have.length.at.least", 1)
            .each(($link) => {
                cy.wrap($link)
                    .should("be.visible")
                    .and("have.attr", "href")
                    .and("not.be.empty");
            });
    });
    it("should find footer elements", () => {
        cy.get("footer").should("be.visible");

        cy.get("button")
            .should("have.length.at.least", 1)
            .each(($btn) => {
                cy.wrap($btn)
                    .should("be.visible")
                    .and("not.be.disabled");
            });

        cy.get("a")
            .should("have.length.at.least", 1)
            .each(($link) => {
                cy.wrap($link)
                    .should("be.visible")
                    .and("have.attr", "href")
                    .and("not.be.empty");
            });
    })
});



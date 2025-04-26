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
        cy.get(".btn.header-link.-active")
            .should("be.visible")
            .and("have.attr", "href")
            .and("not.be.empty");

        cy.get(".btn.header-link")
            .should("have.length.at.least", 1)
            .should("be.visible")
            .and("not.be.disabled");

        cy.get(".btn.btn-outline-white.header_signin")
            .should("have.length.at.least", 1)
            .should("be.visible")
            .and("not.be.disabled");

        cy.get(".header-link.-guest")
            .should("have.length.at.least", 1)
            .should("be.visible")
            .and("not.be.disabled");

        cy.get(".hero-descriptor_btn.btn.btn-primary")
            .should("have.length.at.least", 1)
            .should("be.visible")
            .and("not.be.disabled");
    });

    it("should find footer elements", () => {
        cy.get(".socials_icon.icon.icon-facebook")
            .should("be.visible");

        cy.get(".socials_icon.icon.icon-telegram")
            .should("be.visible");

        cy.get(".socials_icon.icon.icon-youtube")
            .should("be.visible");

        cy.get(".socials_icon.icon.icon-instagram")
            .should("be.visible");

        cy.get(".socials_icon.icon.icon-linkedin")
            .should("be.visible");

        cy.get(".contacts_link.display-4")
            .should("be.visible")
            .and("have.attr", "href")
            .and("not.be.empty");

        cy.get(".contacts_link.h4")
            .should("be.visible")
            .and("have.attr", "href")
            .and("not.be.empty");
    });
});



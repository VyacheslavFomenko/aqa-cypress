describe("", () => {
    it('should login', () => {
        cy.fixture("registeredUser.json").then((email, password) => {
            cy.login({email, password});
        });
        cy.url().should("include", "/garage");
    });
});

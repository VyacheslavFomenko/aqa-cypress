class GaragePage {
    get addCarButton() {
        return cy.contains("button",/^Add car$/);
    }

    get brandCarInput() {
        return cy.get("#addCarBrand");
    }

    get modelCarInput() {
        return cy.get("#addCarModel");
    }

    get mileageCarInput() {
        return cy.get("#addCarMileage");
    }

    get saveCarButton() {
        return cy.contains("button", /^Add$/);
    }

    addCar(mileage) {
        this.addCarButton.click();
        this.brandCarInput.select("Audi");
        this.modelCarInput.select("A6");
        this.mileageCarInput.type(mileage);
        this.saveCarButton.click();
    }
}

export default new GaragePage();

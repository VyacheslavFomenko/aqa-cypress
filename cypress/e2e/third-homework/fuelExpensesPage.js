class FuelExpensesPage{

    get addExpenses(){
        return cy.get(".btn.btn-primary");
    }

    get vehicleSelect(){
        return cy.get("#addExpenseCar");
    }

    get reportDateSelect(){
        return cy.get("#addExpenseMileage");
    }

    get mileageInput(){
        return cy.get("#addExpenseMileage");
    }

    get numberOfLitersInput(){
        return cy.get("#addExpenseLiters");
    }

    get totalCostInput(){
        return cy.get("#addExpenseTotalCost");
    }

    get saveButton(){
        return cy.get(".btn.btn-primary");
    }

    addFuelExpenses({ vehicle, date, mileage, liters, cost }){
        this.addExpenses.click();
        this.vehicleSelect.select(vehicle);
        this.reportDateSelect.type(date);
        this.mileageInput.clear().select(mileage);
        this.numberOfLitersInput.select(liters);
        this.totalCostInput.select(cost);
        this.saveButton.click();
    }
}

export default new FuelExpensesPage();

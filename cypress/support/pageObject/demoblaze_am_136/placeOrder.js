class PlaceOrder{
    totalM(){
       return cy.get('#totalm');
    }

    name(){
       return cy.get('#name');
    }
    country(){
        return  cy.get('#country');
    }
    city(){
        return cy.get('#city');
    }
    card(){
        return cy.get('#card');
    }
    month(){
        return  cy.get('#month');
    }
    year(){
        return  cy.get('#year');
    }
    purchaseButton(){
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }




    checkTotalM(){
        this.totalM().contains('650');
    }
    clickPurchaseButton(){
        this.purchaseButton().click();
    }
    fillAndSubmitPlaceOrderForm(){
        this.checkTotalM();
        this.name().type('Adel');
        this.country().type('Serbia');
        this.city().type('Kragujevac');
        this.card().type('Visa');
        this.month().type('June');
        this.year().type('2025');
        this.clickPurchaseButton();

    }
}
export default PlaceOrder;
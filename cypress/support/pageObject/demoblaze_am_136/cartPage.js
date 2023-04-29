class CartPage{

    totalP(){
        return cy.get('#totalp');
    }

    placeOrderButton(){
        return cy.get('.col-lg-1 > .btn');
    }


    checkTotalP(){
        this.totalP().should('have.not.text', '0');
    }
    clickPlaceOrderButton(){
        this.placeOrderButton().click();
    }

}
export default CartPage;
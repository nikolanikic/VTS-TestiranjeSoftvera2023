class ProductPage{

    productName(){
        return  cy.get('.name');
    }

    addToCartButton(){
        return  cy.get('.col-sm-12 > .btn');
    }
    cartButton(){
        return  cy.get('#cartur');
    }


    checkProductName(){
        this.productName().contains('Nexus 6');
    }
    clickAddToCartButton(){
        this.addToCartButton().click();
    }
    clickCartButton(){
        this.cartButton().click();
    }

}
export default ProductPage;
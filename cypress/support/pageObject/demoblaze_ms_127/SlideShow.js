class SlideShow {

    firstSlide() {
        return cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'First slide');
    }

    secondSlide() {
        return cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'Second slide');
    }

    checkFirstSlide() {

        this.firstSlide().click;
    }
    checkSecondSlide() {
        this.secondSlide().click;
    }

}

export default SlideShow;
class ImageSlide {

    firstImage () {
        return cy.get('.active > .d-block');
    }

    nextPictureArrow () {
        return cy.get('.carousel-control-next-icon');
    }

    secondImage () {
        return cy.get('.active > .d-block');
    }

    checkCarousel () {
        this.firstImage().invoke('attr', 'alt').should('eq', 'First slide');
        this.nextPictureArrow().click();
        this.secondImage().invoke('attr', 'alt').should('eq', 'Second slide');
    }
}

export default ImageSlide;
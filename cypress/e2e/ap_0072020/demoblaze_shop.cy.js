/// <reference types="cypress"/>

describe('Demoblaze webshop', () => {

    const podaci = ["pavicevic01", "1235476942", "Serbia", "Jagodina", "05/24", "2020"]

    it('Adding to cart and purchase', () => {

        // otvaranje sajta
        cy.visit("https://www.demoblaze.com/");

        // login forma
        cy.get('#login2').click();
        cy.get('#logInModalLabel').should('have.text', 'Log in');

        // username, passwrod i login
        cy.get('#loginusername').clear().type('apavicevic',{delay: 100});
        cy.get('#loginpassword').clear().type('apavicevic', {delay: 100});
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        // odabir uređaja
        cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click();


        // dodavanje u korpu
        cy.get('.col-sm-12 > .btn').click();
        cy.get('#cartur').click();
        cy.get('.col-lg-1 > .btn').click();

        // unos podataka
        cy.get('#name').type('pavicevic01');
        cy.get('#country').type('Serbia');
        cy.get('#city').type('Jagodina');
        cy.get('#card').type('1235476942');
        cy.get('#month').type('05/24');
        cy.get('#year').type('2020');
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();


        // potvrda
        cy.get('.confirm').click();

        // izlazak
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
        cy.get('#logout2').click();


    });
});
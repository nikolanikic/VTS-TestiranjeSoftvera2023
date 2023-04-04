/// <reference types="cypress" />

describe("Demoblaze web shop", () => {

    it("User is able to load web site", () => {
      cy.visit("https://www.demoblaze.com/");

      cy.get('#nava').contains('PRODUCT STORE');

      cy.get('.active > .nav-link').contains('Home');
      cy.get('#cat').should('have.text', 'CATEGORIES');
    });

    it('Alert is thrown when User already exists', () =>{
        cy.visit("https://www.demoblaze.com/");
        cy.get('#signin2').click();

        cy.get('#signInModalLabel').should('have.text', 'Sign up');
        cy.get('#sign-username').type('mihajlos');
        cy.get('#sign-password').type('123456');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force:true});

        cy.on('window:alert', (t)=>{
            expect(t).to.contains('This user already exist.');
        });
    });

    it('User is able to login to Demoblaze web shop', () =>{
        cy.visit("https://www.demoblaze.com/");
        cy.get('#login2').click();

        cy.get('#logInModalLabel').should('have.text', 'Log in');
        cy.get('#loginusername').clear().type('mihajlos');
        cy.get('#loginpassword').clear().type('123456');
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

        
    });
    it("Adding product to cart", () => {
        cy.visit("https://www.demoblaze.com/");
    
        cy.get(':nth-child(3) > .card > .card-block .card-title > .hrefch').click();
        cy.get('.name').contains('Nexus 6');
        cy.get('.col-sm-12 > .btn').click();

        cy.get('#cartur').click();
        cy.get('#totalp').should('have.text', '650');
        cy.get('.col-lg-1 > .btn').click();

        cy.get('#totalm').contains('650');
        cy.get('#name').clear().type('Mihajlo Stokic');
        cy.get('#country').clear().type('Serbia');
        cy.get('#city').clear().type('Pozarevac');
        cy.get('#card').clear().type('406207052001');
        cy.get('#month').clear().type('05');
        cy.get('#year').clear().type('24');

        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('.confirm').click();
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
        cy.on('window:alert', (t)=>{
             expect(t).to.contains('Product added');
            });
    });
});
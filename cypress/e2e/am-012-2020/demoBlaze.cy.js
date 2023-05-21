/// <reference types="cypress" />

describe("Testing DemoBlaze", () => {

    it.skip("User is abel to load Demoblaze web cite", () => {
      cy.visit('https://www.demoblaze.com/')
  
      cy.get('#nava').contains('PRODUCT STORE');
      cy.get('.active > .nav-link').contains('Home');
      cy.get('#cat').should('have.text', 'CATEGORIES');
    });
  
    it.skip('Alert is thrown when user already exists', () => {
      cy.visit('https://www.demoblaze.com/')
  
      cy.get('#signin2').click();
  
      cy.get('#signInModalLabel').should('have.text', 'Sign up');
      cy.get('#sign-username').type('anicam', { delay: 0 });
      cy.get('#sign-password').type('anicam', { delay: 0 });
  
      //prozor za logovanje
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  
      cy.on('window:alert', (t) => {
        expect(t).to.contains('This user already exists');
      });
    });
  
  
    it("Adding product to cart", () => {
      cy.visit("https://www.demoblaze.com/");
  
      cy.get(':nth-child(3) > .card > .card-block .card-title > .hrefch').click();
      cy.get('.name').contains('Nexus 6');
      cy.get('.col-sm-12 > .btn').click();
  
      cy.get('#cartur').click();
      cy.get('#totalp').should('have.text', '500');
      cy.get('.col-lg-1 > .btn').click();
  
      cy.get('#totalm').contains('500');
      cy.get('#name').clear().type('Anica Mihailovic');
      cy.get('#country').clear().type('Srbija');
      cy.get('#city').clear().type('Kragujevac');
      cy.get('#card').clear().type('62579431802');
      cy.get('#month').clear().type('05');
      cy.get('#year').clear().type('23');
  
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
      cy.get('.confirm').click();
      cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
      cy.on('window:alert', (t)=>{
           expect(t).to.contains('Product added');
          });
          
  });
  
    it.skip('Check if slide is changed after click', () => {
      cy.visit('https://www.demoblaze.com/')
  
      cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'First slide');
  
      cy.get('.carousel-control-next-icon').click();
      cy.wait(1000)
  
      cy.get('.active > .d-block').invoke('attr', 'alt').should('eq', 'Second slide');
  
  
    });
  
  });
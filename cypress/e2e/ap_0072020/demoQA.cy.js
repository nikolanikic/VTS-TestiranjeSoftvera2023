/// <reference types="cypress" />


describe("this is...", () => {

    // naziv testa za testiranje text box-ova
    it.skip("Elements - testing text box", () => {

      // poseta sajtu
      cy.visit("https://demoqa.com/");

      // biranje text box-a iz menija
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();

      // provera da li u naslov ima naziv Text Box
      cy.get('.main-header').should('have.text', 'Text Box');

      cy.wait(2000);

      // provera oznaka za polja
      cy.get('#userName-label').should('have.text', 'Full Name');
      cy.get('#userEmail-label').should('have.text', 'Email');
      cy.get('#currentAddress-label').should('have.text', 'Current Address');
      cy.get('#permanentAddress-label').should('have.text', 'Permanent Address');

      // unos podataka u polje
      cy.get('#userName').type('Aleksandar Pavićević');
      cy.get('#userEmail').type('ap@gmail.com');
      // cy.get('#currentAddress').type('ABC 123');
      // cy.get('#permanentAddress').type('ABC 123');
    });

    // naziv testa za testiranje radio button-a
    it("Elements - testing radio button", () => {

      // poseta sajtu
      cy.visit("https://demoqa.com/");
  
      // testiranje radio button-a
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
      cy.contains('Radio Button').click();
    
      // klik na radio button 'Yes'
      cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').click();
      cy.get('.text-success').should('have.text', 'Yes');

      // klik na radio button 'Impressive'
      cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').click();
      cy.get('.text-success').should('have.text', 'Impressive');

      // proveravamo da li je radio button 'No' onemogućen (disabled)
      cy.get('.custom-control.disabled').should('not.be.enabled');
      });
});

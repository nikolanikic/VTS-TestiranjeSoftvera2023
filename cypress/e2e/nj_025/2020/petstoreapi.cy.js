/// <reference types="cypress" />

describe("Clothes Store API", () => {
  const clothName= "Gucci";
  const clothId = 131;

  is("User is able to add new cloth to the cloth store", ()=>{
    cy.addcloth(131, 'Gucci');
  })

  it("User is able to add new cloth to the cloth store", () => {
    cy.findPet(petId);
  })
});

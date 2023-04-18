/// <reference types="cypress" />

describe("Pet Store API", () => {

  const petName = 'Boss';
  const petId = 111;

  it("User is able to add new pet to the pet store", () => {

    cy.addPet(111, 'Boss');

  })

  it("User is able to add new pet to the pet store", () => {

    cy.findPet(petId);
  })



});

/// <reference types="cypress" />

describe("Pet Store API", () => {

  const petName = 'Hugo';
  const petId = 111;

  it("User is able to add new pet to the pet store", () => {

    cy.addPet(111, 'Hugo');

  })

  it("User is able to find added pet by ID", () => {

    cy.findPet(petId);
  })



});
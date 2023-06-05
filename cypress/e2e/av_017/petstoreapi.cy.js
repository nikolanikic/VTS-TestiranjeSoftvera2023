/// <reference types="cypress" />

describe("Pet store api", () => {

    const petName = 'Pas';
    const petId = 111;
    const photoUrl = 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ';
    const petNewName='Dog';
    const fakePetId=999;
    it("User is able to add a new pet to  the Pet Store", () => {
        cy.addPet(petId,petName,photoUrl);
    });

    it('User is able to find added pet by ID',() =>{
        cy.findPet(petId);
    });
    it('User is able to update existing pet',() =>{
        cy.updatePet(petId,petNewName,photoUrl);
    });
    it('User is able to delete existing pet',() =>{
        cy.deletePet(petId);
    });
    it.skip('User is getting error when trying to delete non-existing pet',() =>{
        cy.deleteFakePet(fakePetId);
    });



});
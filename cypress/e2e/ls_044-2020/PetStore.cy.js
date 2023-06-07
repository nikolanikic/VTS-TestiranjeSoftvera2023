/// <reference types="cypress" />

describe("Pet Store API", () => {


    var petName, petNewName, petId, fakePetId, photoUrl;

    
    it("Loading test data...", () => {
        cy.fixture('petStoreData.json').then((petStoreData) => {
            petName = petStoreData.petName;
            photoUrl = petStoreData.photoUrl;
            petId = petStoreData.petId;
            petNewName = petStoreData.petNewName;
            fakePetId = petStoreData.fakePetId;
        });
    });

    it("User is able to add a new pet.", () => {
        cy.addPet(petId, petName, photoUrl);
    });

    it('User is able to find pet by ID.', () => {
        cy.findPetAndSaveToFile(petId);
    });

    it('User is able to update existing pet.', () => {
        cy.updatePet(petId, petNewName, photoUrl);
    });

    it('User is able to delete existing pet.', () => {
        cy.deletePet(petId);
    });

    it.skip('User is getting error when trying to delete non-existing pet.', () => {
        cy.deleteFakePet(fakePetId);
    });

});
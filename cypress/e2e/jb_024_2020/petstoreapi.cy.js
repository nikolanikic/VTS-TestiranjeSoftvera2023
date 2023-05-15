/// <reference types="cypress" />

describe("Pet Store API", () => {

    const petName = 'Maximilian';
    const photoUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thepioneerwoman.com%2Fhome-lifestyle%2Fpets%2Fg36592631%2Fsmall-fluffy-dog-breeds%2F&psig=AOvVaw32KiPcyujXt9VTIAK5Z65k&ust=1681893756537000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOCog9GEs_4CFQAAAAAdAAAAABAE';
    const petId = 111;
    const petNewName = 'Sijam';
    const fakePetId = 999;
  
    it("User is able to add a new pet to the Pet Store", () => {
      cy.addPet(petId, petName, photoUrl);
    });
  
    it('User is able to find added pet by ID', () => {
      cy.findPetAndSaveToFile(petId);
  
    });
  
    it('User is able to update existing pet', () => {
      cy.updatePet(petId, petNewName, photoUrl);
    });
  
    it('User is able to delete existing pet', () => {
      cy.deletePet(petId);
    });
  
    it.skip('User is getting error when trying to delete non-existing pet', () => {
      cy.deleteFakePet(fakePetId);
    });
  
  });
  
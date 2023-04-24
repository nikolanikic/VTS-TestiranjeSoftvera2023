/// <reference types="cypress" />

describe("Pet store api", () => {

    const petName = 'Pablo';
    const petId = 111;
    const photoUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fpurebred%2520dog%2F&psig=AOvVaw3B4RSnRB5Fk0OMGhuqZ3kY&ust=1682417988571000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCKCvvcalwv4CFQAAAAAdAAAAABAE';
    const petNewName='Rex';
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
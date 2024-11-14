
/// <reference types="cypress"/>



/*
Cypress Class_Practice01 
TASK-1: Validate the Google Home Page Title and URL
1.Go to https://www.google.com/ 
2.Validate that the title of the page is "Google"
3.Validate that the URL of the page is https://www.google.com/


TASK-2: Validate the Google Logo Presence
1.Go to "https://www.google.com/"
2.Validate that the Google logo is displayed


TASK-3: Validate the Google Search Results
3.Go to "https://www.google.com/"
4.Search for "Cypress" in the search bar
5.Validate that result statistics show more than zero results


TASK-4: Validate the Google Search Autocomplete Suggestions
1.Go to "https://www.google.com/"
2.Search for "Artificial Intelligence" in the search bar
3.Validate that autocomplete suggestions are present – more than zero
4.Click on the first autocomplete suggestion
5.Validate that the URL of the page contains "q=artificial+intelligence" – ignore cases
*/


describe("Cypress Class_Practice01", () => {

    beforeEach(() => {
      cy.visit("https://www.google.com/ ");
     
    });
  
    it("Validate Google Home Page Title and URL", () => {
   
      cy.title().should('eq', 'Google')
      cy.url().should('eq', 'https://www.google.com/')
    });

 
it('Validate the Google Logo Presence', () => {
    cy.get('#hplogo img').should('be.visible')
})


it('Validate the Google Search Results', () => {
    cy.get('#APjFqb').type('Cypress{enter}')
    cy.get('.dURPMd > div').should('have.length.gte', 0)
    cy.on('uncaught:exception', () => {
        return false
      });
})


it('Validate the Google Search Autocomplete Suggestions', () => {
    cy.get('#APjFqb').type('Artificial Inteligence')
    cy.get('[role="listbox"] > li').should('have.length.gte', 0)
    cy.get('[data-view-type="1"]').first().click()
  cy.url().should('contain', 'q=artificial+intelligence')
   cy.on('uncaught:exception', () => {
    return false
  });
})

});



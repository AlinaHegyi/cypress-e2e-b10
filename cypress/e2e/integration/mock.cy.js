/// <reference types="cypress"/>

// Navigate to https://techglobal-training.com/frontend/project-2
// Enter the username as "Tech"
// Enter the password as "Test1234"
// Click on the "LOGIN" button
// Validate if the failure message displayed as "Invalid Username entered!" above the form

describe('Test login functionality',() => {
  
    it('Test login with the wrong username',() => {
        cy.visit('https://techglobal-training.com/frontend/project-2');
        cy.get('#username').type('Tech');
        cy.get('#password').type('Test1234');
        cy.get('#login_btn').click();
        cy.get('#error_message').should('be.visible').and('have.text', 'Invalid Username entered!')
    });
});

// Navigate to https://techglobal-training.com/frontend/project-5
// Validate the main heading is displayed as "Pagination"
// Validate the subheading is displayed as "World City Populations 2022"
// Validate the paragraph is displayed as "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:"

it('Pagination page', () => {
cy.visit('https://techglobal-training.com/frontend/project-5');
cy.get('.is-size-3').should('be.visible', 'have.text', 'Pagination' );
cy.get('#sub_heading').should('be.visible','have.text', 'World City Populations 2022' );
cy.get('#content').should('be.visible','have.text', 'What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:' );
})

//or


it('Pagination page 2', () => {
    cy.visit('https://techglobal-training.com/frontend/project-5');
    cy.contains('.is-size-3', 'Pagination').should('be.visible');
    cy.contains('#sub_heading', 'World City Populations 2022').should('be.visible');
    cy.contains('#content', 'What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:').should('be.visible');
  });


/**
 * 
 * 
 * 
 */





/// <reference types="cypress">


//this is describe test block that holds group tests
describe('My First Tests', () => {

    //this is it test block that holds individual test
it('Visit TechGlobal training app homepage', () => {

cy.visit('https://www.techglobal-training.com/')

//command to refresh your url
 cy.reload()

 cy.visit('https://www.techglobal-training.com/frontend')
 
//comands to go forward and bacward on our url page
 //cy.go('back')
cy.go(-1)

//cy.go('forward')
cy.go(1)

cy.title().should('eq', 'TechGlobal Training | Home')

cy.url().should('include', 'https://www.techglobal-training.com/')
})

it('My first test', () => {

 //expect(true).to.equal(true)

 cy.visit('https://www.techglobal-training.com/')

//   cy.get('#logo').click()
//  cy.get('#logo').should('be.visible')
 cy.get('#logo').click().should('be.visible')

})
});

















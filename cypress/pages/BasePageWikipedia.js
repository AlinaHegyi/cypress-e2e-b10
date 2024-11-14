class BasePageWikipedia {

    getLogoWikipedia() {
       return cy.get('[class$="wordmark"]')
    };

    getSloganText() {
       return cy.get('[class$="slogan"]')
    };

    getTopTenLanguages() {
        return cy.get('div.central-featured-lang strong')
    };

    getH1CypressHeader() {
        return cy.get('.mw-page-title-main')
    };


 /* methods */



    clickSearchInput() {
        return cy.get('input#searchInput').click()
    };

    // clickLanguageButton() {
    //     return cy.get('js-lang-list-button').click()
    // }



};



export default BasePageWikipedia;



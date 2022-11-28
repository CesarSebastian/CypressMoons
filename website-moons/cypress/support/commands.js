// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@percy/cypress';
Cypress.Commands.add("CheckLinkBroken",()=>{
    cy.get("a").each($a=>{
        const message = $a.text();
        debugger
        expect($a, message).to.have.attr("href").not.contain("undefined");
        debugger
        cy.RequestInWebPage($a);
        cy.wait(1000);
        debugger
    });
})
Cypress.Commands.add("RequestInWebPage",(a)=>{
        cy.get(a).should('have.attr','href').then((href=>{
            cy.request({
                method: 'POST',
                url: href,
                failOnStatusCode: false,
            })
        }))
})
Cypress.Commands.add("ClicInAllModules",(page)=>{
    const modules = [   '.Header_Logo__2sn6y',
                        '.LinksContainer_LinkHeader__2XjIt:nth-child(1) > .LinksContainer_Link__1MWC6',
                        '.LinksContainer_LinkHeader__2XjIt:nth-child(2) > .LinksContainer_Link__1MWC6',
                        '.LinksContainer_LinkHeader__2XjIt:nth-child(3) > .LinksContainer_Link__1MWC6',
                        '.LinksContainer_LinkHeader__2XjIt:nth-child(4) > .LinksContainer_Link__1MWC6',
                        '.LinksContainer_LinkHeader__2XjIt:nth-child(5) > .LinksContainer_Link__1MWC6'];
    cy.visit(page);
    cy.get("body").wrap(modules).each(($span,i)=>{
        cy.get(modules[i]).last().click();
        cy.wait(1000);
        //cy.get("body").should("exist")
        cy.visit(page);
    })
})

Cypress.Commands.add("ValidateExistImagen",()=>{
    cy.wait(2000)
      cy.get('body')
      .then(($body) => {
        let images = $body.find('img');
        if (images.length === 0) {
          cy.log('Nothing here...');
        } else {
          cy.wrap(images).each((item) => {
            cy.wrap(item).should("have.attr", "alt").then((alt) => {
                expect(alt).not.to.be.empty;
            });
          });
        }
      })
})
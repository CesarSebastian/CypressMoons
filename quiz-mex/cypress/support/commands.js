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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands';
import QuizElements from '../integration/PO/QuizElements';
/*
cy.get('body').then(($body) => {
            if ($body.find(this.data.MODAL_WEBSITE).length) {
              cy.log('Banner Exist');
              return this.data.MODAL_WEBSITE;
            } else {
              cy.log('Banner dont exist');
            }
          });
*/

Cypress.Commands.add('emailRandom', () => {
  const quizElements = new QuizElements();
  const uuid = () => Cypress._.random(0, 1e6);
  const id = uuid();
  const emailfake = `${id}@mymoons.mx`;
  quizElements
    .getInputEmail()
    .type(emailfake, { force: true });
});
Cypress.Commands.add('numberRandom', () => {
  const quizElements = new QuizElements();
  const UniqueNumber = `${Math.floor(Math.random() * 100000000000)}`;

  quizElements
    .getInputWhatsApp()
    .type(UniqueNumber, { force: true });
});

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
import QuizElements from '../integration/PO/QuizElements';

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
  const UniqueNumber = `${Math.floor(Math.random() * 10000000000000)}`;

  quizElements
    .getInputWhatsApp()
    .type(UniqueNumber, { force: true });
});

/// <reference types='cypress'/>

import QuizElements from '../PO/QuizElements';

describe('SuiteTest_Alineadores', () => {
  // const devices = ["macbook-15","ipad-2","iphone-6"];
  const devices = ['macbook-15'];
  devices.forEach((device) => {
    context('Moons Quiz', () => {
      beforeEach(() => {
        cy.viewport(device);
        cy.reload();
        cy.clearCookies();
        cy.fixture('quiz').then(function (data) {
          this.data = data;
          cy.visit(this.data.MX_STAYING_QUIZ);
        });
      });

      // it('Open the Quiz Page', function(){
      //    cy.fixture('quiz').then(function(data){
      //        this.data=data
      //        cy.visit(this.data.QuizURLDEV)
      //    })
      //    })
      it('Moons001 - Validate the Header', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;
          cy.get('body').then(($body) => {
            if ($body.find('.banner-content').length) {
              cy.log('Banner Exist');
              // return '.banner-content';
            }else{
              cy.log('Banner dont exist');
            }
          });
          // cy.contains(this.data.PromoLabel002)
          // cy.contains(this.data.PromoLabel003)
          quizElements.getHeader().should('be.visible');
          quizElements.getMainTitle().should('be.visible');
          cy.contains(this.data.MainTitle).should('be.visible');
          cy.contains(this.data.SecondTitle);
        });
      });
      it('Moons002 - Validate the Questions ', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          cy.contains(this.data.Question1);
          quizElements.getFirstQuestionDropdown().should('be.visible');
          cy.contains(this.data.Question2);
          quizElements.getImage001().should('be.visible');
          quizElements.getImage002().should('be.visible');
          quizElements.getImage003().should('be.visible');
          quizElements.getImage004().should('be.visible');
          quizElements.getThirdQuestion().should('be.visible');
          cy.contains(this.data.Question3);
          quizElements.getInputName().should('be.visible');
          cy.contains(this.data.Question3_1);
          quizElements.getInputLastname().should('be.visible');
          cy.contains(this.data.Question3_2);
          quizElements.getInputEmail().should('be.visible');
          cy.contains(this.data.AddYourMail);
          quizElements.getInputWhatsApp().should('be.visible');
          cy.contains(this.data.AddYourWhats);
        });
      });

      it('Moons003 - Validate the stickers', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getStarsEvaluationImg().should('be.visible');
          // quizElements.getPromoImg().should('be.visible')
        });
      });

      it('Moons004 - Validate the footer', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          cy.contains(this.data.Cofepris);
          cy.contains(this.data.Version);
          cy.contains(this.data.VersionNumber);
          cy.contains(this.data.Rigths);
        });
      });

      it('Moons005 - Submit the quiz without data', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error001);
        });
      });

      it('Moons006 - Submit the quiz with question 1 answered', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          cy.clearLocalStorage();
          quizElements.getFirstQuestionDropdown().select(this.data.Age003);
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error002);
        });
      });

      it('Moons007 - Submit the quiz with question 1 and 2 answered without name', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error003);
        });
      });
      it('Moons008 - Submit the quiz with question 1 and 2 answered with wrong name', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;
          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1_1, { force: true });
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error008);
        });
      });

      it('Moons009 - Submit the quiz with question 1,2 and 3 without Last name answered', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;
          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error004);
        });
      });

      it('Moons010 - Submit the quiz with question 1,2 and 3 with wrong Last name answered', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_2, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2_1, { force: true });
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error009);
          cy.contains(this.data.Error004);
        });
      });

      it('Moons011 - Submit the quiz with question 1,2,3 without Email', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error005);
        });
      });

      it('Moons012 - Submit the quiz with question 1,2,3 with WRONG Email', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          quizElements
            .getInputEmail()
            .type(this.data.Email001, { force: true });
          quizElements
            .getInputWhatsApp()
            .type(this.data.NumberIncomplete, { force: true });
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error005);
        });
      });

      it('Moons013 - Submit the quiz with question 1,2,3 and 4 without phoneNumber', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          quizElements
            .getInputEmail()
            .type(this.data.Email003, { force: true });
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error006);
        });
      });

      it('Moons014 - Submit the quiz with question 1,2,3 and 4 with incorrectNumber', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          quizElements
            .getInputEmail()
            .type(this.data.Email003, { force: true });
          quizElements
            .getInputWhatsApp()
            .type(this.data.NumberWithText, { force: true });
          quizElements
            .getInputWhatsApp()
            .should('have.value', this.data.NumberWithTextCorrect);
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error006);
        });
      });

      it('Moons015 - Submit the quiz with question 1,2,3 and 4 with incompleteNumber', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          quizElements
            .getInputEmail()
            .type(this.data.Email003, { force: true });
          quizElements
            .getInputWhatsApp()
            .type(this.data.NumberIncomplete, { force: true });
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error006);
        });
      });

      it('Moons016 - Submit the quiz with question 1,2,3 and 4 with completeNumber', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          quizElements.getFirstQuestionDropdown().select(this.data.Age004);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          quizElements
            .getInputEmail()
            .type(this.data.Email003, { force: true });
          quizElements
            .getInputWhatsApp()
            .type(this.data.NumberCorrect, { force: true });
          quizElements.getSubmitButton().click();
          cy.contains(this.data.Error007);
        });
      });

      /* este caso es el happy path IMPORTANTE cambiar los datos
      en cada prueba para evitar que se muestre un error al enviar
      datos duplicados */
      it('Moons017 - Submit the quiz with All DATA', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          Cypress.on('uncaught:exception', (err, runnable) => false);
          quizElements.getFirstQuestionDropdown().select(this.data.Age003);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          // quizElements.getInputEmail().type(this.data.Email003, { force: true });
          cy.emailRandom();
          // quizElements.getInputWhatsApp().type(this.data.NumberCorrect, { force: true });
          cy.numberRandom();
          quizElements.getCheckBoxPermission().check();
          quizElements.getSubmitButton().click();
          cy.contains(this.data.AnswersReview);

          cy.wait(3000);
          /* cy.contains(this.data.CorrectAnswer);
          cy.contains(`${this.data.Answer3_1} ${this.data.Answer3_2}`); */
          cy.get('.mainContainer');
          cy.go('back');
        });
      });

      it('Moons018 - Submit the quiz with duplicated data', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          Cypress.on('uncaught:exception', (err, runnable) => false);
          quizElements.getFirstQuestionDropdown().select(this.data.Age003);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          quizElements
            .getInputEmail()
            .type(this.data.Email003, { force: true });
          quizElements
            .getInputWhatsApp()
            .type(this.data.NumberCorrect, { force: true });
          quizElements.getCheckBoxPermission().check();
          quizElements.getSubmitButton().click();
          cy.contains(this.data.AnswersReview);

          // cy.wait(10000);
          quizElements.GetPopUpDuplicatedDataNormalQuiz();
        });
      });

      it('Moons019 - Submit the quiz with NO candidate Age', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          Cypress.on('uncaught:exception', (err, runnable) => false);
          // cy.visit(this.data.QuizURLDEV)
          quizElements.getFirstQuestionDropdown().select(this.data.Age001);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.Answer3_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.Answer3_2, { force: true });
          quizElements
            .getInputEmail()
            .type(this.data.Email003, { force: true });
          quizElements
            .getInputWhatsApp()
            .type(this.data.NumberCorrect, { force: true });
          quizElements.getCheckBoxPermission().check();
          quizElements.getSubmitButton().click();
          // We need check the next code, because, the page don't have information
          // quizElements.getNotCandidateContainer().should('be.visible');
        });
      });

      it('Moons023 - Submit the quiz with client without public key', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          Cypress.on('uncaught:exception', (err, runnable) => false);
          quizElements.getFirstQuestionDropdown().select(this.data.Age003);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.MX_nopk_stg1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.MX_nopk_stg2, { force: true });
          quizElements
            .getInputEmail()
            .type(this.data.MX_nopk_stg3, { force: true });
          quizElements
            .getInputWhatsApp()
            .type(this.data.MX_nopk_stg4, { force: true });
          quizElements.getCheckBoxPermission().check();
          quizElements.getSubmitButton().click();
          cy.contains(this.data.AnswersReview);

          // cy.wait(10000);
          quizElements.GetPopUpDuplicatedDataNormalQuiz();
        });
      });
    });
  });
});

// nuevos casos de prueba desde aqui
describe('SuiteTest_Alineadores_Sitios_Externos', () => {
  // const devices = ["macbook-15","ipad-2","iphone-6"];
  const devices = ['macbook-15'];
  devices.forEach((device) => {
    context('Moons Quiz', () => {
      beforeEach(() => {
        cy.viewport(device);
        cy.reload();
        cy.clearCookies();
        cy.fixture('quiz').then(function (data) {
          this.data = data;
        });
      });

      // IMPORTANTE capturar el nombre del cliente la primer letra con mayuscula
      it('Moons020 - Submit the quiz with All DATA when opening quiz from website', () => {
        const quizElements = new QuizElements();
        cy.fixture('quiz').then(function (data) {
          this.data = data;

          Cypress.on('uncaught:exception', (err, runnable) => false);

          cy.visit(this.data.MX_WEBSITE_STAGING);
          cy.get(this.data.MODAL_WEBSITE).click();
          cy.get(this.data.COMENZAR).invoke('removeAttr', 'target').click();

          quizElements.getFirstQuestionDropdown().select(this.data.Age003);
          quizElements.getImage001().click();
          quizElements
            .getInputName()
            .type(this.data.MX_staging_Data_1, { force: true });
          quizElements
            .getInputLastname()
            .type(this.data.MX_staging_Data_2, { force: true });
          // quizElements.getInputEmail().type(this.data.MX_staging_Data_3, { force: true });
          cy.emailRandom();
          // quizElements.getInputWhatsApp().type(this.data.MX_staging_Data_4, { force: true });
          cy.numberRandom();
          quizElements.getCheckBoxPermission().check();
          quizElements.getSubmitButton().click();
          cy.contains(this.data.AnswersReview);

          // cy.wait(7000);
          cy.contains(this.data.CorrectAnswer);
          cy.contains(
            `${this.data.MX_staging_Data_1} ${this.data.MX_staging_Data_2}`
          );
          cy.go('back');
        });
      });

      /* IMPORTANTE se comentan debido a que al
      momento de crear el script solo se cuenta con
      páginas productivas de landings ads y referidos
      */
      /* it ('Moons021 - Submit the quiz with All DATA', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data

                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false;
                    });

                    cy.visit('https://welovemoons.mymoons.cl/')
                    cy.get('#link-94aw32d4r8').invoke('removeAttr', 'target').click()

                    quizElements.getFirstQuestionDropdown().select(this.data.Age003)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.CLData001_1, {force: true})
                    quizElements.getInputLastname().type(this.data.CLData001_1, {force: true})
                    quizElements.getInputEmail().type(this.data.CLData001_3, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.CLData001_4, {force: true})
                    quizElements.getCheckBoxPermission().check()
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.AnswersReview)

                    cy.wait(7000)
                    cy.contains(this.data.CorrectAnswer)
                    cy.contains(this.data.CLData001_1 + " " + this.data.CLData001_1)
                    cy.go('back')
            })
        })

        it ('Moons022 - Submit the quiz with All DATA when opening quiz from referral', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data

                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false;
                    });

                    cy.visit('https://referidos.mymoons.cl/')
                    cy.get('#link-qs6fg6ukevk').invoke('removeAttr', 'target').click()

                    quizElements.getFirstQuestionDropdown().select(this.data.Age003)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.CLData001_1, {force: true})
                    quizElements.getInputLastname().type(this.data.CLData001_1, {force: true})
                    quizElements.getInputEmail().type(this.data.CLData001_3, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.CLData001_4, {force: true})
                    quizElements.getCheckBoxPermission().check()
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.AnswersReview)

                    cy.wait(7000)
                    cy.contains(this.data.CorrectAnswer)
                    cy.contains(this.data.CLData001_1 + " " + this.data.CLData001_1)
                    cy.go('back')
            })
        }) */
    });
  });
});

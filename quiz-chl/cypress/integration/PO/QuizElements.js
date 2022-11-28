class QuizElements {
  //HEADER
  getPromoBanner() {
    return cy.get('.banner-content');
  }
  getHeader() {
    return cy.get('#header');
  }
  getMainTitle() {
    //cy.get()
    return cy.get('.LandingQuiz_WelcomeTitle__2C39e');
  }
  getMainTitleCO() {
    //cy.get()
    return cy.get('#WelcomeTitle');
  }
  //QUESTIONS SECTION
  getQuestionSection() {
    return cy.get('.LandingQuiz_NextStep__A8PWr');
  }
  getClassQuestion001() {
    return cy.get('h2.SubTitle_SubTitle__1BtKb');
  }
  getFirstQuestionDropdown() {
    return cy.get('#age-select');
  }
  getSecondQuestion() {
    //return cy.get('.Question3_selectCss__2wC5a')
  }
  getImage001() {
    return cy.get('[alt="dientes encimados"]');
  }
  getImage002() {
    return cy.get('[alt="dientes separados"]');
  }
  getImage003() {
    return cy.get('[alt="dientes decolorados"]');
  }
  getImage004() {
    return cy.get('[alt="la mordida"]');
  }
  getImage005() {
    return cy.get('[alt="Sólo quiero alinear mis dientes"]');
  }
  getThirdQuestion() {
    return cy.get('.LandingQuiz_subContainer__mMj69');
  }
  getInputName() {
    return cy.get(':nth-child(1) > .Input_Inp__gJYEb > input');
  }
  getInputLastname() {
    return cy.get(':nth-child(2) > .Input_Inp__gJYEb > input');
  }
  getInputEmail() {
    return cy.get(':nth-child(4) > .Input_Inp__gJYEb > input');
  }
  getInputWhatsApp() {
    return cy.get('.whatsapp-input_inputClass__Npf69');
  }
  getLabelPermission() {
    return cy.get('.Question7_wpOptInText__1ua-O');
  }
  //Checkbox MX
  getCheckBoxPermission() {
    return cy.get('.contact_checkWp__3bM8A');
  }
  //CheckBox CO
  getCheckBoxPermissionCo() {
    return cy.get('.Question7_whatsAppContainer__3l77D');
  }
  // MMX
  getComercialCenter() {
    return cy.get('.Question4_selectCss__3TJpG');
  }
  //CO
  getComercialCenterCO() {
    return cy.get('.Question4_selectCss__2oKVI');
  }
  //SUBMIT BUTTON
  getSubmitButton() {
    return cy.get('#submitQuiz');
  }
  getStarsEvaluationImg() {
    return cy.get('[alt="starts"]');
  }
  getPromoImg() {
    return cy.get('#badgeImage');
  }
  getFooter() {
    return cy.get('.Footer_Content__1QlO1');
  }
  GetPopUpDuplicatedData() {
    return cy.get('.modal_mainContainer__102u0');
  }
  GetPopUpDuplicatedDataNormalQuiz() {
    return cy.get('.ReactModal__Content');
  }
  //ERRORS MESSAGES
  getError() {
    return cy.get('.Question7_detailsErrors__25GxN');
  }
  //No candidate
  getNoCandidateContainer() {
    return cy.get('.NoCandidate_containerFlex__2-rpC');
  }
  getNotCandidateContainer() {
    return cy.get('.NoCandidate_containerFlex__3796C');
  }
}
export default QuizElements;

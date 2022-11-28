describe.only('Loading Page Url1',  function()
{
  
  beforeEach(() => 
    {
      cy
      .fixture('env.json').as('env')
      cy
      .fixture('data.json').as('data')   
    })

    it.only('Purchase Summary', function() {
        cy.VisitPage(this.env.couponCol+this.env.pacienteColombia)
        cy.ContainsText(this.data.textWhatPayment)
        cy.ValidateExistCoupon(true)
        cy.ButtonClick(this.data.buttonContinue)
    })
    
    it.only('Shipping Address', function(){
      cy.contains('CONTINUAR').should('be.visible').click()
    })

    it.only('Payment Method', function(){
        cy.wait(5000);
        //Tipo de pago 
        cy.ContainsText(this.data.textPaymentMeth)
        cy.get(".PaymentSelector1_TextTema__3XYeX").click()
        cy.get(".PaymentSelector1_TextTema__3XYeX").click()
        //Tipo de documento
        cy.get(".GenericDropdown_TextTema__2roBP").click()
        cy.get("#CC").click()
        cy.wait(2000);
        cy.get("#dniText").type(this.data.idDocument)//Numero de documento 
        cy.get("#cardName").type(this.data.cardName)//Titular de tarjeta
        cy.get("#cardID").type(this.data.cardIDCo)//Numero de tarjeta
        //Fecha
        cy.get("#month").type(this.data.month)
        cy.get("#year").type(this.data.year)
        cy.get("#cvc").type(this.data.cvc)
        cy.wait(5000);
    })

    it.only('TestToBackend', function(){
      cy.ValitadeMSI(this.data.NoMounths);
      cy.wait(2000);
      cy.contains('Pagar').should('be.visible').trigger('mouseover').click();
      cy.wait(10000);
    })

    it.only("ValidateSuccessfulPayment",function(){
      cy.ValidateCodeConfirmation(this.data.textSuccefulPayment);
    })
    
})
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
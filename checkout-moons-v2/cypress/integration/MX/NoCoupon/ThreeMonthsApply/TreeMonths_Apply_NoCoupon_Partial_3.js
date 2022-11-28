describe.only('TreeMonths_Apply_NoCoupon_Partial_3',  function()
{
  beforeEach(() => 
    {
      cy
      .fixture('env.json').as('env')
      cy
      .fixture('data.json').as('data')   
    })

    it.only('Purchase Summary', function() {
      cy
      .VisitPage(this.env.hostMex+this.env.TestPriceGreater);
      
      cy
      .ContainsText(this.data.textWhatPayment);
      
      cy.ValidateExistCoupon(false);

      cy
      .ButtonClick(this.data.buttonContinue);
  })

  

  it.only('Payment Method', function(){
  
    cy
    .ContainsText(this.data.textPaymentMeth);

    cy
    .PaymentMethod(
      this.data.cardName,
      this.data.cardIDMexicoMeses,
      this.data.month,
      this.data.year,
      this.data.cvc
    );
  })

  it.only('TestToBackend', function(){
    cy.ConvertNumber(this.data.ThreeMonths);
    
    cy.ButtonClick(this.data.buttonPayment);

    cy.wait(10000);
  })

  it.only("ValidateSuccessfulPayment",function(){
    cy.ValidateCodeConfirmation(this.data.textSuccefulPayment);
  })
})
  
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
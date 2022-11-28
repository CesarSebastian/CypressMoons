describe.only('NineMonths_Discount_NoCoupon_NoPayment_4',  function()
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
      .VisitPage(this.env.hostMex+this.env.PriceLowerNAnticipo);
      
      cy
      .ContainsText(this.data.textWhatPayment);

      cy.ValidateExistCoupon(false);
      
      cy
      .ButtonClick(this.data.buttonContinue);
  })

  it.only('Shipping Address', function(){
    cy
    .ContainsText(this.data.textWhereSend);

    cy.ClearShippingA();

    cy
    .ShippingAddress(
      this.data.street,
      this.data.interiorNumber,
      this.data.zipCode,
      this.data.colony,
      this.data.state,
      this.data.city,
      this.data.reference
    );

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
    cy.ValitadeMSI(this.data.NineMonths);
    
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
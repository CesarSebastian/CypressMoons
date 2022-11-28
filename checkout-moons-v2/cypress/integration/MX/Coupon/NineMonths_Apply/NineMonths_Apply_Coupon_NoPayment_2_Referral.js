describe.only('NineMonths_Apply_Coupon_NoPayment_1_Simple',  function()
{
  beforeEach(() => 
    {
      cy
      .fixture('env.json').as('env')
      cy
      .fixture('data.json').as('data')
      
      cy.fixture('coupon.json').as('coupon')   
    })

  it.only('Purchase Summary', function() {
    /*Crear nuevo env para las nuevas ligas con cupon */
    cy.VisitPageCoupon(this.env.hostMex+this.coupon.CouponFront+this.coupon.CouponReferral);
    cy.wait(1000);
    cy.ContainsText(this.data.textWhatPayment);
    //Se activara la validación
    cy.ValidateCouponInvalide();
      
    //Se realiza función para agregar cupon
    //Debemos agregar una validación para verificar que el precio cambio
         
    cy.ButtonClick(this.data.buttonContinue);
  })

  it.only('Shipping Address', function(){
    cy.ContainsText(this.data.textWhereSend);

    cy.ClearShippingA();

    cy.ShippingAddress(
      this.data.street,
      this.data.interiorNumber,
      this.data.zipCode,
      this.data.colony,
      this.data.state,
      this.data.city,
      this.data.reference
    );

    cy.ButtonClick(this.data.buttonContinue);
  })

  it.only('Payment Method', function(){
  
    cy.ContainsText(this.data.textPaymentMeth);

    cy.PaymentMethod(
      this.data.cardName,
      this.data.cardIDMexicoMeses,
      this.data.month,
      this.data.year,
      this.data.cvc
    );

  })

  it.only('TestToBackend', function(){
    cy.ConvertNumber(this.data.NineMonths);
    
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
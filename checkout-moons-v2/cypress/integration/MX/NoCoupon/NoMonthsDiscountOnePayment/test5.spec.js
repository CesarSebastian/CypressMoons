describe.only('Loading Page Url5',  function()
{
  

  beforeEach(() => 
    {
      cy
      .fixture('env.json').as('env')
      
      cy
      .fixture('data.json').as('data')    
    })

  it.only('successfully loads', function() {
    cy.clearCookies();

    cy
    .VisitPage(this.env.hostMex+this.env.url5);

    cy
    .ContainsText(this.data.textWhatPayment);
    
    cy.ValidateExistCoupon(false);

    cy
    .ButtonClick(this.data.buttonContinue);
  })

  it.only('Shipping Address', function(){
        cy
        .ContainsText(this.data.textWhereSend);
        
        //Se agrega espacio en blanco en zipCode
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
        this.data.cardIDMexico,
        this.data.month,
        this.data.year,
        this.data.cvc
        );
        
  })

  it.only('TestToBackend', function(){
    cy.ValitadeMSI(this.data.NoMounths);
    
    cy.ButtonClick(this.data.buttonPayment);

    cy.wait(10000)
  })

  it.only("ValidateSuccessfulPayment",function(){
    cy.ValidateCodeConfirmation(this.data.textSuccefulPayment);
  })
})
  
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
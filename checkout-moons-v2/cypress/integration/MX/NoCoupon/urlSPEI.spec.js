describe.only('LoadingPageUrlSPEI ',  function(){
    beforeEach(() => 
    {
      cy.fixture('env.json').as('env')
      cy.fixture('data.json').as('data')
    });

    it.only('SuccessfullyLoads', function() {
      cy.VisitPage("https://checkout-dev-e42c8.web.app/checkout/testApplyToPrice/42pmvqx2rhr8/4085433000056373139");

      cy.ButtonClick(this.data.buttonContinue);
    });

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

    it.only('PaymentMethod', function(){
  
        cy.contains('Método de Pago')
      
        cy.get('.PaymentSelector1_TextTema__3XYeX').click()
 
        cy.get('#spei').click()

        cy.contains('Obtener CLABE').click()
    });
    

});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
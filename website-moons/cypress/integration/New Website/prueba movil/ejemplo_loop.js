describe('Ciclo freshpaint', () => {

    beforeEach(function () {
      cy.fixture('env')
        .then((env) => {
          this.env = env
        })
      Cypress.on('fail', (error, runnable) => {
        debugger
        throw error 
      })
    })

    for(let i = 0; i < 3; i++){

    it.only('flujo prueba '+(i+1)+'',function(){
      
        cy.log('ingreso al Home número '+(i+1))
        cy.visit('https://dev-freshpaint-test.web.app/');
        cy.wait(3000)
        cy.log('ingreso a Como funciona número '+(i+1))
        cy.get('.Menu_menu-container__1NN3T > :nth-child(1)').click();
        cy.wait(2000)
        cy.get('[style="height: 88px; border-top: 1px solid rgb(189, 189, 189);"] > :nth-child(1)').click();
        cy.wait(2000)
        cy.log('ingreso a Alineadores número '+(i+1))
        cy.get('.Menu_menu-container__1NN3T > :nth-child(2) > .ButtonContent > .ButtonText > span').click()
        cy.wait(1000)
        cy.get('[style="height: 88px; border-top: 1px solid rgb(189, 189, 189);"] > :nth-child(1)').click()
        cy.wait(1000)
        cy.log('presionar botón Comenzar ahora número '+(i+1))
        cy.get('.Header_logo-container__3TEGI > [rel="noreferrer"]').click();
        cy.wait(1000)
        cy.scrollTo('center')
        cy.scrollTo('bottom')
        cy.get('#website_footer').click();
        cy.wait(3000)

        cy.log('fin de prueba número '+(i+1))
        cy.clearCookies()
  
    });
  }
})

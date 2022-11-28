const sizes = ['iphone-6', 'iphone-7', 'samsung-s10',[414, 846]]

describe('Logo', () => {
  sizes.forEach((size) => {

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
    //validación de url
    it.only('Revisar links caidos',function(){
      //se ingresa al home
       cy.visit(this.env.SolutionsMoons);
      /*cy.wait(2000)
      cy.CheckLinkBroken();*/
    });

    // make assertions on the logo using
    // an array of different viewports
    it.only(`Prueba en pantalla ${size}`, function() {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.fixture('elementos_new_website').then((new_website) =>{
        var header = new_website.header  
      cy.wait(2000)
      //se recorre la página antes de buscar los id para que la cargue y no mande un error debido al lazy load
      cy.scrollTo('center')
      cy.scrollTo('bottom')
      //valida header 
      cy.get(header).should('be.visible')//valida header 
      cy.wait(2000)
      })
    })
  })
})
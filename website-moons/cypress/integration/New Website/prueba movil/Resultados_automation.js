const sizes = ['iphone-6', 'ipad-2', [1024, 768]]

describe('Resultados', function() {

  //funcion multivistas
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
        it.only('CheckTheUrl',function(){
          //cy.viewport('iphone-6')
          //se ingresa a la pa de seguimiento
           cy.visit(this.env.SolutionsMoons);
           cy.get('#menuIcon').click()
           cy.get('.Menu_items__2kb6E > :nth-child(6)').click()
          cy.wait(2000)
          cy.CheckLinkBroken();
        });
            
            it.only('Validar sección header',function(){
            //cy.viewport('iphone-6')
            //carga de variables dinamicas desde archivo new_website.json
            cy.fixture('elementos_new_website').then((new_website) =>{
              var header = new_website.header  
            cy.wait(2000)
            //se recorre la página antes de buscar los id para que la cargue y no mande un error debido al lazy load
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            //valida header 
            cy.get(header).should('be.visible')//valida header 
            cy.wait(2000)
            }) })

            it.only('Validar sección hero',function(){
              //cy.viewport('iphone-6')
            cy.fixture('elementos_new_website').then((new_website) =>{
              var resultados_hero = new_website.m_resultados_hero
            //valida hero 
            cy.get(resultados_hero).should('be.visible')
            }) })

            it.only('Validar sección medios',function(){
              //cy.viewport('iphone-6')
            cy.fixture('elementos_new_website').then((new_website) =>{
              var medios = new_website.m_resultados_medios
            //valida imagenes de medios 
            cy.get(medios).should('be.visible')
              }) })

            it.only('Validar sección testimonio',function(){
              //cy.viewport('iphone-6')
            cy.fixture('elementos_new_website').then((new_website) =>{
              var testimonio = new_website.m_resultados_testimonio
            //valida video mariana sabau
            cy.get(testimonio).should('be.visible')
            }) })      

            it.only('Validar sección antes y después',function(){
              //cy.viewport('iphone-6')
            cy.fixture('elementos_new_website').then((new_website) =>{
              var despues = new_website.m_resultados_despues
            //valida antes y despues 
            cy.get(despues).should('be.visible')
            }) })

            it.only('Validar sección diez mil cosmonautas',function(){
              //cy.viewport('iphone-6')
            cy.fixture('elementos_new_website').then((new_website) =>{
              var cosmonautas = new_website.m_resultados_cosmonautas
            //valida comentarios diez mil cosmonautas
            cy.get(cosmonautas).should('be.visible')
            }) })
            
            it.only('Validar sección footer',function(){
              //cy.viewport('iphone-6')
            cy.fixture('elementos_new_website').then((new_website) =>{
              var footer = new_website.footer
              var footer_frame = new_website.footer_frame
            //valida footer
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolResultados);//toma de captura de pantalla con percy
            }) })
          })
        });
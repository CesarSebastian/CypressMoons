describe('Resultados', function() {

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
          //se ingresa a la pa de seguimiento
           cy.visit(this.env.SolutionsMoons);
           cy.get('.Menu_menu-container__1NN3T > :nth-child(1) > .ButtonContent').click()
           cy.get('[style="height: 88px; border-top: 1px solid rgb(189, 189, 189);"] > :nth-child(4)').click()
          cy.wait(2000)
          cy.CheckLinkBroken();
        });
            
            it.only('Validar sección header',function(){
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
            cy.fixture('elementos_new_website').then((new_website) =>{
              var resultados_hero = new_website.resultados_hero
              var resultados_hero_titulo = new_website.resultados_hero_titulo
              var resultados_hero_subtitulo = new_website.resultados_hero_subtitulo
              var resultados_hero_boton = new_website.resultados_hero_boton  
            //valida hero 
            cy.get(resultados_hero).should('be.visible')
            cy.get(resultados_hero_titulo).should('be.visible')//valida título de la sección
            cy.get(resultados_hero_subtitulo).should('be.visible')//valida subtítulo de la sección
            cy.get(resultados_hero_boton).should('be.visible')//valida botón empieza ahora de la sección
            }) })

            it.only('Validar sección medios',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var medios = new_website.resultados_medios
            //valida imagenes de medios 
            cy.get(medios).should('be.visible')
              }) })

            it.only('Validar sección testimonio',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var testimonio = new_website.resultados_testimonio
              var testimonio_texto = new_website.resultados_testimonio_texto
              var testimonio_video = new_website.resultados_testimonio_video
            //valida video mariana sabau
            cy.get(testimonio).should('be.visible')
            cy.get(testimonio_texto).should('be.visible')//valida texto de la sección
            cy.get(testimonio_video).should('be.visible')//valida contenedor del video de la sección
            }) })      

            it.only('Validar sección antes y después',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var despues = new_website.resultados_despues
              var despues_titulo = new_website.resultados_despues_titulo
              var despues_boton = new_website.resultados_despues_boton
            //valida antes y despues 
            cy.get(despues).should('be.visible')
            cy.get(despues_titulo).should('be.visible')//valida titulo de sección
            cy.get(despues_boton).should('be.visible')//valida botón ver más resultados de la sección
            }) })

            it.only('Validar sección diez mil cosmonautas',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var cosmonautas = new_website.resultados_cosmonautas
              var cosmonautas_titulo = new_website.resultados_cosmonautas_titulo
              var cosmonautas_rating = new_website.resultados_cosmonautas_rating
              var cosmonautas_comentarios = new_website.resultados_cosmonautas_comentarios
              var cosmonautas_paginador = new_website.resultados_cosmonautas_paginador
            //valida comentarios diez mil cosmonautas
            cy.get(cosmonautas).should('be.visible')
            cy.get(cosmonautas_titulo).should('be.visible')//valida titulo de la sección
            cy.get(cosmonautas_rating).should('be.visible')//valida contenedor de rating
            cy.get(cosmonautas_comentarios).should('be.visible')//valida contenedor de comentarios
            cy.get(cosmonautas_paginador).should('be.visible')//valida paginador de comentarios
            }) })
            
            it.only('Validar sección footer',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var footer = new_website.footer
              var footer_frame = new_website.footer_frame
            //valida footer
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolResultados);//toma de captura de pantalla con percy
            }) })
        });
describe('Ubicaciones', function() {

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
          cy.fixture('elementos_new_website').then((new_website) =>{
            var link = new_website.link_ubicaciones
          //se ingresa a la pag de seguimiento
           cy.visit(this.env.SolutionsMoons);
           cy.get(link).click()
          cy.wait(2000)
          cy.CheckLinkBroken();
          })
        });
            
            it.only('Validar sección header',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var header = new_website.header
            cy.wait(2000)
            //se recorre la página antes de buscar los id para que la cargue y no mande un error debido al lazy load
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            //valida header 
            cy.get(header).should('be.visible')
              }) })

            it.only('Validar sección hero',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var hero = new_website.ubicaciones_hero
              var hero_titulo = new_website.ubicaciones_hero_titulo
              var hero_subtitulo = new_website.ubicaciones_hero_subtitulo
            //valida hero 
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(hero).should('be.visible')
            cy.get(hero_titulo).should('be.visible')//valida título de la sección
            cy.get(hero_subtitulo).should('be.visible')//valida subtítulo de la sección
              }) })
            
            it.only('Validar sección listado clinicas',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var clinicas = new_website.ubicaciones_clinicas
              var clinicas_lista = new_website.ubicaciones_clinicas_listado
            //valida listado clínicas 
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(clinicas).should('be.visible')
            cy.get(clinicas_lista).should('be.visible')//valida listado de clinicas 
              }) })
            
            it.only('Validar sección tratamiento',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var tratamiento = new_website.ubicaciones_tratamiento
              var tratamiento_titulo = new_website.ubicaciones_tratamiento_titulo
              var tratamiento_subtitulo = new_website.ubicaciones_tratamiento_subtitulo
              var tratamiento_boton = new_website.ubicaciones_tratamiento_boton
              var tratamiento_imagen = new_website.ubicaciones_tratamiento_imagen
            //valida empieza tu tratamiento desde tu hogar 
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(tratamiento).should('be.visible')
            cy.get(tratamiento_titulo).should('be.visible')//valida título sección
            cy.get(tratamiento_subtitulo).should('be.visible')//valida subtítulo sección
            cy.get(tratamiento_boton).should('be.visible')//valida botón de la sección
            cy.get(tratamiento_imagen).should('be.visible')//valida imagen de la sección
              }) })

            it.only('Validar sección tratamiento',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var basicos = new_website.ubicaciones_basicos
              var basicos_titulo = new_website.ubicaciones_basicos_titulo
              var basicos_contenedor = new_website.ubicaciones_basicos_contenedor
            //valida los 3 basicos para visitar nuestros centros
            cy.get(basicos).should('be.visible')
            cy.get(basicos_titulo).should('be.visible')//valida título sección
            cy.get(basicos_contenedor)//valida contenedor de imagenes
              }) })

            it.only('Validar sección diez mil cosmonautas',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var cosmonautas = new_website.ubicaciones_cosmonautas
              var cosmonautas_titulo = new_website.ubicaciones_cosmonautas_titulo
              var cosmonautas_rating = new_website.ubicaciones_cosmonautas_rating
              var cosmonautas_comentarios = new_website.ubicaciones_cosmonautas_comentarios
              var cosmonautas_paginador = new_website.ubicaciones_cosmonautas_paginador
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
            cy.percySnapshot(this.env.SolUbicaciones);//toma de captura de pantalla con percy
              }) })
        });


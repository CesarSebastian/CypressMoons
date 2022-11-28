describe('Home kit', function() {

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
           cy.get('.Menu_menu-container__1NN3T > :nth-child(2) > .ButtonContent > .ButtonText > span').click()
           cy.get('[style="height: 88px; border-top: 1px solid rgb(189, 189, 189);"] > :nth-child(2)').click()
          cy.wait(2000)
          cy.CheckLinkBroken();
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
              var hero = new_website.homekit_hero
              var hero_texto = new_website.homekit_hero_texto
              var hero_boton = new_website.homekit_hero_boton
              var hero_frame = new_website.homekit_hero_frame
            //valida hero 
            cy.get(hero).should('be.visible')
            cy.get(hero_texto).should('be.visible')//valida texto de la seccion
            cy.get(hero_boton).should('be.visible')//valida botón de la seccion
            cy.get(hero_frame).should('be.visible')//valida contenedor de imagenes de la seccion
            }) })

            it.only('Validar sección contigo en casa paso',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var contigo = new_website.homekit_contigo
              var contigo_texto = new_website.homekit_contigo_texto
              var contigo_frame = new_website.homekit_contigo_frame
            //valida contigo paso a paso 
            cy.get(contigo).should('be.visible')
            cy.get(contigo_texto).should('be.visible')//valida título de la sección
            cy.get(contigo_frame).should('be.visible')//valida contenedor de textos de la seccion
            }) })

            it.only('Validar sección descubre como funciona',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var descubre = new_website.homekit_descubre
              var descubre_titulo = new_website.homekit_descubre_titulo
              var descubre_texto = new_website.homekit_descubre_texto
              var descubre_frame  = new_website.homekit_descubre_frame
            //valida descubre como funciona
            cy.get(descubre).should('be.visible')
            cy.get(descubre_titulo).should('be.visible')//valida título de la sección
            cy.get(descubre_texto).should('be.visible')//valida subtexto de la sección
            cy.get(descubre_frame).should('be.visible')//valida contenedor de video de la sección
            }) })

            it.only('Validar sección profesionales',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var profesionales = new_website.homekit_profesionales
              var profesionales_titulo = new_website.homekit_profesionales_titulo
              var profesionales_texto = new_website.homekit_profesionales_texto
              var profesionales_contenedor = new_website.homekit_profesionales_frame
            //valida sección Diseñados y creados por profesionales 
            cy.scrollTo('bottom')
            cy.get(profesionales).should('be.visible')
            cy.get(profesionales_titulo).should('be.visible')//valida título de la sección
            cy.get(profesionales_texto).should('be.visible')//valida texto de la sección
            cy.get(profesionales_contenedor).should('be.visible')//valida contenedor de imagenes de la sección
            }) })

            it.only('Validar sección precios',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var precios = new_website.homekit_precios
              var precios_imagen = new_website.homekit_precios_imagen
              var precios_texto = new_website.homekit_precios_texto
            //valida precios
            cy.get(precios).should('be.visible')
            cy.get(precios_imagen).should('be.visible')//valida imagen de la sección
            cy.get(precios_texto).should('be.visible')//valida texto de la sección
            }) })

            it.only('Validar sección preguntas frecuentes',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var faq = new_website.homekit_faq
              var faq_titulo = new_website.homekit_faq_titulo
            //valida faq
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(faq).should('be.visible')
            cy.get(faq_titulo).should('be.visible')//valida titulo de sección
            }) })

            it.only('Validar sección footer',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var footer = new_website.footer
              var footer_frame = new_website.footer_frame
            //valida footer
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolHomekit);
            cy.wait(2000)
            }) })
        });
describe('Precios', function() {

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
            var link = new_website.link_precios
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
              var hero = new_website.precios_hero
              var hero_titulo = new_website.precios_hero_titulo
              var hero_subtitulo = new_website.precios_hero_subtitulo
              var hero_boton = new_website.precios_hero_boton
            //valida hero 
            cy.get(hero).should('be.visible')
            cy.get(hero_titulo).should('be.visible')//valida título de la sección
            cy.get(hero_subtitulo).should('be.visible')//valida subtitulo de la sección
            cy.get(hero_boton).should('be.visible')//valida botón de la sección
              }) })

            it.only('Validar sección precios',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var precios = new_website.precios_precios
              var precios_textos = new_website.precios_precios_textos
              var precios_unico = new_website.precios_precios_unico
            //valida sección La mejor opción y precios 
            cy.get(precios).should('be.visible')
            cy.get(precios_textos).should('be.visible')//se valida sección pago a meses desde
            cy.get(precios_unico).should('be.visible')//se valida sección pago único
              }) })
            
            it.only('Validar sección cuanto quieres pagar',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var pagar = new_website.precios_pagar
              var pagar_titulo = new_website.precios_pagar_titulo
              var pagar_subtitulo = new_website.precios_pagar_subtitulo
              var pagar_linea = new_website.precios_pagar_linea
              var pagar_cuadricula = new_website.precios_pagar_cuadricula
              var pagar_boton = new_website.precios_pagar_boton
            //valida calcula cuanto quieres pagar
            cy.get(pagar).should('be.visible')
            cy.get(pagar_titulo).should('be.visible')//valida titulo de la sección
            cy.get(pagar_subtitulo).should('be.visible')//valida subtitulo de la sección
            cy.get(pagar_linea).should('be.visible')//se valida linea de tiempo para elegir meses
            cy.get(pagar_cuadricula).should('be.visible')//se valida cuadricula de montos a pagar
            cy.get(pagar_boton).should('be.visible')//se valida botón Empieza ahora
              }) })
            
            it.only('Validar sección garantía de sonrisa',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{  
              var garantia = new_website.precios_garantia
              var garantia_fondo = new_website.precios_garantia_fondo
              var garantia_texto = new_website.precios_garantia_texto
              var garantia_boton = new_website.precios_garantia_boton
            //valida garantía de sonrisa
            cy.scrollTo('center')
            cy.get(garantia).should('be.visible')
            cy.get(garantia_fondo).should('be.visible')//se valida background de la seccion
            cy.get(garantia_texto).should('be.visible')//se valida texto de la sección
            cy.get(garantia_boton).should('be.visible')//se valida botón de la sección
              }) })

            it.only('Validar sección olvidate de los brackets',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{ 
              var brackets = new_website.precios_brackets
              var brackets_titulo = new_website.precios_brackets_titulo
              var brackets_subtitulo = new_website.precios_brackets_subtitulo
              var brackets_boton = new_website.precios_brackets_boton
            //valida olvidate de los brackets
            cy.get(brackets).should('be.visible')
            cy.get(brackets_titulo).should('be.visible')//valida titulo
            cy.get(brackets_subtitulo).should('be.visible')//valida subtitulo
            cy.get(brackets_boton).should('be.visible')//valida conoce mas
              }) })
            
            it.only('Validar sección preguntas frecuentes',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{ 
              var faq = new_website.precios_faq
              var faq_titulo = new_website.precios_faq_titulo
              var faq_preguntas = new_website.precios_faq_preguntas
            //valida faq
            cy.get(faq).should('be.visible')
            cy.get(faq_titulo).should('be.visible')//valida titulo de sección
            cy.get(faq_preguntas).should('be.visible')//valida sección de preguntas
              }) })

            it.only('Validar sección footer',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{ 
              var footer = new_website.footer
              var footer_frame = new_website.footer_frame
            //valida footer
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolPrecios);
             }) })
            
        });
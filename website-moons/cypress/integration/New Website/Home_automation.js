describe('Nuevo Website Moons 2.0', function() {

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
      it.only('CheckTheUrl',function(){
        cy.visit(this.env.SolutionsMoons);
        cy.wait(2000)
        cy.CheckLinkBroken();
      });         

            it.only('Validar sección header',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var header = new_website.header
            //se ingresa al home del website
            cy.visit(this.env.SolutionsMoons);
            cy.wait(2000)
            //se recorre la página antes de buscar los id para que la cargue y no mande un error debido al lazy load
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            //valida header 
            cy.get(header).should('be.visible')
              }) })
            
            it.only('Validar sección hero',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var hero = new_website.home_hero
              var hero_texto = new_website.home_hero_texto
              var hero_boton = new_website.home_hero_boton
              var hero_imagenes = new_website.home_hero_imagenes
              var hero_periodicos = new_website.home_hero_periodicos
            //valida sección Sonríe mas con moons (hero)
            cy.scrollTo('bottom')
            cy.get(hero).should('be.visible')
            cy.get(hero_texto).should('be.visible')//valida texto hero
            cy.get(hero_boton).should('be.visible')//valida botón hero
            cy.get(hero_imagenes).should('be.visible')//valida carrusel hero
            //valida sección forbes, dinero, expansión y la república 
            cy.get(hero_periodicos).should('be.visible')
            }) })

            it.only('Validar sección antes y despues',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var despues = new_website.home_despues
              var despues_titulo = new_website.home_despues_titulo
              var despues_subtitulo = new_website.home_despues_subtitulo
              var despues_categorias = new_website.home_despues_categorias
              var despues_boton = new_website.home_despues_boton
            //valida sección Antes y despues 
            cy.scrollTo('bottom')
            cy.get(despues).should('be.visible')
            cy.get(despues_titulo).should('be.visible')//valida texto título
            cy.get(despues_subtitulo).should('be.visible')//valida texto subtitulo
            cy.get(despues_categorias).should('be.visible')//valida categorias
            cy.get(despues_boton).should('be.visible')//valida botón ver más resultados
              }) })
              
            it.only('Validar sección tu sonrisa pero mejor',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var mejor = new_website.home_mejor
              var mejor_titulo = new_website.home_mejor_titulo
            //valida sección Tu sonrisa, pero mejor 
            cy.scrollTo('bottom')
            cy.get(mejor).should('be.visible')
            cy.get(mejor_titulo).should('be.visible')//valida título de la sección
            }) })

            it.only('Validar sección precios',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var precios = new_website.home_precios
              var precios_textos = new_website.home_precios_textos
              var precios_unico = new_website.home_precios_unico
              var precios_boton = new_website.home_precios_boton
            //valida sección La mejor opción y precios 
            cy.get(precios).should('be.visible')
            cy.get(precios_textos).should('be.visible')//se valida texto La mejor opción de México
            cy.get(precios_unico).should('be.visible')//se valida sección pago único
            cy.get(precios_boton).should('be.visible')//se valida botón Ver detalles
            }) })

            it.only('Validar sección garantia de sonrisa',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var garantia = new_website.home_garantia
              var garantia_fondo = new_website.home_garantia_fondo
              var garantia_texto = new_website.home_garantia_texto
              var garantia_boton = new_website.home_garantia_boton
            //valida garantía de sonrisa
            cy.get(garantia).should('be.visible')
            cy.get(garantia_fondo).should('be.visible')//se valida background de la seccion
            cy.get(garantia_texto).should('be.visible')//se valida texto de la sección
            cy.get(garantia_boton).should('be.visible')//se valida botón de la sección
            }) })

            it.only('Validar sección todo listo en 3 pasos',function(){
              cy.fixture('elementos_new_website').then((new_website) =>{
                var pasos = new_website.home_pasos
            //valida sección Todo listo en 3 pasos 
            cy.scrollTo('bottom')
            cy.get(pasos).should('be.visible')
              }) })
            
            it.only('Validar sección profesionales',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var profesionales = new_website.home_profesionales
              var profesionales_titulo = new_website.home_profesionales_titulo
              var profesionales_texto = new_website.home_profesionales_texto
              var profesionales_boton = new_website.home_profesionales_boton
              var profesionales_contenedor = new_website.home_profesionales_contenedor
            //valida sección Diseñados y creados por profesionales 
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(profesionales).should('be.visible')
            cy.get(profesionales_titulo).should('be.visible')//valida título de la sección
            cy.get(profesionales_texto).should('be.visible')//valida texto de la sección
            cy.get(profesionales_boton).should('be.visible')//valida botón de la sección
            cy.get(profesionales_contenedor).should('be.visible')//valida contenedor de imagenes de la sección
            }) })

            it.only('Validar sección footer',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var footer = new_website.footer
              var footer_frame = new_website.footer_frame
            //valida footer
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolutionsMoons);
            }) })
        });
describe('Página Acompañamiento', function() {

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
          //se ingresa a la pa de seguimiento
          cy.visit(this.env.SolutionsMoons);
          cy.get('.Menu_menu-container__1NN3T > :nth-child(1) > .ButtonContent').click()
          cy.get('[style="height: 88px; border-top: 1px solid rgb(189, 189, 189);"] > :nth-child(3) > .ButtonContent > .ButtonText > span').click()
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
            //se valida header 
            cy.get(header).should('be.visible')
            }) })

            it.only('Validar sección hero',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var hero = new_website.seguimiento_hero
              var texto_hero = new_website.seguimiento_hero_texto
              var boton_hero = new_website.seguimiento_hero_boton
              var imagen_hero = new_website.seguimiento_hero_imagen
            //se valida hero
            cy.get(hero).should('be.visible')
            cy.get(texto_hero).should('be.visible')//valida texto hero
            cy.get(boton_hero).should('be.visible')//valida botón hero
            cy.get(imagen_hero).should('be.visible')//valida gif del hero
            cy.scrollTo('center')
            }) })

            it.only('Validar sección revisiones frecuentes',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var revisiones = new_website.seguimiento_revisiones
              var imagen_revisiones = new_website.seguimiento_revisiones_imagen
              var texto_revisiones = new_website.seguimiento_revisiones_texto
            //valida revisiones frecuentes
            cy.get(revisiones).should('be.visible')
            cy.get(imagen_revisiones).should('be.visible')//valida imagen de la sección
            cy.get(texto_revisiones).should('be.visible')//valida texto de la sección
            cy.scrollTo('bottom')
            cy.scrollTo('center')
            }) })

            it.only('Validar sección estamos donde tu estas',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var estamos = new_website.seguimiento_estamos
              var texto_estamos = new_website.seguimiento_estamos_texto
              var imagen_estamos = new_website.seguimiento_estamos_imagen
            //valida estamos donde tu estas
            cy.get(estamos).should('be.visible')
            cy.get(texto_estamos).should('be.visible')//se valida texto de la sección
            cy.get(imagen_estamos).should('be.visible')//se valida imagen de la sección
            }) })

            it.only('Validar sección garantía de sonrisa',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
             var garantia = new_website.seguimiento_garantia
             var fondo_garantia = new_website.seguimiento_garantia_fondo
             var texto_garantia = new_website.seguimiento_garantia_texto
             var boton_garantia = new_website.seguimiento_garantia_boton
            //valida garantía de sonrisa
            cy.get(garantia).should('be.visible')
            cy.get(fondo_garantia).should('be.visible')//se valida background de la seccion
            cy.get(texto_garantia).should('be.visible')//se valida texto de la sección
            cy.get(boton_garantia).should('be.visible')//se valida botón de la sección
            }) })

            it.only('Validar sección profesionales',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var profesionales = new_website.seguimiento_profesionales
              var texto_profesionales = new_website.seguimiento_profesionales_texto
              var boton_profesionales = new_website.seguimiento_profesionales_boton
            //valida diseñados y creados por profesionales
            cy.get(profesionales).should('be.visible')
            cy.get(texto_profesionales).should('be.visible')//se valida texto de la sección
            cy.get(boton_profesionales).should('be.visible')//valida botón de la sección
            }) })

            it.only('Validar sección footer',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var footer = new_website.footer
              var footer_frame = new_website.footer_frame
            //valida footer
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolSeguimiento);
            }) })
        });
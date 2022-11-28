describe('Página como funciona', function() {

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
           cy.get('[style="height: 88px; border-top: 1px solid rgb(189, 189, 189);"] > :nth-child(1)').click()
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
            cy.get(header)
              }) })
            
            it.only('Validar sección hero',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var hero = new_website.funciona_hero
              var hero_texto = new_website.funciona_hero_texto
              var hero_boton = new_website.funciona_hero_boton
              var hero_imagen = new_website.funciona_hero_imagen
            //valida hero
            cy.get(hero).should('be.visible')
            cy.get(hero_texto).should('be.visible')//valida texto de la sección
            cy.get(hero_boton).should('be.visible')//valida botón de la sección
            cy.get(hero_imagen).should('be.visible')//valida imagen de la sección
            }) })

            it.only('Validar sección tu nueva sonrisa',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var paso = new_website.funciona_paso
              var paso_titulo = new_website.funciona_paso_titulo
              var paso_columna1 = new_website.funciona_paso_columna1
              var paso_columna2 = new_website.funciona_paso_columna2
              var paso_columna3 = new_website.funciona_paso_columna3
              var paso_columna4 = new_website.funciona_paso_columna4
              var paso_columna5 = new_website.funciona_paso_columna5
              var paso_boton = new_website.funciona_paso_boton
            //valida tu nueva sonrisa paso a paso
            cy.get(paso).should('be.visible')
            cy.get(paso_titulo).should('be.visible')//valida título de la sección
            cy.get(paso_columna1).should('be.visible')//valida imagen, subtitulo y texto de la columna 1
            cy.get(paso_columna2).should('be.visible')//valida imagen, subtitulo y texto de la columna 2
            cy.get(paso_columna3).should('be.visible')//valida imagen, subtitulo y texto de la columna 3
            cy.get('.tablet_Next__2StM5 > .material-icons').click();
            cy.get(paso_columna4).should('be.visible')//valida imagen, subtitulo y texto de la columna 4
            cy.get('.tablet_Next__2StM5 > .material-icons').click();
            cy.get(paso_columna5).should('be.visible')//valida imagen, subtitulo y texto de la columna 5
            cy.get(paso_boton).should('be.visible')//valida botón de la sección
            }) })

            it.only('Validar sección garantia de sonrisa',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var garantia = new_website.funciona_garantia
              var garantia_fondo = new_website.funciona_garantia_fondo
              var garantia_texto = new_website.funciona_garantia_texto
              var garantia_boton = new_website.funciona_garantia_boton
            //valida garantía de sonrisa
            cy.scrollTo('bottom')
            cy.get(garantia).should('be.visible')
            cy.get(garantia_fondo).should('be.visible')//se valida background de la seccion
            cy.get(garantia_texto).should('be.visible')//se valida texto de la sección
            cy.get(garantia_boton).should('be.visible')//se valida botón de la sección
            }) })

            it.only('Validar sección cita 30 minutos',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var cita = new_website.funciona_cita
              var cita_imagen = new_website.funciona_cita_imagen
              var cita_texto = new_website.funciona_cita_texto
              var cita_boton = new_website.funciona_cita_boton
              var cita_botonvideo = new_website.funciona_cita_botonvideo
            //valida tu cita de solo 30 minutos
            cy.get(cita).should('be.visible')//valida tu cita de solo 30 minutos
            cy.get(cita_imagen).should('be.visible')//valida imagen de la sección
            cy.get(cita_texto).should('be.visible')//valida texto de la sección
            cy.get(cita_boton).should('be.visible')//valida botón de agenda tu cita
            cy.get(cita_botonvideo).should('be.visible')//valida botón de video 
            }) })

            it.only('Validar sección cómodo y sin dolor',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var comodo = new_website.funciona_comodo
              var comodo_texto = new_website.funciona_comodo_texto
              var comodo_imagen = new_website.funciona_comodo_imagen
              var comodo_boton = new_website.funciona_comodo_boton
            //valida rápido, cómodo y sin dolor
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(comodo).should('be.visible')
            cy.get(comodo_texto).should('be.visible')//se valida texto de la sección
            cy.get(comodo_imagen).should('be.visible')//se valida imagen de la sección
            cy.get(comodo_boton).should('be.visible')//se valida Conoce más de la sección
            }) })

            it.only('Validar sección nuestros números hablan por si solos',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var numeros = new_website.funciona_numeros
              var numeros_texto = new_website.funciona_numeros_texto
              var numeros_subtexto = new_website.funciona_numeros_subtexto
            //valida nuestros numeros hablan por si solos
            cy.get(numeros).should('be.visible')
            cy.get(numeros_texto).should('be.visible')//se valida texto de la sección
            cy.get(numeros_subtexto).should('be.visible')//se valida subtextos de la sección
            }) })

            it.only('Validar sección nuestros diseñados y creados por profesionales',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var profesionales = new_website.funciona_profesionales
              var profesionales_titulo = new_website.funciona_profesionales_titulo
              var profesionales_texto = new_website.funciona_profesionales_texto
              var profesionales_boton = new_website.funciona_profesionales_boton
              var profesionales_frame = new_website.funciona_profesionales_frame
            //valida sección Diseñados y creados por profesionales 
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(profesionales).should('be.visible')
            cy.get(profesionales_titulo).should('be.visible')//valida título de la sección
            cy.get(profesionales_texto).should('be.visible')//valida texto de la sección
            cy.get(profesionales_boton).should('be.visible')//valida botón de la sección
            cy.get(profesionales_frame).should('be.visible')//valida contenedor de imagenes de la sección
            }) })

            it.only('Validar sección footer',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
             var footer = new_website.footer
             var footer_frame = new_website.footer_frame
            //valida footer
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolFunciona);
          })
        });
      })
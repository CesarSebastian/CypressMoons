describe('Página Alineadores', function() {

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
            cy.get(header).should('be.visible')
            }) })

            it.only('Validar sección hero',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var hero = new_website.alineadores_hero
              var hero_texto = new_website.alineadores_hero_texto
              var hero_imagen = new_website.alineadores_hero_imagen
              var hero_boton = new_website.alineadores_hero_boton
            //valida hero alineadores invisibles 
            cy.get(hero).should('be.visible')
            cy.get(hero_texto).should('be.visible')//valida texto del hero
            cy.get(hero_imagen).should('be.visible')//valida imagen del hero
            cy.get(hero_boton).should('be.visible')//valida botón del hero
            }) })

            it.only('Validar sección amor a primera vista',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var primera = new_website.alineadores_primera
              var primera_texto = new_website.alineadores_primera_texto
              var primera_imagen = new_website.alineadores_primera_imagen
            //valida amor a primera vista 
            cy.scrollTo('center')
            cy.get(primera).should('be.visible')
            cy.get(primera_texto).should('be.visible')//valida texto de título
            cy.get(primera_imagen).should('be.visible')//valida texto e imagenes del carrusel
            }) })

            it.only('Validar sección última tecnología',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var tecnologia = new_website.alineadores_tecnologia
              var tecnologia_video = new_website.alineadores_tecnologia_video
              var tecnologia_texto = new_website.alineadores_tecnologia_texto
            //valida la última tecnología
            cy.scrollTo('center')
            cy.get(tecnologia).should('be.visible')
            cy.get(tecnologia_video).should('be.visible')//valida video de la impresión en 3d
            cy.get(tecnologia_texto).should('be.visible')//valida texto de la sección
            }) })

            it.only('Validar sección tu sonrisa en 3D',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var sonrisa3d = new_website.alineadores_sonrisa3d
              var sonrisa3d_imagen = new_website.alineadores_sonrisa3d_imagen
              var sonrisa3d_texto = new_website.alineadores_sonrisa3d_texto
            //valida tu sonrisa en 3d
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(sonrisa3d).should('be.visible')
            cy.get(sonrisa3d_imagen).should('be.visible')//valida imagen de la sección
            cy.get(sonrisa3d_texto).should('be.visible')//valida texto de la sección
            }) })

            it.only('Validar sección muchas razones para sonreír',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var razones = new_website.alineadores_razones
              var razones_titulo = new_website.alineadores_razones_titulo
              var razones_cont1 = new_website.alineadores_razones_contenido1
              var razones_cont2 = new_website.alineadores_razones_contenido2
              var razones_cont3 = new_website.alineadores_razones_contenido3
            //valida muchas razones para sonreir
            cy.get(razones).should('be.visible')
            cy.get(razones_titulo).should('be.visible')//valida título de la sección
            cy.get(razones_cont1).should('be.visible')//valida texto e imagen columna Moons
            cy.get(razones_cont2).should('be.visible')//valida texto e imagen columna Brackets
            cy.get(razones_cont3).should('be.visible')//valida texto e imagen columna Otros alineadores
            }) })

            it.only('Validar sección una caja miles de sonrisas',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var caja = new_website.alineadores_caja
              var caja_imagenes = new_website.alineadores_caja_imagenes
              var caja_frame = new_website.alineadores_caja_frame
              var caja_titulo = new_website.alineadores_caja_titulo
              var caja_subtitulo = new_website.alineadores_caja_subtitulo
            //valida una caja, miles de sonrisas
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(caja).should('be.visible')
            cy.get(caja_imagenes).should('be.visible')//valida imagenes de la sección
            cy.get(caja_frame).should('be.visible')
            cy.get(caja_titulo).should('be.visible')//valida título de la sección
            cy.get(caja_subtitulo).should('be.visible')
            }) })

            it.only('Validar sección casos cubiertos por moons',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var casos = new_website.alineadores_casos
              var casos_titulo = new_website.alineadores_casos_titulo
              var casos_imagenes = new_website.alineadores_casos_imagenes
              var casos_imagen = new_website.alineadores_casos_imagenes
              var casos_gif = new_website.alineadores_casos_gif
              var casos_alineadores = new_website.alineadores_casos_alineadores
              var casos_detalles = new_website.alineadores_casos_detalles
            //valida casos cubiertos por moons
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(casos).should('be.visible')
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(casos_titulo).should('be.visible')//valida título de la sección
            cy.get(casos_imagenes).should('be.visible')//valida imagenes de los casos cubiertos
            cy.get(casos_imagen).should('be.visible')//valida imagen de dentadura
            cy.get(casos_gif).should('be.visible')//valida gif de dentadura
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(casos_alineadores).should('be.visible')//valida imagen de alineadores
            cy.get(casos_detalles).should('be.visible')//valida texto de detalles de alineadores
            }) })

            it.only('Validar sección antes y despues',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var despues = new_website.alineadores_despues
            //valida antes y despues 
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(despues).should('be.visible')
            }) })

            it.only('Validar sección preguntas frecuentes',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var faq = new_website.alineadores_faq
              var faq_titulo = new_website.alineadores_faq_titulo
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
            cy.scrollTo('center')
            cy.scrollTo('bottom')
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolAlineadores);
            }) })
        });
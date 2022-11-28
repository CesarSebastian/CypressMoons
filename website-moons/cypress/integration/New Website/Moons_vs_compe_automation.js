describe('Moons vs competencia', function() {

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
              var hero = new_website.competencia_hero
              var hero_titulo = new_website.competencia_hero_titulo
              var hero_subtitulo = new_website.competencia_hero_subtitulo
              var hero_boton = new_website.competencia_hero_boton
              var hero_imagen = new_website.competencia_hero_imagen
            //valida hero 
            cy.get(hero).should('be.visible')
            cy.get(hero_titulo).should('be.visible')//valida título de la sección
            cy.get(hero_subtitulo).should('be.visible')//valida subtexto de la sección
            cy.get(hero_boton).should('be.visible')//valida botón de la sección
            cy.get(hero_imagen).should('be.visible')//valida imagen de la sección
            }) })

            it.only('Validar sección muchas razones para sonreír',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var razones = new_website.competencia_razones
              var razones_titulo = new_website.competencia_razones_titulo
              var razones_contenido1 = new_website.competencia_razones_contenido1
              var razones_contenido2 = new_website.competencia_razones_contenido2
              var razones_contenido3 = new_website.competencia_razones_contenido3
            //valida muchas razones para sonreir
            cy.get(razones).should('be.visible')
            cy.get(razones_titulo).should('be.visible')//valida título de la sección
            cy.get(razones_contenido1).should('be.visible')//valida texto e imagen columna Moons
            cy.get(razones_contenido2).should('be.visible')//valida texto e imagen columna Brackets
            cy.get(razones_contenido3).should('be.visible')//valida texto e imagen columna Otros alineadores
             }) })
            
            it.only('Validar sección antes y después',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var despues = new_website.competencia_despues
              var despues_titulo = new_website.competencia_despues_titulo
              var despues_titulo_boton = new_website.competencia_despues_boton
            //valida antes y despues 
            cy.get(despues).should('be.visible')
            cy.get(despues_titulo).should('be.visible')//valida titulo de sección
            cy.get(despues_titulo_boton).should('be.visible')//valida botón ver más resultados de la sección
            }) })

            it.only('Validar sección footer',function(){
            cy.fixture('elementos_new_website').then((new_website) =>{
              var footer = new_website.footer
              var footer_frame = new_website.footer_frame
            //valida footer
            cy.get(footer).should('be.visible')
            cy.get(footer_frame).should('be.visible')//valida footer sección de links
            cy.percySnapshot(this.env.SolCompetencia);
            }) })
        });
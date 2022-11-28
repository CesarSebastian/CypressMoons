describe.only('automation incidence moons os', function(){
    beforeEach(function(){
        cy.fixture('env_url')
          .then((url) => {
            this.url = url
          })
          cy.fixture('fixture_incidence/env_text.json')
          .then((text) => {
            this.text = text
          })
          cy.fixture('fixture_incidence/env_id.json')
          .then((id) => {
            this.id = id
          })
        Cypress.on('fail', (error, runnable) => {
            debugger
            throw error 
          })
    });
    //Upload Tickest 
    it.only('Upload Tickets HappyPath',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_dev+this.url.incidence)
        cy.wait(1000)
        cy.get(this.id.tickets_whit).should('be.visible')
        cy.wait(1000)
        cy.get(this.id.tickets_out).should('be.visible')
        cy.wait(1000)
    })
    it.only('Upload Tickets Incidence Empty',function(){
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(1000)
        cy.get(this.id.tickets_whit).then($ticket =>{
            if($ticket.is(':visible')){
                cy.log('isnt empty')
            }else{
                cy.log('is empty')
            }
        });
        cy.wait(1000)
        cy.get(this.id.tickets_out).then($ticket =>{
            if($ticket.is(':visible')){
                cy.log('isnt empty')
            }else{
                cy.log('is empty')
            }
        });
        cy.wait(1000)
    })
    //Filter Pais
    it.only('Filter Tickets HappyPath',function(){
        //
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(1000)
        cy.get(this.id.filter_incidence).click({force: true})
        cy.wait(1000)
        cy.get(this.id.filter.todos).click({force: true})
        cy.wait(1000)
        cy.get(this.id.tickets_whit).should('be.visible')
        cy.wait(1000)
        cy.get(this.id.tickets_out).should('be.visible')
        cy.wait(1000)
    })
    it.only('Filter Tickets Mexico',function(){
        //
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(1000)
        cy.get(this.id.filter_incidence).click({force: true})
        cy.wait(1000)
        cy.get(this.id.filter.mexico).click({force: true})
        cy.wait(1000)
        cy.get(this.id.tickets_whit).should('be.visible')
        cy.wait(1000)
        cy.get(this.id.tickets_out).should('be.visible')
        cy.wait(1000)
    })
    it.only('Filter Tickets Colombia',function(){
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(1000)
        cy.get(this.id.filter_incidence).click({force: true})
        cy.wait(1000)
        cy.get(this.id.filter.colombia).click({force: true})
        //convert in "or"
        cy.get('body').then($body =>{
            const tks_in = $body.find(this.id.tickets_with)
            const tks_out = $body.find(this.id.tickets_out)
            if(tks_in||tks_out){
                cy.log('Have tickets')
            }else{
                cy.log('Havent tickets')
            }
        })
        cy.wait(1000)
    })
    //Search Tickets
    it.only('Search Tickets HappyPath',function(){
        //
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(5000)
        cy.get(this.id.tickets_search).type("TESTDUIS53ZRT")
        cy.get(this.id.tickets_search).type('{enter}')
        cy.wait(5000)
        //falta id de la columna de respuesta
        //cy.get(".data-v-50d1546e").should('be.visible')
        cy.xpath("/html/body/div/div[1]/div[2]/div[2]/main/div/div[2]/div[3]/div[3]").should('be.visible')
    })
    it.only('Search Tickets Empty',function(){
        //
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(5000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(5000)
        cy.get(this.id.tickets_search).click();
        cy.get(this.id.tickets_search).type('{enter}')
        cy.wait(5000)

    })
    it.only('Search Tickets no exist',function(){
        //
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(5000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(5000)
        cy.get(this.id.tickets_search).type("$%")
        cy.wait(5000)
        cy.get(this.id.tickets_search).type('{enter}')
        cy.wait(1000)
        cy.contains(this.text.isnt_tickets)
    })
    //pagination Tickets
    it.only('pagination Tickets more five ticket',function(){
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(5000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(5000)
        //
        cy.get(this.id.tickets_out).its('length').should('eq',5)
    })
    it.only('pagination Tickets less five ticket',function(){
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(5000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(5000)
        //
        cy.get(this.id.tickets_whit).its('length').should('eq',5)
    })
    it.only('pagination Tickets next page',function(){
        //
        cy.login(   this.url.url_prod,
        this.url.email_prod,
        this.url.password_prod)
        cy.wait(5000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(5000)
        cy.get(this.id.next_page).click({ multiple: true })
    })
    it.only('pagination Tickets previous page',function(){
        //
        cy.login(   this.url.url_prod,
        this.url.email_prod,
        this.url.password_prod)
        cy.wait(5000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(5000)
        cy.get(this.id.next_page).click({ multiple: true })
        cy.wait(5000)
        cy.get(this.id.previous_page).click({ multiple: true })
    })
    it.only('pagination Tickets last page',function(){
        //
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(5000)
        cy.visit(this.url.url_prod+this.url.incidence)
        cy.wait(5000)
        //Mejorar (Platicar con Juanpa)
        cy.get(this.id.next_page).each(($btn) => {
            for(let i = 1; i <= 14; i+=1){
                if ($btn.is(":disabled")) {
                    return
                } else {
                    cy.wrap($btn).click()
                }
            }
        })         
        
    })
    it.only('pagination Tickets first page',function(){
        //
        cy.login(   this.url.url_prod,
            this.url.email_prod,
            this.url.password_prod)
        cy.wait(5000)
        cy.visit(this.url.url_pro+this.url.incidence)
        cy.wait(5000)
        cy.get(this.id.previous_page).then(($btn) => {
            if ($btn.is(":disabled")) {
              return
            } else {
              cy.log('Is active')
            }
        })
    })
})
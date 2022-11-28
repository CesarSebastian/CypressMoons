describe.only('automation cambiar severidad moons os', function(){
    beforeEach(function(){
        cy.fixture('env_url')
          .then((url) => {
            this.url = url
          })
        cy.fixture('fixture_adminPlanning/env_text')
          .then((text) => {
            this.text = text
          })
          cy.fixture('fixture_adminPlanning/env_id')
          .then((id) => {
            this.id = id
          })
        Cypress.on('fail', (error, runnable) => {
            debugger
            throw error 
          })
    });
    it.only('Happy Path - Leve',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('BU3EVKYsT')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.leve).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()

    })
    it.only('Happy Path - Moderado',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('BU3EVKYsT')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.moderado).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('Happy Path - Advanced',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('BU3EVKYsT')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.advanced).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('Happy Path is replanning - Leve',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('BU3EVKYsT')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.leve).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(2000)
        cy.get(this.id.checkbox_replanning).click()
        cy.wait(5000)
        cy.get(this.id.button_changes).click()

    })
    it.only('Happy Path is replanning - Moderado',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('BU3EVKYsT')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.moderado).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(2000)
        cy.get(this.id.checkbox_replanning).click()
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('Happy Path is replanning - Advanced',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('BU3EVKYsT')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.advanced).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(2000)
        cy.get(this.id.checkbox_replanning).click()
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('CustomerId null - Leve',function(){
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).should('be.empty')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.leve).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('CustomerId null  - Moderado',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).should('be.empty')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.moderado).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(2000)
        cy.get(this.id.button_changes).click()
    })
    it.only('CustomerId null  - Advanced',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).should('be.empty')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.advanced).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('CustomerId incorrect - Leve',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('XXXX111RRR')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.leve).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('CustomerId incorrect  - Moderado',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('XXXX111RRR')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.moderado).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('CustomerId incorrect  - Advanced',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('XXXX111RRR')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get(this.id.severidad.advanced).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    it.only('No selected severity',function(){
        //
        cy.login(   this.url.url_prod,
                    this.url.email_prod,
                    this.url.password_prod)
        cy.wait(2000)
        cy.visit(this.url.url_prod+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.text.severidad).should('be.visible').click()
        cy.wait(2000)
        cy.get(this.id.customerId_cs).click().type('BU3EVKYsT')
        cy.wait(2000)
        cy.get(this.id.selectseveridad).click()
        cy.wait(2000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.button_changes).click()
    })
    
})
describe.only('automation cambiar pool moons os', function(){
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
    it.only('Happy Path - Working',function(){
        //
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)
        cy.wait(2000)
        cy.visit(this.url.url_dev+this.url.admin_planning);
        cy.wait(5000)
        cy.get(this.id.customerId).click().type('62BC4BVN')
        cy.wait(1000)
        cy.get(this.id.pool).click({force: true})
        cy.wait(1000)
        cy.get(this.id.pools.delimitation).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(1000)
        cy.get(this.id.user).click({force: true})
        cy.wait(1000)
        cy.get(this.id.users.user).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.btn_cambiar).click()
        cy.wait(5000)
        cy.contains(this.text.upload_correct)
    })
    it.only('Happy Path - Waiting',function(){
        //
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)
        //
        cy.wait(5000)
        cy.visit(this.url.url_dev+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.id.customerId).click().type('62BC4BVN');
        cy.wait(1000)
        cy.get(this.id.pool).click({force: true})
        cy.wait(1000)
        cy.get(this.id.pools.waiting_delimitation).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.btn_cambiar).click()
        cy.wait(500)
        cy.contains(this.text.upload_correct)
    })
    it.only('Customer ID null - Working',function(){
        //
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)
        cy.wait(2000)
        cy.visit(this.url.url_dev+this.url.admin_planning);
        cy.wait(5000)
        cy.get(this.id.customerId).should('be.empty')
        cy.wait(1000)
        cy.get(this.id.pool).click({force: true})
        cy.wait(1000)
        cy.get(this.id.pools.delimitation).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(1000)
        cy.get(this.id.user).click({force: true})
        cy.wait(1000)
        cy.get(this.id.users.user).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.btn_cambiar).click()
        cy.wait(1000)
        cy.contains(this.text.customerid_required)
    })
    it.only('Customer ID null - Waiting',function(){
        //
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)
        //
        cy.wait(5000)
        cy.visit(this.url.url_dev+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.id.customerId).should('be.empty')
        cy.wait(1000)
        cy.get(this.id.pool).click({force: true})
        cy.wait(1000)
        cy.get(this.id.pools.waiting_delimitation).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.btn_cambiar).click()
        cy.wait(500)
        cy.contains(this.text.customerid_required)
    })
    it.only('No Select Pool - Waiting',function(){
        //
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)
        //
        cy.wait(5000)
        cy.visit(this.url.url_dev+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.id.customerId).type('62BC4BVN');
        cy.wait(1000)
        cy.get(this.id.pool).click({force: true})
        cy.wait(1000)
        
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.btn_cambiar).click()
        cy.wait(500)
        cy.contains(this.text.pool_required)
    })
    it.only('No Select Pool - Working',function(){
        //
        //
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)
        //
        cy.wait(5000)
        cy.visit(this.url.url_dev+this.url.admin_planning);
        cy.wait(2000)
        cy.get(this.id.customerId).type('62BC4BVN')
        cy.wait(1000)
        cy.get(this.id.pool).click({force: true})
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(1000)
        cy.get(this.id.user).should('not.exist')
        cy.wait(5000)
        cy.get(this.id.btn_cambiar).click()
        cy.wait(500)
        cy.contains(this.text.pool_required)
        
    })
    it.only('No Select User - Working',function(){
        //
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)
        cy.wait(2000)
        cy.visit(this.url.url_dev+this.url.admin_planning);
        cy.wait(5000)
        cy.get(this.id.customerId).click().type('62BC4BVN')
        cy.wait(1000)
        cy.get(this.id.pool).click({force: true})
        cy.wait(1000)
        cy.get(this.id.pools.delimitation).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(1000)
        cy.get(this.id.user).click({force: true})
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.btn_cambiar).click()
        cy.wait(1000)
        cy.contains(this.text.user_required)
    })
})
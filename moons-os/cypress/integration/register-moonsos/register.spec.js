describe.only('automation register moons os', function(){

    beforeEach(function(){
        cy.fixture('env_url')
          .then((url) => {
            this.url = url
          })
        cy.fixture('fixture_register/env_text')
          .then((text) => {
            this.text = text
          })
          cy.fixture('fixture_register/env_id')
          .then((id) => {
            this.id = id
          })
        Cypress.on('fail', (error, runnable) => {
            debugger
            throw error 
          })
    });

    //Suite Test Case 1 - Happy Path 
    it.only('Suite Test - Happy Path ',function(){
        cy.wait(2000);
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)

        cy.wait(5000);
        cy.visit(this.url.url_dev+this.url.register)
        cy.wait(5000);
        cy.get(this.id.name).click().type(userID_Alpha());
        cy.wait(1000)
        //funcion de mail random
        cy.get(this.id.email).type(userID_Alpha()+"@mymoons.mx")
        cy.wait(1000)
        cy.get(this.id.mattermost).type(userID_Alpha()+".testqa")
        cy.wait(1000)
        cy.get(this.id.role).click()
        cy.wait(1000)
        //Funcion Roles
        cy.get(this.id.roles.finance).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.registrar).click()
        cy.wait(1000)
        cy.clearCookies()
    })

    //Suite Test Case 2 - Name Null 
    it.only('Suite Test - Name Null', function(){
        cy.wait(2000);
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)

        cy.wait(2000);
        cy.visit(this.url.url_dev+this.url.register)
        cy.wait(2000);
        cy.get(this.id.name).should('have.value','');
        cy.wait(1000)
        //funcion de mail random
        cy.get(this.id.email).type(userID_Alpha()+"@mymoons.mx")
        cy.wait(1000)
        cy.get(this.id.mattermost).type(userID_Alpha()+".testqa")
        cy.wait(1000)
        cy.get(this.id.role).click()
        cy.wait(1000)
        //Funcion Roles
        cy.get(this.id.roles.finance).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.registrar).click()
        cy.wait(1000)
        cy.contains(this.text.name)
        cy.clearCookies()
    })

    //Suite Test Case 3 - Mail Null 
    it.only('Suite Test - Mail Null', function(){
        cy.wait(2000);
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)

        cy.wait(2000);
        cy.visit(this.url.url_dev+this.url.register)
        cy.wait(2000);
        cy.get(this.id.name).click().type(userID_Alpha());
        cy.wait(1000)
        //funcion de mail random
        cy.get(this.id.email).should('have.value','');
        cy.wait(1000)
        cy.get(this.id.mattermost).type(userID_Alpha()+".testqa")
        cy.wait(1000)
        cy.get(this.id.role).click()
        cy.wait(1000)
        //Funcion Roles
        cy.get(this.id.roles.finance).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.registrar).click()
        cy.wait(1000)
        cy.contains(this.text.email)
        cy.clearCookies()
    })

    //Suite Test Case 4 - Matter Null
    it.only('Suite Test - Matter Null', function(){
        cy.wait(2000);
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)

        cy.wait(2000);
        cy.visit(this.url.url_dev+this.url.register)
        cy.wait(2000);
        cy.get(this.id.name).click().type(userID_Alpha());
        cy.wait(1000)
        //funcion de mail random
        cy.get(this.id.email).type(userID_Alpha()+"@mymoons.mx")
        cy.wait(1000)
        cy.get(this.id.mattermost).should('have.value','');
        cy.wait(1000)
        cy.get(this.id.role).click()
        cy.wait(1000)
        //Funcion Roles
        cy.get(this.id.roles.finance).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.registrar).click()
        cy.wait(1000)
        cy.contains(this.text.mattermost)
        cy.clearCookies()
    })

    //Suite Test Case 5 - No Roles
    it.only('Suite Test - No Roles', function(){
        cy.wait(2000);
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)

        cy.wait(2000);
        cy.visit(this.url.url_dev+this.url.register)
        cy.wait(2000);
        cy.get(this.id.name).click().type(userID_Alpha());
        cy.wait(1000)
        //funcion de mail random
        cy.get(this.id.email).type(userID_Alpha()+"@mymoons.mx")
        cy.wait(1000)
        cy.get(this.id.mattermost).type(userID_Alpha()+".testqa")
        cy.wait(1000)
        //se comenta para que la acción no entre en funcion
        cy.get(this.id.role).click()
        cy.wait(1000)
        //Funcion Roles
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.registrar).click()
        cy.contains(this.text.role)
        cy.clearCookies()
    })

    //Suite Test Case 6 - Mail Invalid Format
    it.only('Suite Test - Mail Invalid Format', function(){
        cy.wait(2000);
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)

        cy.wait(2000);
        cy.visit(this.url.url_dev+this.url.register)
        cy.wait(2000);
        cy.get(this.id.name).click().type(userID_Alpha());
        cy.wait(1000)
        //funcion de mail random
        cy.get(this.id.email).type(userID_Alpha()+"mymoons.mx")
        cy.wait(1000)
        cy.get(this.id.mattermost).type(userID_Alpha()+".testqa")
        cy.wait(1000)
        cy.get(this.id.role).click()
        cy.wait(1000)
        //Funcion Roles
        cy.get(this.id.roles.finance).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.registrar).click()
        cy.wait(1000)
        cy.contains(this.text.emailNoValid)
        cy.clearCookies()
    })

    //Suite Test Case 7 - Mail Invalid Duplicate
    it.only('Suite Test - Mail Invalid Duplicate', function(){
        cy.wait(2000);
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)

        cy.wait(2000);
        cy.visit(this.url.url_dev+this.url.register)
        cy.wait(2000);
        cy.get(this.id.name).click().type(userID_Alpha());
        cy.wait(1000)
        //funcion de mail random
        cy.get(this.id.email).type("cesar.limon@mymoons.mx")
        cy.wait(1000)
        cy.get(this.id.mattermost).type(userID_Alpha()+".testqa")
        cy.wait(1000)
        cy.get(this.id.role).click()
        cy.wait(1000)
        //Funcion Roles
        cy.get(this.id.roles.finance).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.registrar).click()
        cy.wait(1000)
        cy.contains(this.text.userExist)
        cy.clearCookies()
    })

    //Suite Test Case - Mattermost Invalid
    it.only('Suite Test - Mattermost Invalid', function(){
        cy.wait(2000);
        cy.login(   this.url.url_dev,
                    this.url.email_dev,
                    this.url.password_dev)

        cy.wait(2000);
        cy.visit(this.url.url_dev+this.url.register)
        cy.wait(2000);
        cy.get(this.id.name).click().type(userID_Alpha());
        cy.wait(1000)
        //funcion de mail random
        cy.get(this.id.email).type(userID_Alpha()+"@mymoons.mx")
        cy.wait(1000)
        cy.get(this.id.mattermost).type("cesar.limon")
        cy.wait(1000)
        cy.get(this.id.role).click()
        cy.wait(1000)
        //Funcion Roles
        cy.get(this.id.roles.finance).click()
        cy.wait(1000)
        cy.get("body").type('{esc}')
        cy.wait(5000)
        cy.get(this.id.registrar).click()
        cy.wait(1000)
        cy.contains(this.text.userExist)
        cy.clearCookies()
    })

    function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }
})
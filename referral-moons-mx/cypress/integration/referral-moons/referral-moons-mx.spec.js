describe('Referral Moons MX',()=>{
    
    beforeEach(function(){
        cy.fixture('main').then((main)=>{
            this.main = main
        })
        cy.fixture('names')
            .then((names)=>{
            this.names = names
        })

        Cypress.on('fail', (error, runnable) => {
            debugger
            throw error 
        })
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
        })
    })
    it("Take Attributes",function(){
        cy.visit(this.main.url)
        cy.wait(1000)
        cy.get("#page-block-gci6zf1cqdc").should("be.visible")
        cy.get("#page-block-5kjl6ads1cp").should("be.visible")
        cy.get("#page-block-vr53225aekk").should("be.visible")
        cy.get("#page-block-e0rf0j15qgd").should("be.visible")
        cy.get("#page-block-fm86xtocpm").should("be.visible")
        cy.get("#page-block-5rb72wd2dw").should("be.visible")
        cy.get("#page-block-ixg48hbsz").should("be.visible")
        cy.get("#page-block-idziedhltr").should("be.visible")
        cy.wait(1000)   
        cy.percySnapshot(this.names.section_banner);
    })
})
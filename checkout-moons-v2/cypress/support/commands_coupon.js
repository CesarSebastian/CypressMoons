Cypress.Commands.add("VisitPageCoupon", (pageWeb) =>{
    
    cy.visit(pageWeb);
    
}
)
Cypress.Commands.add("ValidateCoupon",(valueCoupon)=>{

    cy.get("#total_price").then(($result)=>{
        //OC = Out Coupon
        var priceOC = $result.get(0).innerText;
        priceOC = priceOC.replace(/,/g,'');
        priceOC = parseFloat(priceOC.replace('$',""));

        cy.AddCoupon(valueCoupon);

        ///
        debugger
        cy.get("#total_price").then(($nextPrice)=>{
            //WC = With Coupon
            var priceWC = $nextPrice.get(0).innerText;
            priceWC = priceWC.replace(/,/g,'');
            priceWC = parseFloat(priceWC.replace('$',""));
            //Validacion para cupon valido o no 
            cy.ValidateCouponInvalide();

            debugger
            if(priceOC!=priceWC){
                console.log("Pasa "+priceWC+" es el total del descuento");

                cy.log("Pasa "+priceWC+" es el total del descuento")
            }else{
                console.log("No pasa "+priceWC+" es el total del descuento");

                cy.log("No hubo descuento de "+priceOC+" contra "+priceWC)
            }
            debugger
        })

    })
    
    

});
Cypress.Commands.add("AddCoupon",(valueCoupon)=>{
    cy.get(".Coupon_AddCupon__2-rZO").click();

    cy.get("#coupon").type(valueCoupon);

    cy.get(".Coupon_Rectangle__O3jfV").click();
    //Timeout se creo para que el sistema agregara el cupon
    cy.wait(2000); 
})
Cypress.Commands.add("ValidateCouponInvalide",()=>{
    cy.get("body").then($body => {
        if ($body.find(".FormGroup_ErrorMessage__3ycub").length > 0) {
            cy.log("El cupon colocado es un cupon invalido");
        }else{
            cy.log("Cupon valido. El proceso sigue");
        }
    });
})
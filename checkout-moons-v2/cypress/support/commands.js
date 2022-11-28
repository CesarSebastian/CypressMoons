// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const { expect } = require("chai");

Cypress.Commands.add("VisitPage", (pageWeb) =>{
    
    cy.visit(pageWeb);
    
}
);
Cypress.Commands.add("ShippingAddress",(street,interiorNumber,zipCode,colony,state,city,reference)=>{
    cy.get('#street')
      .type(street)
    cy.get('#interiorNumber')
      .type(interiorNumber)
    cy.get('#zipCode')
      .type(zipCode)
    cy.get('#colony')
      .type(colony)
    cy.get('#state')
      .type(state)
    cy.get('#city')
      .type(city)
    cy.get('#reference')
      .type(reference)
});
Cypress.Commands.add("PaymentMethod",(cardName,cardIDMexico,month,year,cvc)=>{
    cy.get('#cardName')
      .type(cardName)
    cy.get('#cardID')
      .type(cardIDMexico)
    cy.get('#month')  
      .type(month)
    cy.get('#year')
      .type(year)  
    cy.get('#cvc')
      .type(cvc)

});
Cypress.Commands.add("CallInstallment",()=>{
  cy.get("body").then($body =>{
    if($body.find("#installments-selector").length > 0){
      cy.get("#installments-selector").click();
    }else{
      cy.get("#installments-selector-two").click();
    }
  })
})

Cypress.Commands.add("ValitadeMSI",(months)=>{

  cy.CallInstallment();

  if(months==0){
    cy.get("ul [role='menuitem']:nth-of-type(1)").click()  
  }else if(months==3){
    cy.get("ul [role='menuitem']:nth-of-type(2)").click()
  }else if(months==6){
    cy.get("ul [role='menuitem']:nth-of-type(3)").click()
  }else if(months==9){
    cy.get("ul [role='menuitem']:nth-of-type(4)").click()
  }else if(months==12){
    cy.get("ul [role='menuitem']:nth-of-type(5)").click()
  }else if(months==18){
    cy.get("ul [role='menuitem']:nth-of-type(6)").click()
  }else{

  }
});

Cypress.Commands.add("SelectCard",()=>{
  cy.get('.PaymentSelector1_TextTema__3XYeX')
    .click()
  cy.get('#card')
    .click()
})

Cypress.Commands.add("ButtonClick",(containButton)=>{
  cy.contains(containButton).click();
});

Cypress.Commands.add("ContainsText",(containText)=>{
  cy.contains(containText);
});

Cypress.Commands.add("ValitadeText",(textValid)=>{
  cy.contains(textValid).should("exist");
});

Cypress.Commands.add("ClearShippingA",()=>{
  cy.get('#street')
  .clear()
  cy.get('#interiorNumber')
  .clear()
  cy.get('#zipCode')
  .clear()
  cy.get('#colony')
  .clear()
  cy.get('#state')
  .clear()
  cy.get('#city')
  .clear()
  cy.get('#reference')
  .clear()
})

Cypress.Commands.add("ValidateNoZero",(thisTotal)=>{
  if(thisTotal != "$0.00"){
    const logText = Cypress.console.log("");
  }
});

Cypress.Commands.add("ValidateExistCoupon",(boolean)=>{
    if(boolean){
        cy.get(".Coupon_AddCupon__2-rZO").should("exist");
    }else{
        cy.get(".Coupon_AddCupon__2-rZO").should("not.exist");
    }
})

Cypress.Commands.add("AddNewCoupon",(valueCoupon)=>{
  cy.xpath("//*[@id='root']/div/div[3]/div[2]/div/div[3]/div[1]").should("exist").click();

  cy.get("#coupon").type(valueCoupon);

  cy.xpath("/html//div[@id='root']/div[@class='Checkout_Container__3sJBf']/div[@class='Checkout_Left__1Njb1']//div[@class='Coupon_Wrapper__Zk8dX']/div[@role='button']").click();

  cy.xpath("/html//div[@id='root']/div[@class='Checkout_Container__3sJBf']/div[@class='Checkout_Left__1Njb1']//div[@class='Coupon_TextCoupon__1EPZr']").should("exist");
});

Cypress.Commands.add("ValidateCodeConfirmation",(text)=>{
  cy.contains(text);
    cy.get(".SuccessCardTwo_TransactionId__1GN_E").should("not.be.empty")
})

Cypress.Commands.add("CompareFinalPrice",(months)=>{
    const firstPrice = cy.xpath("/html//div[@id='root']/div[@class='Shell_Container__2Lvok']/div[@class='Checkout_Container__3sJBf']//p[@class='ProductInformation_TextItemBold__2aKYX ProductInformation_TotalNumber__2y-R5']").invoke("text");

    cy.ValitadeMSI(months);

    cy.xpath("/html//div[@id='root']/div[@class='Shell_Container__2Lvok']/div[@class='Checkout_Container__3sJBf']//p[@class='ProductInformation_TextItemBold__2aKYX ProductInformation_TotalNumber__2y-R5']").should("not.have.text",firstPrice);
    
})

  Cypress.Commands.add("ConvertNumber",(months)=>{

    cy.get('#total_price').then(($result)=>{
      
      var priceWoI = $result.get(0).innerText;

      priceWoI = priceWoI.replace(/,/g,'');

      priceWoI = parseFloat(priceWoI.replace('$',""));

      cy.ValitadeMSI(months);
      
      var percentage = "";

      if(months=="3"){
        percentage = ".05";
      }else if(months=="6"){
          percentage = "0.075";
      }else if(months=="9"){
          percentage = "0.10";
      }else if(months=="12"){
          percentage = "0.1250";
      }else if(months==18){
          percentage = "0.1850";
      }

      percentage = parseFloat(percentage);

      debugger
      cy.get('#total_price').then(($finalprice)=>{
        
        var priceWI = $finalprice.get(0).innerText;

        priceWI = priceWI.replace(/,/g,'');

        priceWI = parseFloat(priceWI.replace('$',""));
        
        priceWoI = (priceWoI*percentage)+priceWoI ;

        if(priceWI==priceWoI){
          console.log("Paso "+priceWI+" es igual a "+priceWoI);

          cy.log("Paso "+priceWI+" es igual a "+priceWoI);
        }else{
          console.log("No paso "+priceWI+" no es igual a "+priceWoI);
          //Error 
          Cypress.log("El precio no corresponde al real, ya que "+priceWI+" no corresponde al mostrado: "+priceWoI);
        }
        debugger

      })
  })
  
  

})
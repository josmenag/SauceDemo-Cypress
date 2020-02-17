/// <reference types="cypress" />
class InventoryPage{
    
   clickMenuBar(){
    cy.get('.bm-burger-button > button').click()
   }
      

}

export default InventoryPage
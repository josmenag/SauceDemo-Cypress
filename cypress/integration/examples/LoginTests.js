/// <reference types= "Cypress"/>

import LoginPage from '../page objects/LoginPage'
import InventoryPage from '../page objects/InventoryPage'

describe('Test Suite', ()=>{

    it('Valid Login Test', ()=>{
        const loginPage = new LoginPage()
        loginPage.successfulLogin('standard_user','secret_sauce')

        cy.url().should('be.equal','https://www.saucedemo.com/inventory.html')



    })


    it.skip('Invalid Login Test', ()=>{
        const loginPage = new LoginPage()
        loginPage.navigate()
        loginPage.enterUsername('invalid_user')
        loginPage.enterPassword('secret_sauce')
        loginPage.clickLoginButton()

        const errorMessage = cy.get('[data-test=error]')
        errorMessage.should('exist')
    })


    it('should click on an inventory item',()=>{
        const inventoryPage = new InventoryPage()
        inventoryPage.clickAddToCart(1)
    })

    it('should open burger menu',()=>{
        const inventoryPage = new InventoryPage()
        inventoryPage.clickMenuBar()
    })


})
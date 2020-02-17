/// <reference types="cypress" />
import InventoryPage from '../page objects/InventoryPage'


class LoginPage{

    navigate() {
        cy.visit('https://www.saucedemo.com/')
    }

    enterUsername(value){
        const username = cy.get('[data-test=username]')
        username.clear()
        username.type(value)
        return this
    }

    enterPassword(value){
        const passwordField = cy.get('[id=password]')
        passwordField.clear()
        passwordField.type(value)
        return this
    }

    clickLoginButton(){
        cy.get('[type=submit]').click()
        var inventoryPage = new InventoryPage()
        return inventoryPage
    }

    successfulLogin(username, password){
        this.navigate()
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLoginButton()
    }

}

export default LoginPage
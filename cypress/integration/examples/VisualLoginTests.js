/// <reference types= "Cypress"/>
import LoginPage from '../page objects/LoginPage'


describe('SauceDemo Login Visual Validation', ()=>{
    const loginPage = new LoginPage()

    before(()=> loginPage.navigate())

    beforeEach(()=> cy.eyesOpen({appName: 'SauceDemo', batchName: 'SauceDemo'}))
    afterEach(()=>cy.eyesClose())
    
    it('login page should look good', ()=>{
        cy.eyesCheckWindow('Empty Login Page')
       
        loginPage.enterUsername('standard_user')
        loginPage.enterPassword('secret_sauce')
        loginPage.clickLoginButton()

        cy.eyesCheckWindow("Succesful Login!")

    })







})
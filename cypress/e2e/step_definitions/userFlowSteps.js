import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/HomePage";
import LoginPage from "../../support/pages/LoginPage";
import AdminPage from "../../support/pages/AdminPage"

const url= Cypress.config().baseUrl;
const homePage= new HomePage();
const loginPage= new LoginPage();
const adminPage=new AdminPage();

Given('user opens orangehrmlive website', ()=>{
    cy.visit(url);
});
When('user login with valid credentials',()=>{
    loginPage.validateHomePage();
    loginPage.fillLoginInputs();

});
When('user navigate to Admin tab from the left side menu',()=>{
    homePage.getAdminTab();

});
When('user get the number of records found',()=>{

adminPage.getRecordsNumber();
});
When('user click on add button and fill new record form',()=>{
    adminPage.createNewRecord();

})
Then('validate that the number of records {string} by one',(action)=>{

    adminPage.validateNumberOfUsers(action);
});
When('user search with new username',()=>{
adminPage.searchByUserName();

});
When('user deletes the selected username',()=>{
    adminPage.deleteNewUser();

});
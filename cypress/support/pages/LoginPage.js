class LoginPage{


    userNameLocator='input[class="oxd-input oxd-input--active"][name="username"]';
    passwordLocator='input[class="oxd-input oxd-input--active"][name="password"]';
    loginButton='button[type="submit"]';
    companyBranding='[class="orangehrm-login-branding"]';

    validateHomePage()
    {
        cy.get(this.companyBranding).should('be.visible');
    }
    fillLoginInputs(){
        cy.readFile("cypress/fixtures/loginCredentials.json").then(loginData =>{
            cy.get(this.userNameLocator).type(loginData.username);
            cy.get(this.passwordLocator).type(loginData.password);
            cy.get(this.loginButton).click();
        })
    }
}
export default LoginPage;
class AdminPage {
    recordsNumber = '[class="orangehrm-horizontal-padding orangehrm-vertical-padding"] [class="oxd-text oxd-text--span"]'
    addButton = 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]';
    dropDownList = '.oxd-select-dropdown';
    userRole = '[class="oxd-select-text-input"]';
    employeeName = '[class="oxd-autocomplete-text-input oxd-autocomplete-text-input--active"]';
    employeeNameListBox = '//div[@role="listbox"]';
    userName = '//label[text()="Username"]/../../div/input';
    Password = '//label[text()="Password"]/../../div/input';
    confirmPassword = '//label[text()="Confirm Password"]/../../div/input';
    submitButton = 'button[type="submit"]';
    deleteButton='[class="oxd-icon bi-trash"]';
    confirmDeletion='[class="oxd-icon bi-trash oxd-button-icon"]';
    resetButton='[class="oxd-button oxd-button--medium oxd-button--ghost"]';


    getRecordsNumber() {
        cy.get(this.recordsNumber).invoke('text').then((text) => {
            const recordsNumber = parseInt(text.match(/\d+/), 10);
            cy.log(recordsNumber);
            cy.wrap(recordsNumber).as("recordsNumber")

        });
    }

    createNewRecord() {
        cy.readFile("cypress/fixtures/loginDetails.json").then(loginDetailsData => {
            cy.wrap(loginDetailsData.userName).as('newUserName');
            cy.get(this.addButton).click();
            cy.get(this.userRole).eq(0).click();
            cy.get(this.dropDownList).contains(loginDetailsData.userRole).click();
            cy.get(this.employeeName).type(loginDetailsData.employeeName);
            cy.xpath(this.employeeNameListBox).contains(loginDetailsData.employeeName).click();
            cy.get(this.userRole).eq(1).click();
            cy.get(this.dropDownList).contains(loginDetailsData.status).click();
            cy.xpath(this.userName).type(loginDetailsData.userName);
            cy.xpath(this.Password).type(loginDetailsData.password);
            cy.xpath(this.confirmPassword).type(loginDetailsData.password);
            cy.get(this.submitButton).click();


        });
    }
    validateNumberOfUsers(action){
        if(action==='increased'){
            cy.get('@recordsNumber').then((numberOfUsers)=>{
                cy.get(this.recordsNumber).invoke('text').then((text) => {
                    const   newRecordNumber = parseInt(text.match(/\d+/), 10);
                    cy.wrap(newRecordNumber).as('recordsNumber');
                    expect(newRecordNumber).to.be.equal(numberOfUsers+1)
                });
            });
        }
        else{
            cy.get(this.resetButton).click();
            cy.get('@recordsNumber').then((numberOfUsers)=>{
                cy.get(this.recordsNumber).invoke('text').then((text) => {
                    const   newRecordNumber = parseInt(text.match(/\d+/), 10);
                    expect(newRecordNumber).to.be.equal(numberOfUsers-1)
                });
            });

        }
        
    }
    searchByUserName(){
        cy.get('@newUserName').then((userName)=>{
            cy.xpath(this.userName).type(userName);
            cy.get(this.submitButton).click();

        })
    }
deleteNewUser(){
    cy.get(this.deleteButton).click();
    cy.get(this.confirmDeletion).click();
}


}
export default AdminPage
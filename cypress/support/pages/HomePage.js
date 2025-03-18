class HomePage{

    adminTab='[class="oxd-text oxd-text--span oxd-main-menu-item--name"]';


    getAdminTab(){
        cy.get(this.adminTab).contains('Admin').click();
    }


}
export default HomePage;
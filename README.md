
Automation Part:

1. Cypress framework and Cucumber as a BDD tool are used to implement UI login for 'https://opensource-demo.orangehrmlive.com/' website.
2. Under e2e package two folders have been created:
   1. The first one is 'features' which contains all the feature files.
   2. The second one is 'step_definitions' which contains all the step definitions js files.
3. POM (page object model) is used as a design pattern: under the support package, pages folder is created contains all the page classes for the user flow scenario.   
4. faker library is used to generate random registration data for the login and create user scenario: under the support package, utilities folder is created contains fakerUtlity.js class to generate the random data.
5. A Json data file will be generated under Fixtures package before each test case run (beforeEach hook is used in e2e.js to do this).
Feature: automation excercise for create and delete user feature

        Scenario:Login in with valid credentials to create and delete user
            Given user opens orangehrmlive website
             When user login with valid credentials
              And user navigate to Admin tab from the left side menu
              And user get the number of records found
              And user click on add button and fill new record form
             Then validate that the number of records 'increased' by one
             When user search with new username
              And user deletes the selected username
             Then validate that the number of records 'decreased' by one

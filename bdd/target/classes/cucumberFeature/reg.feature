Feature: Registration

Scenario: User should be able to signup successfully

Given I render the widget
When I click on signin
And I click on registration
Then I should be able to see the sign up form
And I should be allow to populate the fiels successfully
Then I should see a Thank you message


Scenario: User should be able to sign in

Given I render the widget
When I click on signin
And I enter my username and password
Then I should be able to sign in successfully
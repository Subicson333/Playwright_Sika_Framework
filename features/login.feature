Feature: Login to the Internet Herokuapp
  As a user
  I want to login to the Internet Herokuapp
  So that I can access the secure area

Scenario: Navigate to secure page after successful login
  Given I navigate to the login page
  When I enter "tomsmith" in the Username field
  And I enter "SuperSecretPassword!" in the Password field
  And I click the Login button
  Then I should see the Secure Area
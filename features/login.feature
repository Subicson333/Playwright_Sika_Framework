Feature: Login to the Internet Herokuapp

  Scenario: Navigate to secure page after successful login
    Given I navigate to "https://the-internet.herokuapp.com/login"
    When I enter "tomsmith" in the "Username" field
    And I enter "SuperSecretPassword!" in the "Password" field
    And I click the "Login" button
    Then I should see "Secure Area"
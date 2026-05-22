Feature: Login to the Internet Herokuapp

  Scenario: Navigate to secure page after successful login
    Given I navigate to the login page
    When I enter username "tomsmith"
    And I enter password "SuperSecretPassword!"
    And I click the login button
    Then I should see the secure area

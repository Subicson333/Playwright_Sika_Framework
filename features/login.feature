Feature: SauceDemo Login

  Scenario: Successful Login
    Given navigate to saucedemo.com
    When type "standard_user" in the username field
    And type "secret_sauce" in the password field
    And click on the login button
    Then should catalog page displayed

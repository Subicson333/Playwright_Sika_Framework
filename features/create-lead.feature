Feature: Create Lead Functionality

  @createLead
  Scenario: Create a new lead successfully
    Given I navigate to "https://leaftaps.com/opentaps/control/login"
    When I type "DemoCSR2" into "Username"
    And I type "crmsfa" into "Password"

Feature: Qase tests

  Scenario: Quase - login
    Given User is on Qase Login page
    When User enters his credentials and click Login
    Then User should see Qase home page

  Scenario: Quase - create a new project
    Given User is on Qase Login page
    When User enters his credentials and click Login
    Then User should see Qase home page
    When User clicks on Create new project button
    And User populates new project details and submits
    Then a new project should be created
    Then a new project is deleted
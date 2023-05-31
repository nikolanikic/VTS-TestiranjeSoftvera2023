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

  Scenario Outline: Quase - create new suite and test case
    Given User is on Qase Login page
    When User enters his credentials and click Login
    Then User should see Qase home page
    When User clicks on Create new project button
    And User creates new project details and submits
      | projectName   | projectCode   | projectDescription   |
      | <projectName> | <projectCode> | <projectDescription> |
    Then a new project should be created
    Given User opens "<projectName>" project
    Then a new project is deleted

    Examples:
      | projectName        | projectCode | projectDescription |
      | TestProject nn_000 | 000         | VTS 2023 Vezbe     |

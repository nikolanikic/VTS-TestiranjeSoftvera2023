Feature: Qase tests

  Scenario: Quase-login
    Given User in on Qase login page
    When User enters his credentials and click Login button
    Then User should see Qase home page


  Scenario: Quase-create a new project
    Given User in on Qase login page
    When User enters his credentials and click Login button
    Then User should see Qase home page
    When User clicks on Create new project button
    And User populates new project details and submits
    Then A new project should be created
    Then A new project is deleted
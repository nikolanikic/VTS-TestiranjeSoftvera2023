Feature: Qase tests

  # Scenario: Quase-login
  #   Given User in on Qase login page
  #   When User enters his credentials and click Login button
  #   Then User should see Qase home page


  # Scenario: Quase-create a new project
  #   Given User in on Qase login page
  #   When User enters his credentials and click Login button
  #   Then User should see Qase home page
  #   When User clicks on Create new project button
  #   And User populates new project details and submits
  #   Then A new project should be created
  #   Then A new project is deleted

  # Scenario Outline: Quase-create new suite and test case
  #   Given User in on Qase login page
  #   When User enters his credentials and click Login button
  #   Then User should see Qase home page
  #   When User clicks on Create new project button
  #   And User populates new project details and submits
  #   Then A new project should be created
  #   Given User opens 'TestProject sv_005' project
  #   Then A new project is deleted

  #   Examples:
  #     | projectName        | projectCode | projectDescription |
  #     | TestProject sv_005 | Value 2     | Value 3            |

  Scenario: Quase-create a new project
    Given User in on Qase login page
    When User enters his credentials and click Login button
    Then User should see Qase home page
    When User clicks on Create new project button
    And User populates new project details and submits
    Then A new project should be created
    When User open project
    And User populate suite
    And User Populate case
    And Verify suite and case
    Then A new project is deleted
Feature: Qase tests

# Scenario: Qase-login
  #   Given User in on Qase login page
  #   When User enters his credentials and click Login button
  #   Then User should see Qase home page


  # Scenario: Qase-create a new project
  #   Given User in on Qase login page
  #   When User enters his credentials and click Login button
  #   Then User should see Qase home page
  #   When User clicks on Create new project button
  #   And User populates new project details and submits
  #   Then A new project should be created
  #   Then A new project is deleted

  # Scenario Outline: Qase-create new suite and test case
  #   Given User in on Qase login page
  #   When User enters his credentials and click Login button
  #   Then User should see Qase home page
  #   When User clicks on Create new project button
  #   And User populates new project details and submits
  #   Then A new project should be created
  #   Given User opens 'TestProject aa_038' project
  #   Then A new project is deleted
  #   Examples:
  #     | projectName        | projectCode | projectDescription |
  #     | TestProject aa_038 | Value 2     | Value 3            |

Scenario: Qase-create a new project
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
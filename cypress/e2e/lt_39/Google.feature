Feature: Random Examples

  Scenario: Opening a search engine page
    Given I open Google page
    Then I can see Gmail link


  Scenario Outline: Convert
    Given I open Google page
    Then I can see Gmail link
    When I search rsd to eur
    When I enter <original> for original currency
    Then I should get 1.71 in new currency

    Examples:
        | original |
        |    200   |
        |    220   |
        |    250   |
        |    350   |
  Feature: satsumas search on Willys"
    Willys should be able to deliver relevant
    search result when searching for "satsumas"

  Scenario: Searching and pressing the search buttons
    Given that I am on "https://www.willys.se"
    When I enter "satsumas" in the search box
    And press the enter key
    Then I should get a search result
    And the search result should contain the correct product
 


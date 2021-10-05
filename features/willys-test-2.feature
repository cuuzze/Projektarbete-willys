Feature: Finding more info about a product
  As a user i want to be able to click on a
  product that i can find out more information about it

  Scenario: Searching for and clicking on an item
    Given that I am on "https://www.willys.se"
    When I enter "satsumas" in the search box
    And I press ENTER
    Then I should get a search result
    And I should be able to click on the product
    And I should be able to se detail information about chosen product
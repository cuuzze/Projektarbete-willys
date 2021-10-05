Feature: Finding more info about a product
  As a user I want to be able to click on a
  product so that I can find out more information about it

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy

  Scenario: Searching for and clicking on an item
    Given that I enter "satsumas" in the search box
    When I press ENTER
    And I get the search result
    Then I should be able to click on a product to find out more about it

  Scenario: Searching for and clicking on an item
    Given that I enter "apelsin" in the search box
    When I press ENTER
    And I get the search result
    Then I should be able to click on a product to find out more about it
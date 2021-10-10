Feature: Finding more info about a product
  As a user I want to be able to click on a
  product so that I can find out more information about it

  Background:
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy

  Scenario: Searching for and clicking on an item
    Given that I search for "melon" in the search box
    And I click ENTER key
    And I get the list of products
    And I have a list of products in the search result
    And that the list contains melon galia
    When I click on a melon galia
    Then by clicking on Övrigt, I should be able to find out more information about given product

  Scenario: Searchin for a non existing product
    Given that I enter "abcdefgh" in the search bar
    When I press Enter key
    Then the list of products sould be empty
    And I should get a message that says that the searched product does not exist






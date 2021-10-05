Feature: Willys categorizes after "Meat"
  Willys should be able to deliver all
  products with the tag meat when pressing the buttons

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Searching and pressing the meny button
    Given that the side menu is open
    When I click on the meat, poultry and butchers' category
    And I click on the Meat subcategory
    Then I should see all the products with the meat tag
    And be able to find ground beef in the list

  Scenario: Searching and pressing the meny button
    Given that the side menu is open
    When I click on the Vegetables and Greens category
    And I click on the Vegetables subcategory
    Then I should see all the products with the vegetable tag
    And be able to find avocados in the list










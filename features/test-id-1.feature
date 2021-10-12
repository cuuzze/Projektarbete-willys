Feature: Willys categorizes their products after meat or vegetables
  Willys should be able to categorize and sort all
  products with the tag meat or vegetables

  Background:
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario: Searching for products based on category 'meat'
    Given that the side menu is open
    When I click on the meat, poultry and butchers' category
    And I click on the Meat subcategory
    Then I should see all the products with the meat tag
    And be able to find ground beef in the list

  Scenario: Searching for products based on category 'vegetables'
    Given that the side menu is open
    When I click on the Vegetables and Greens category
    And I click on the Vegetables subcategory
    Then I should see all the products with the vegetable tag
    And be able to find avocados in the list










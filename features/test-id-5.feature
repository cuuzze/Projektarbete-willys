Feature: change count on a product in the shopping cart on Willys
  Willys should be able to change the count on a product in the shopping cart
  when clicking on the plus or minus button on the product

  Background:
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    When I click on the plus button twice on a product
    Then the products count should be increased

  Scenario: Increasing product count in shopping cart
    Given the shopping cart menu is open
    When I click the buy-button
    And I should arrive at "https://www.willys.se/varukorg"
    Then I click on the plus button on the product in the shopping cart
    And the product count should be increased in the shopping cart

  Scenario: Decreasing product count in shopping cart
    Given the shopping cart menu is open
    When I click the buy-button
    And I should arrive at "https://www.willys.se/varukorg"
    Then I click on the minus button on the product in the shopping cart
    And the product count should be decreased in the shopping cart

  Scenario: Increasing product count in sidemenu
    Given the shopping cart menu is open
    When I click on the plus button on the product in the side menu
    Then the product count should be increased in the side menu

  Scenario: Decreasing product count in sidemenu
    Given the shopping cart menu is open
    When I click on the minus button on the product in the side menu
    Then the product count should be decreased in the side menu





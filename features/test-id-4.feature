Feature: Shopping cart functionality
  As a user I want to be able to see my shopping cart
  as well as the products that I have added to it
  so that I can buy them.

  Background:
    Given that I am on "https://www.willys.se/"
    * that product cucumber is added to the shopping cart
    * that product satsuma is added to the shopping cart
    * that product gifflar is added to the shopping cart

  Scenario: See & buy products
    Given that I have products in the shopping cart
    When I push shopping cart button
    Then I should see my products
    And I should be able to push the buy button
Feature: Delete product
  As a user I want to be able to
  delete a product from the shopping cart
  so I have the option to change my mind
  about my purchase

  Background: Existing product
    Given that I am on "https://www.willys.se/"
    * that product satsuma is added to the shopping cart

  Scenario: Delete satsuma
    Given that I am on "https://www.willys.se/varukorg"
    And product satsuma is added to the shopping cart
    When I push the remove button
    Then the procut satsuma should be removed
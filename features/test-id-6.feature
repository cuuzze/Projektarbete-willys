Feature: Delete product
  As a user I want to be able to
  delete a product from the shopping cart
  so I have the option to change my mind
  about my purchase

  Background:
    Given that I am on "https://www.willys.se/sok?q=satsumas"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    When I click on the plus button on a product
    Then the product should be added to the shopping cart

  Scenario: Delete product
    Given that I am on "https://www.willys.se/varukorg"
    And a product is added to the shopping cart
    When I click the remove button
    And click the following confirmation button
    Then the product should be removed
    And the shopping cart should be empty

# Scenario för att ta bort flera varor

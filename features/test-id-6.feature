Feature: Delete product
  As a user I want to be able to
  delete a product from the shopping cart
  so I have the option to change my mind
  about my purchase

  Background:
    Given that I am on "https://www.willys.se"
    * that we accepted the standard cookie policy
    * that we have have been through the initial where to deliver popup
    * that I search for "Djungelvrål" in the search box
    * I click ENTER key
    * I have a list of products in the search result
    * I click on the plus button on the product
    * that I click the shopping cart button
    * that I have a product in the shopping cart
    When I click the buy button
    Then I should arrive at "https://www.willys.se/varukorg"

  Scenario: Delete product
    Given a product is added to the shopping cart
    When I click the remove button
    And click the following confirmation button
    Then the product should be removed
    And the shopping cart should be empty

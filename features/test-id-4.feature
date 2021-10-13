Feature: Shopping cart functionality
  As a user I want to be able to see my shopping cart
  as well as the product/-s that I have added to it
  so that I can buy them

  Background:
    Given that I am on "https://www.willys.se"
    * that we accepted the standard cookie policy
    * that we have have been through the initial where to deliver popup
    * that I search for "Delicatoboll 1-pack" in the search box
    * I click ENTER key
    * I have a list of products in the search result
    * I click on the plus button on the product

  Scenario: See & buy product
    Given that I click the shopping cart button
    And that I have a product in the shopping cart
    When I click the buy button
    Then I should arrive at "https://www.willys.se/varukorg"
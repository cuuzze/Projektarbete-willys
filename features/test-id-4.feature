Feature: Shopping cart functionality
  As a user I want to be able to see my shopping cart
  as well as the product that I have added to it
  so that I can buy them

  Background:
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    When I am on "https://www.willys.se/sok?q=delicatoboll+1-pack"
    And I click on the plus button on a product
    Then the product should be added to the shopping cart

  Scenario: See & buy product
    Given that I have a product in the shopping cart
    When I click the shopping cart button
    Then I should be able to click the buy button
    And arrive at "https://www.willys.se/varukorg"

# Scenario för fler produkter
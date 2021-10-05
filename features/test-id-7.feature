Feature: Empty shopping cart
  In order to reset an ongoing shopping session
  Users should be able to empty the shopping cart

  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    
  Scenario:
    Given the user has placed items in their shopping cart
    When the user clicks the trash bin icon
    Then the items will be removed from the cart
    And an empty shopping cart will be shown
Feature: Empty shopping cart
  To reset an ongoing shopping session
  Users should be able to empty the shopping cart

  Background:
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario:
    Given that I have placed items in my shopping cart
    When I click the trash bin icon
    And click the confirmation button
    Then the items will be removed from the cart
    And an empty shopping cart will be shown
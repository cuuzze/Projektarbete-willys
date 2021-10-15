Feature: Empty shopping cart
  To reset an ongoing shopping session
  Users should be able to empty the shopping cart

  Background:
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    And that I have placed items in my shopping cart

  Scenario:
    And the shopping cart side menu is open
    When I click the empty button
    And click the confirmation button
    And an empty shopping cart will be shown
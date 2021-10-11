Feature: Shopping cart pre-purchase total calculation
  To evaluate if a purchase is within a user's budget
  Users should be able to view the shopping cart total
  Before they complete payment
  
  Background:
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup

  Scenario:
    Given that I have placed items in my shopping cart
    When I click the shopping cart icon
    Then the correct total for the items in the shopping cart should be displayed  
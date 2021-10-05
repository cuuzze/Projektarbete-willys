Feature: Shopping cart pre-purchase total calculation
  In order to evaluate if a purchase is within a user's budget
  Users should be able to view the shopping cart total
  Before they complete payment
  
  Background:
    Given that we are on Willy's website
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    #copy mr hannes nr 3 le backgroundness
  Scenario:
    Given the user has placed items in their shopping cart
    When the user clicks the shopping cart icon
    Then the correct total for the items in the shopping cart should be displayed  
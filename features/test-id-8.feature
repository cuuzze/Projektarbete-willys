Feature: Shopping cart pre-purchase total calculation
  In order to evaluate if a purchase is within a user's budget
  Users should be able to view the shopping cart total
  Before they complete payment
  
  Background:
    Given the user is already registered to the website
  Scenario:
    Given the user has placed items in their shopping cart
    When the user clicks the shopping cart icon
    And before payment
    Then the correct total for the items in the shopping cart should be displayed  
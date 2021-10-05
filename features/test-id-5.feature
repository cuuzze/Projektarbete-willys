Feature: change count on a product in the shopping cart on Willys"
  Willys should be able to change the count on a product in the shopping cart
  when clicking on the plus or minus button on the product

  Background: 
    Given that I am on "https://www.willys.se/sok?q=satsumas" 
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup           
    When I click on the plus button on a product           
    Then the product count in the shopping cart should be changed   

  Scenario: Increasing product count in shopping cart
    Given that I am on "https://www.willys.se/sok?q=satsumas"      
    And there is a product in the shopping cart
    And the shopping cart menu is open              
    When I click on the plus button on the product in the shopping cart          
    Then the product count should be increased in the shopping cart

  Scenario: Decreasing product count in shopping cart
    Given that I am on "https://www.willys.se/sok?q=satsumas"      
    And there is a product in the shopping cart
    And the shopping cart menu is open              
    When I click on the minus button on the product in the shopping cart          
    Then the product count should be decreased in the shopping cart


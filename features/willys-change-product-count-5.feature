Feature: change count on a product in the shopping cart on Willys"
  Willys should be able to change the count on a product in the shopping cart
  when clicking on the plus or minus button on the product

Background: 
    Given that I am on "https://www.willys.se/sok?q=satsumas"               
    When I click on the plus button on a product           
    Then the product should be added to the shopping cart    

  Scenario: Changing product count in shopping cart
    Given that I am on "https://www.willys.se/sok?q=satsumas"      
    And the product is added to the shopping cart
    And the shopping cart menu is open              
    When I click on the plus button on the product in the shopping cart          
    Then the product count should be increased in the shopping cart

    Scenario: Changing product count in shopping cart
    Given that I am on "https://www.willys.se/sok?q=satsumas"      
    And the product is added to the shopping cart
    And the shopping cart menu is open              
    When I click on the minus button on the product in the shopping cart          
    Then the product count should be decreased in the shopping cart
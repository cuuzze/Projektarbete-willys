Feature: add product to shopping cart on Willys
  Willys should be able to add a product to the shopping cart
  when clicking on the plus button on the product

  Background: 
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup    

  Scenario: Adding product to shopping cart
    Given that I am on "https://www.willys.se"  
    When I click on the plus button on a product      
    Then the product count should be increased  

  Scenario: Adding products to shopping cart
    Given that I am on "https://www.willys.se"  
    When I click on the plus button on a product  
    And I click on the plus button on a product     
    Then the products count should be increased       

  Scenario: Going to the shopping cart without any products
    Given the shopping cart menu is open
    Then there should be a text displaying that my cart is empty    

  
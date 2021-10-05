Feature: add product to shopping cart on Willys
  Willys should be able to add a product to the shopping cart
  when clicking on the plus button on the product

  Background: 
    Given that I am on "https://www.willys.se"
    And that we accepted the standard cookie policy
    And that we have have been through the initial where to deliver popup
    When I enter "satsumas" in the search box
    And press the enter key
    Then I should get a search result
    And the search result should contain the correct product

  Scenario: Adding product to shopping cart
    Given that I am on "https://www.willys.se/sok?q=satsumas"  
    When I click on the plus button on a product           
    Then the product should be added to the shopping cart    

    Scenario: Adding products to shopping cart
    Given that I am on "https://www.willys.se/sok?q=satsumas"  
    When I click on the plus button on a product  
    When I click on the plus button on a product          
    Then the products should be added to the shopping cart   

  
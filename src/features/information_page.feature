Feature: Information page

  It displays all the information related to a product (description, price, stock)

  Scenario: Show information page of an item
    Given a user on the homepage
    When they click on an item
    Then they should see the information of this item

  Scenario: Cut description of an item
    Given an item
    When a user visits its information page
    Then the item's description should not exceed 50 characters

  Scenario: Add ... if item description is cut
    Given an item which description exceeds 50 characters
    When a user visits its information page
    Then the item's description should end with ...
Feature: Compute total price

  It computes the total price of a product based on the number of articles chosen

  Scenario: Display total price of articles
    Given a user on the information page of an item that costs 10€ and the counter is at 1
    When they click on +
    Then the total price should be 20€

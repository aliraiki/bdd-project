Feature: Buy Article

  It saves all the items bought and updates the amount of money left

  Scenario: Add item to list of bought items
    Given a user and an article on the homepage
    When they click on the Buy symbol
    Then the selected article should be added to the list of bought items (name and number of articles)

  Scenario: Update the amount of money that is left
    Given a user with 450₽ and an article that costs 200₽
    When they click on the Buy symbol of this article
    Then the amount of money that is left should be 250₽

  Scenario: Display error if not enough money
    Given a user with 500₽ and an article that costs 400₽
    When they click on the Buy symbol to buy 2 pieces of this article
    Then an error should be displayed and the user should still have the same amount of money

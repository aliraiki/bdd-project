Feature: Catalog

  It displays all the available products on the homepage

  Scenario: Displays all available items (5 items)
    Given a user and 5 available items
    When the user visit the homepage
    Then they should see the 5 items on the page

  Scenario: No item is available
    Given a user
    When they visit the homepage
    Then they should see the message 'Aucun article n'est disponible'

  Scenario: Display only purchasable items
    Given a user with 200 currency
    When they visit the homepage
    Then they should only see the 3 items with price lower or equal to 200
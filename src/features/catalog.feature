Feature: Catalog

  It displays up to 10 available articles per result page.

  Scenario: Displays all available items (5 items)
    Given a user and 5 available items
    When the user visit the homepage
    Then they should see the 5 items on the page

  Scenario: No item is available
    Given a user
    When they visit the homepage
    Then they should see the message 'Aucun article n'est disponible'

  Scenario: There are more than 10 products
    Given a user and 15 available products
    When the user visists the homepage
    Then they should have 2 result pages
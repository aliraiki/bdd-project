Feature: Catalog

  It displays all the available products on the homepage

  Scenario: Displays all available items (5 items)
    Given a user
    When they visit the homepage
    Then they should see the 5 items on the page

  Scenario: No item is available
    Given a user
    When they visit the homepage
    Then they should see the message 'Aucun article n'est disponible'

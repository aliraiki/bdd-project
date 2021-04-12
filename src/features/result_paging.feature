Feature: PageContainer

  It allows to display the results on several pages if there are too many for one page

  // scenario : la page sélectionnée devrait être en surbrillance

  Scenario: There are less results than the page 'capacity'
    Given a user and 6 result items
    When the user visits the homepage
    Then there should be one page displaying 6 results, and the active page should be highlighted below.

  Scenario: There are more than 10 results and the user remains on the first page
    Given a user and 15 result items
    When the user visits the homepage
    Then there should be two pages displayed at the bottom, the current page should show 10 results



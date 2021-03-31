Feature: Choose number of articles

  It allows to choose the number of articles the user want to purchase

  Scenario: Increment number of an item
    Given a user is on the information page of an item and counter is at 1
    When they click on +
    Then the counter should change to 2

  Scenario: Decrement number of an item
    Given a user is on the information page of an item and counter is at 2
    When they click on -
    Then the counter should change to 1

  Scenario: At least one article
    Given a user is on the information page of an item and counter is at 1
    When they click on -
    Then the counter should not change

  Scenario: No more than 10 articles
    Given a user is on the information page of an item and counter is at 10
    When they click on +
    Then the counter should not change

import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import Catalog from '../components/Catalog';

const feature = loadFeature('./src/features/catalog.feature');

defineFeature(feature, (test) => {
  test('Displays all available items (5 items)', ({ given, when, then }) => {
    let availableItems = [];
    let catalog;
    let numberOfItems;

    given('a user and 5 available items', () => {
      availableItems = [{ name: 'Produit 1' }, { name: 'Produit 2' }, { name: 'Produit 3' }];
    });

    when('the user visit the homepage', () => {
      catalog = render(<Catalog {...availableItems} />);
    });

    then('they should see the 5 items on the page', () => {
      numberOfItems = catalog.container.querySelector('.item').length;
      const expectedNbOfItems = 5;
      expect(numberOfItems).toEqual(expectedNbOfItems);
    });
  });

  test('No item is available', ({ given, when, then }) => {
    given('a user', () => {

    });

    when('they visit the homepage', () => {

    });

    then('they should see the message \'Aucun article n\'est disponible\'', () => {

    });
  });
});

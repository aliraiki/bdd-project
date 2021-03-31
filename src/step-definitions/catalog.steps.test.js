import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import Catalog from '../components/Catalog';

const feature = loadFeature('./src/features/catalog.feature');

defineFeature(feature, (test) => {
  test('It displays all the available products on the homepage', ({ given, when, then }) => {
    let availableItems = [];
    let catalog;
    let numberOfItems;

    given('a user and 5 available items', () => {
      availableItems = [{ name: 'Produit 1' }, { name: 'Produit 2' }, { name: 'Produit 3' }];
    });

    when('they visit the homepage', () => {
      catalog = render(<Catalog {...availableItems} />);
    });

    then('they should see the 5 items on the page', () => {
      numberOfItems = catalog.container.querySelector('.item').length;
      const expectedNbOfItems = 5;
      expect(numberOfItems).toEqual(expectedNbOfItems);
    });
  });
});

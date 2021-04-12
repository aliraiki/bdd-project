import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render, screen } from '@testing-library/react';
import Catalog from '../components/Catalog';
import newProduct from '../utils/newProduct';

const feature = loadFeature('./src/features/catalog.feature');

defineFeature(feature, (test) => {
  test('Displays all available items (5 items)', ({ given, when, then }) => {
    let availableItems = [];
    let catalog;
    let numberOfItems;

    given('a user and 5 available items', () => {
      availableItems = [
        newProduct(1, 'Produit 1'),
        newProduct(2, 'Produit 2'),
        newProduct(3, 'Produit 3'),
        newProduct(4, 'Produit 4'),
        newProduct(5, 'Produit 5'),
      ];
    });

    when('the user visit the homepage', () => {
      catalog = render(<Catalog items={availableItems} />);
    });

    then('they should see the 5 items on the page', () => {
      numberOfItems = catalog.container.querySelectorAll('.item').length;
      const expectedNbOfItems = 5;
      expect(numberOfItems).toEqual(expectedNbOfItems);
    });
  });

  test('No item is available', ({ given, when, then }) => {
    const availableItems = [];
    let catalog;
    let numberOfItems;

    given('a user', () => {
    });

    when('they visit the homepage', () => {
      catalog = render(<Catalog items={availableItems} />);
    });

    then('they should see the message \'Aucun article n\'est disponible\'', () => {
      numberOfItems = catalog.container.querySelectorAll('.item').length;
      const expectedNbOfItems = 0;
      expect(numberOfItems).toEqual(expectedNbOfItems);

      const noItemMessage = screen.getByText(/Aucun article n'est disponible/);
      expect(noItemMessage).toBeInTheDocument();
    });
  });

  test('Display only purchasable items', ({ given, when, then }) => {
    given('a user with 200 currency', () => {
      availableItems = [
        newProduct(1, 'Produit 1'),
        newProduct(2, 'Produit 2'),
        newProduct(3, 'Produit 3'),
        newProduct(4, 'Produit 4'),
        newProduct(5, 'Produit 5'),
      ];
    });

    when('they visit the homepage', () => {
      catalog = render(<Catalog items={availableItems} />);
    });

    then('they should only see the 3 items with price lower or equal to 200', () => {
      numberOfItems = catalog.container.querySelectorAll('.item').length;
      const expectedNbOfItems = 3;
      expect(numberOfItems).toEqual(expectedNbOfItems);
    });
  });
});

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

  test('Display only purchasable items under 200', ({ given, when, then }) => {
    let availableItems = [];
    let availableItemswithMoney = [];
    let catalog;
    let numberOfItems;

    given('a user with 200 currency', () => {
      availableItems = [
        newProduct(1, 'Poke Ball', 'Small description', 200),
        newProduct(2, 'Super Ball', 'Small description', 400),
        newProduct(3, 'Potion', 'Small description', 200),
        newProduct(4, 'Reanimation', 'Small description', 250),
        newProduct(5, 'Antidote', 'Small description', 150),
      ];
      availableItemswithMoney = availableItems.filter(item => item.price <= 200)
    });

    when('they visit the homepage', () => {
      catalog = render(<Catalog items={availableItemswithMoney} />);
    });

    then('they should only see the 3 items with price lower or equal to 200', () => {
      numberOfItems = catalog.container.querySelectorAll('.item').length;
      const expectedNbOfItems = 3;
      expect(numberOfItems).toEqual(expectedNbOfItems);
    });
  });

  test('Display only purchasable items', ({ given, when, then }) => {
    let availableItems = [];
    let availableItemswithn1 = [];
    let availableItemswithn2 = [];
    let catalog1;
    let catalog2;
    let numberOfItems1;
    let numberOfItems2;
    let n1;
    let n2;

    given('a user with n currency', () => {
      availableItems = [
        newProduct(1, 'Poke Ball', 'Small description', 200),
        newProduct(2, 'Super Ball', 'Small description', 400),
        newProduct(3, 'Potion', 'Small description', 200),
        newProduct(4, 'Reanimation', 'Small description', 250),
        newProduct(5, 'Antidote', 'Small description', 150),
      ];
      n1 = 200;
      n2 = 250;
      availableItemswithn1 = availableItems.filter(item => item.price <= n1);
      availableItemswithn2 = availableItems.filter(item => item.price <= n2);
    });

    when('they visit the homepage', () => {
      catalog1 = render(<Catalog items={availableItemswithn1} />);
      catalog2 = render(<Catalog items={availableItemswithn2} />);
    });

    then('they should only see the items with price lower or equal to n', () => {
      numberOfItems1 = catalog1.container.querySelectorAll('.item').length;
      const expectedNbOfItems1 = 5;
      expect(numberOfItems1).toEqual(expectedNbOfItems1);
      numberOfItems2 = catalog2.container.querySelectorAll('.item').length;
      const expectedNbOfItems2 = 5;
      expect(numberOfItems2).toEqual(expectedNbOfItems2);
    });
  });
});

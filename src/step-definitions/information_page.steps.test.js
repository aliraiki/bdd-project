import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render, screen } from '@testing-library/react';
import InformationPage from '../components/InformationPage';
import newProduct from '../utils/newProduct';

const feature = loadFeature('./src/features/information_page.feature');

defineFeature(feature, (test) => {
  test('Show information page of an item', ({ given, when, then }) => {
    let selectedItem;
    const selectedItemDescription = 'Ceci est le produit numéro 1';

    given('a user on the homepage', () => {
    });

    when('they click on an item', () => {
      // The click is tested in App.test.js
      selectedItem = newProduct(1, 'Produit 1', selectedItemDescription);
    });

    then('they should see the information of this item', () => {
      const informationPage = render(<InformationPage item={selectedItem} />);
      const displayedItemDescription = informationPage.container.querySelector('#description');
      expect(displayedItemDescription.innerHTML).toContain(selectedItemDescription);
    });
  });

  test('Cut description of an item', ({ given, when, then }) => {
    given('an item', () => {

    });

    when('a user visits its information page', () => {

    });

    then(/^the item's description should not exceed (\d+) characters$/, (maxNumberOfCharacters) => {
      expect(0).toEqual(1);
    });
  });
});

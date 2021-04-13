import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
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
    let item;
    const itemDescription = 'Une description qui dépasse 50 caractères et qui devra être coupé lors de l\'affichage de la description du produit';
    let informationPage;

    given('an item', () => {
      item = newProduct(1, 'Produit 1', itemDescription);
    });

    when('a user visits its information page', () => {
      informationPage = render(<InformationPage item={item} />);
    });

    then(/^the item's description should not exceed (\d+) characters$/, (maxNumberOfCharacters) => {
      const displayedItemDescriptionLength = informationPage.container.querySelector('#description').innerHTML.length;
      expect(displayedItemDescriptionLength).toBeLessThanOrEqual(Number(maxNumberOfCharacters));
    });
  });

  test('Add ... if item description is cut', ({ given, when, then }) => {
    let item;
    const itemDescription = 'Une description qui dépasse 50 caractères et qui devra être coupé lors de l\'affichage de la description du produit';
    let informationPage;

    given('an item which description exceeds 50 characters', () => {
      item = newProduct(1, 'Produit 1', itemDescription);
    });

    when('a user visits its information page', () => {
      informationPage = render(<InformationPage item={item} />);
    });

    then('the item\'s description should end with ...', () => {
      const descriptionContent = informationPage.container.querySelector('.description-block').innerHTML;
      const descriptionEnd = descriptionContent.substring(descriptionContent.length - 3);
      const expectedDescriptionEnd = '...';
      expect(descriptionEnd).toEqual(expectedDescriptionEnd);
    });
  });
});

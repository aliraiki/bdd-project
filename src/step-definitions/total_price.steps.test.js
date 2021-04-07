import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { fireEvent, render } from '@testing-library/react';
import InformationPage from '../components/InformationPage';
import newProduct from '../utils/newProduct';

const feature = loadFeature('./src/features/total_price.feature');

defineFeature(feature, (test) => {
  test('Display total price of articles', ({ given, when, then }) => {
    let informationPage;
    let incrementButton;
    let articlePrice;
    let articleCount;

    given(/^a user on the information page of an item that costs (\d+)€ and the counter is at (\d+)$/, (price, count) => {
      articlePrice = Number(price);
      articleCount = Number(count);
      const selectedItem = newProduct(1, 'Produit 1', 'Une petite description', articlePrice);
      informationPage = render(<InformationPage item={selectedItem} />);
      // Loop to get the desired initial article number
      incrementButton = informationPage.getByTestId('increment');
      for (let i = 1; i < articleCount; i += 1) {
        fireEvent.click(incrementButton);
      }
    });

    when('they click on +', () => {
      fireEvent.click(incrementButton);
      articleCount += 1;
    });

    then(/^the total price should be (\d+)€$/, (totalPrice) => {
      expect(Number(totalPrice)).toEqual(articlePrice * articleCount);
      const displayedTotalPrice = informationPage.container.querySelector('#total-price').innerHTML;
      expect(displayedTotalPrice).toEqual(totalPrice);
    });
  });
});

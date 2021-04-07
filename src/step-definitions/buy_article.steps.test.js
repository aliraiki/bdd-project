import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { fireEvent, render, screen } from '@testing-library/react';
import Catalog from '../components/Catalog';
import newProduct from '../utils/newProduct';
import App from '../App';

const feature = loadFeature('./src/features/buy_article.feature');

defineFeature(feature, (test) => {
  test('Add item to list of bought items', ({ given, when, then }) => {
    let homepage;

    given('a user and an article on the homepage', () => {
      homepage = render(<App />);
    });

    when('they click on the Buy symbol', () => {
      const pokeballBuyButton = homepage.getAllByTestId('buy')[0];
      fireEvent.click(pokeballBuyButton);
    });

    then('the selected article should be added to the list of bought items (name and number of articles)', () => {
      const boughtItems = homepage.getByTestId('bought-items').innerHTML;
      expect(boughtItems).toContain('1 Poke Ball');
    });
  });

  test('Update the amount of money that is left', ({ given, when, then }) => {
    given(/^a user with (\d+)₽ and an article that costs (\d+)₽$/, (arg0, arg1) => {

    });

    when('they click on the Buy symbol of this article', () => {

    });

    then(/^the amount of money that is left should be (\d+)₽$/, (arg0) => {
      expect(0).toEqual(1);
    });
  });
});

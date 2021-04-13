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
    let homepage;
    let initialAmountOfMoney;
    let articlePrice;

    given(/^a user with (\d+)₽ and an article that costs (\d+)₽$/, (money, price) => {
      initialAmountOfMoney = Number(money);
      articlePrice = Number(price);
      const item = newProduct(1, 'Produit 1', 'Petite description', articlePrice);
      homepage = render(<App items={[item]} initialAmountOfMoney={initialAmountOfMoney} />);
    });

    when('they click on the Buy symbol of this article', () => {
      const pokeballBuyButton = homepage.getAllByTestId('buy')[0];
      fireEvent.click(pokeballBuyButton);
    });

    then(/^the amount of money that is left should be (\d+)₽$/, (moneyLeft) => {
      const displayedMoneyLeft = Number(homepage.getByTestId('money-left').innerHTML);
      expect(initialAmountOfMoney - articlePrice).toEqual(Number(moneyLeft));
      expect(displayedMoneyLeft).toEqual(Number(moneyLeft));
    });
  });

  test('Display error if not enough money', ({ given, when, then }) => {
    let homepage;
    let initialAmountOfMoney;
    let articlePrice;

    window.alert = jest.fn();
    given(/^a user with (\d+)₽ and an article that costs (\d+)₽$/, (money, price) => {
      initialAmountOfMoney = Number(money);
      articlePrice = Number(price);
      const item = newProduct(1, 'Produit 1', 'Petite description', articlePrice);
      homepage = render(<App items={[item]} initialAmountOfMoney={initialAmountOfMoney} />);
    });

    when('they click on the Buy symbol to buy 2 pieces of this article', () => {
      const incrementButton = homepage.getByTestId('increment');
      fireEvent.click(incrementButton);
      const pokeballBuyButton = homepage.getAllByTestId('buy')[0];
      fireEvent.click(pokeballBuyButton);
    });

    then('an error should be displayed and the user should still have the same amount of money', () => {
      expect(window.alert).toHaveBeenCalledTimes(1);

      const displayedMoneyLeft = Number(homepage.getByTestId('money-left').innerHTML);
      expect(displayedMoneyLeft).toEqual(initialAmountOfMoney);

      const boughtItems = homepage.getByTestId('bought-items').innerHTML;
      expect(boughtItems).not.toContain('Produit 1');
    });
  });
});

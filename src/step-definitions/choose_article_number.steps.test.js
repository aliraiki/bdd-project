import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { fireEvent, render } from '@testing-library/react';
import newProduct from '../utils/newProduct';
import InformationPage from '../components/InformationPage';

const feature = loadFeature('./src/features/choose_article_number.feature');

defineFeature(feature, (test) => {
  test('Increment number of an item', ({ given, when, then }) => {
    let informationPage;
    given(/^a user is on the information page of an item and counter is at (\d+)$/, (articleCount) => {
      const item = newProduct(1, 'Produit 1');
      informationPage = render(<InformationPage item={item} />);
    });

    when('they click on +', () => {
      const incrementButton = informationPage.getByTestId('increment');
      fireEvent.click(incrementButton);
    });

    then(/^the counter should change to (\d+)$/, (newArticleCount) => {
      const articleCount = informationPage.getByTestId('article-count');
      expect(articleCount.textContent).toEqual(newArticleCount);
    });
  });

  test('Decrement number of an item', ({ given, when, then }) => {
    let informationPage;
    given(/^a user is on the information page of an item and counter is at (\d+)$/, (initialArticleNumber) => {
      const item = newProduct(1, 'Produit 1');
      informationPage = render(<InformationPage item={item} />);
      const incrementButton = informationPage.getByTestId('increment');
      // Loop to get the desired initial article number
      for (let i = 1; i < initialArticleNumber; i += 1) {
        fireEvent.click(incrementButton);
      }
    });

    when('they click on -', () => {
      const decrementButton = informationPage.getByTestId('decrement');
      fireEvent.click(decrementButton);
    });

    then(/^the counter should change to (\d+)$/, (newArticleCount) => {
      const articleCount = informationPage.getByTestId('article-count');
      expect(articleCount.textContent).toEqual(newArticleCount);
    });
  });

  test('At least one article', ({ given, when, then }) => {
    let informationPage;
    let minimumArticleCount;

    given(/^a user is on the information page of an item and counter is at (\d+)$/, (arg0) => {
      const item = newProduct(1, 'Produit 1');
      minimumArticleCount = arg0;
      informationPage = render(<InformationPage item={item} />);
      const incrementButton = informationPage.getByTestId('increment');
      // Loop to get the desired initial article number
      for (let i = 1; i < arg0; i += 1) {
        fireEvent.click(incrementButton);
      }
    });

    when('they click on -', () => {
      const decrementButton = informationPage.getByTestId('decrement');
      fireEvent.click(decrementButton);
    });

    then('the counter should not change', () => {
      const articleCount = informationPage.getByTestId('article-count');
      expect(articleCount.textContent).toEqual(minimumArticleCount);
    });
  });

  test('No more than 10 articles', ({ given, when, then }) => {
    given(/^a user is on the information page of an item and counter is at (\d+)$/, (arg0) => {

    });

    when('they click on +', () => {

    });

    then('the counter should not change', () => {
      expect(0).toEqual(1);
    });
  });
});

import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/dom';
import newProduct from '../utils/newProduct';
import PageContainer from '../components/PageContainer';

const feature = loadFeature('./src/features/result_paging.feature');

defineFeature(feature, (test) => {
  test("There are less results than the page 'capacity'", ({ given, when, then }) => {
    let availableItems = [];
    let pageContainer;
    let numberOfPages;
    let numberOfResultsOnFirstPage;

    given('a user and 6 result items', () => {
      availableItems = [
        newProduct(1, 'Produit 1'),
        newProduct(2, 'Produit 2'),
        newProduct(3, 'Produit 3'),
        newProduct(4, 'Produit 4'),
        newProduct(5, 'Produit 5'),
        newProduct(6, 'Produit 6'),
      ];
    });

    when('the user visits the homepage', () => {
      pageContainer = render(<PageContainer items={availableItems} />);
    });

    then('there should be one page displaying 6 results, and the active page should be highlighted below.', () => {
      numberOfPages = pageContainer.container.querySelectorAll('.page-number, .page-number-active').length;
      numberOfResultsOnFirstPage = pageContainer.container.querySelectorAll('.item').length;
      const expectedNumberOfPages = 1;
      const expectedNumberOfResultsOnFirstPage = 6;
      expect(numberOfPages).toEqual(expectedNumberOfPages);
      expect(numberOfResultsOnFirstPage).toEqual(expectedNumberOfResultsOnFirstPage);
    });
  });

  test('There are more than 10 results and the user remains on the first page', ({ given, when, then }) => {
    let availableItems = [];
    let pageContainer;
    let numberOfPages;
    let numberOfResultsOnFirstPage;
    let class1;
    let class2;

    given('a user and 15 result items', () => {
      availableItems = [
        newProduct(1, 'Produit 1'),
        newProduct(2, 'Produit 2'),
        newProduct(3, 'Produit 3'),
        newProduct(4, 'Produit 4'),
        newProduct(5, 'Produit 5'),
        newProduct(6, 'Produit 6'),
        newProduct(7, 'Produit 2'),
        newProduct(8, 'Produit 3'),
        newProduct(9, 'Produit 4'),
        newProduct(10, 'Produit 5'),
        newProduct(11, 'Produit 1'),
        newProduct(12, 'Produit 2'),
        newProduct(13, 'Produit 3'),
        newProduct(14, 'Produit 4'),
        newProduct(15, 'Produit 5'),
      ];
    });

    when('the user visits the homepage', () => {
      pageContainer = render(<PageContainer items={availableItems} />);
    });

    then('there should be two pages displayed at the bottom, the current page should show 10 results', () => {
      numberOfPages = pageContainer.container.querySelectorAll('.page-number, .page-number-active').length;
      class1 = pageContainer.container.querySelectorAll('.page-number, .page-number-active').item(0).className;
      class2 = pageContainer.container.querySelectorAll('.page-number, .page-number-active').item(1).className;
      numberOfResultsOnFirstPage = pageContainer.container.querySelectorAll('.item').length;
      const expectedNumberOfPages = 2;
      const expectedNumberOfResultsOnFirstPage = 10;
      expect(numberOfPages).toEqual(expectedNumberOfPages);
      expect(numberOfResultsOnFirstPage).toEqual(expectedNumberOfResultsOnFirstPage);
      expect(class1).not.toEqual(class2);
    });
  });

  test('There are more than 10 results and the user goes to the second page', ({ given, when, then }) => {
    let availableItems = [];
    let pageContainer;
    let numberOfPages;
    let numberOfResultsOnFirstPage;
    let class1;
    given('a user and 18 result items', () => {
      availableItems = [
        newProduct(1, 'Produit 1'),
        newProduct(2, 'Produit 2'),
        newProduct(3, 'Produit 3'),
        newProduct(4, 'Produit 4'),
        newProduct(5, 'Produit 5'),
        newProduct(6, 'Produit 6'),
        newProduct(7, 'Produit 2'),
        newProduct(8, 'Produit 3'),
        newProduct(9, 'Produit 4'),
        newProduct(10, 'Produit 5'),
        newProduct(11, 'Produit 1'),
        newProduct(12, 'Produit 2'),
        newProduct(13, 'Produit 3'),
        newProduct(14, 'Produit 4'),
        newProduct(15, 'Produit 5'),
        newProduct(16, 'Produit 3'),
        newProduct(17, 'Produit 4'),
        newProduct(18, 'Produit 5'),
      ];
    });

    when('the user visits the homepage and clicks on page 2 button', () => {
      pageContainer = render(<PageContainer items={availableItems} />);
      // Clic de l'utilisateur sur le bouton de la page 2
      fireEvent.click(pageContainer.container.querySelector('.page-numbers').childNodes.item(2));
    });

    then('there should be 8 result displayed, and the second page button should be highlighted', () => {
      numberOfPages = pageContainer.container.querySelectorAll('.page-number, .page-number-active').length;
      class1 = pageContainer.container.querySelectorAll('.page-number, .page-number-active').item(1).className;
      numberOfResultsOnFirstPage = pageContainer.container.querySelectorAll('.item').length;
      const expectedNumberOfPages = 2;
      const expectedNumberOfResultsOnFirstPage = 8;
      const expectedClass1 = 'page-number-active'; // La surbrillance est seulement testée par le biais du className
      expect(numberOfPages).toEqual(expectedNumberOfPages);
      expect(numberOfResultsOnFirstPage).toEqual(expectedNumberOfResultsOnFirstPage);
      expect(class1).toEqual(expectedClass1);
    });
  });
});

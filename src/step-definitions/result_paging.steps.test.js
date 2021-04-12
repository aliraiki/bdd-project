import React from 'react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { render, screen } from '@testing-library/react';
import newProduct from "../utils/newProduct";
import PageContainer from "../components/PageContainer";

const feature = loadFeature('./src/features/result_paging.feature');

defineFeature(feature, (test) => {
  test("There are less results than the page 'capacity'", ({ given, when, then }) => {
    let availableItems = [];
    let pageContainer;
    let numberOfPages;
    let numberOfResultsOnFirstPage;

    given("a user and 6 result items", () => {
      availableItems = [
        newProduct(1, 'Produit 1'),
        newProduct(2, 'Produit 2'),
        newProduct(3, 'Produit 3'),
        newProduct(4, 'Produit 4'),
        newProduct(5, 'Produit 5'),
        newProduct(6, 'Produit 6')
      ]
    });

    when("the user visits the homepage", () => {
      pageContainer = render(<PageContainer items={availableItems} />);
    });

    then("there should be one page displaying 6 results, and the active page should be highlighted below.", () => {
      numberOfPages = pageContainer.container.querySelectorAll('.page-numbers').length;
      numberOfResultsOnFirstPage = pageContainer.container.querySelectorAll('.item').length;
      console.log(numberOfPages);
      console.log(numberOfResultsOnFirstPage);
      const expectedNumberOfPages = 1;
      const expectedNumberOfResultsOnFirstPage = 6;
      expect(numberOfPages).toEqual(expectedNumberOfPages);
      expect(numberOfResultsOnFirstPage).toEqual(expectedNumberOfResultsOnFirstPage);
    });

  });
});
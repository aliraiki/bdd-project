import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../static/styles/InformationPage.css';

function InformationPage({
  item, boughtItems, setBoughtItems, wallet, setWallet,
}) {
  const [articleCount, setArticleCount] = useState(1);
  const minimumArticleCount = 1;
  const maximumArticleCount = 10;
  const itemDescription = item.description;
  const itemPrice = item.price;

  const decrement = () => {
    setArticleCount(Math.max(articleCount - 1, minimumArticleCount));
  };

  const increment = () => {
    setArticleCount(Math.min(articleCount + 1, maximumArticleCount));
  };

  const handleClick = () => {
    setBoughtItems(boughtItems.concat([`${articleCount} ${item.name}`]));
    setWallet(wallet - itemPrice);
  };

  return (
    <div className="info-section">
      <div className="description-block">
        <p id="description">{itemDescription.substring(0, 50)}</p>
        {itemDescription.length > 50 && '...'}
      </div>

      <button
        className="btn"
        type="button"
        data-testid="decrement"
        onClick={decrement}
      >
        -
      </button>
      <span data-testid="article-count">{articleCount}</span>
      <button
        className="btn"
        type="button"
        data-testid="increment"
        onClick={increment}
      >
        +
      </button>
      <div className="buy-section">
        <div className="total-price-tag">
          Prix total :&nbsp;
          <span id="total-price">
            {articleCount * itemPrice}
          </span>
          ₽
          <div
            className="buy-button"
            data-testid="buy"
            onClick={handleClick}
            aria-hidden
          >
            &nbsp;🛒
          </div>
        </div>

      </div>
    </div>
  );
}

InformationPage.defaultProps = {
  item: {
    id: 0,
    name: '',
    description: '',
    price: 0,
  },
  boughtItems: [],
  setBoughtItems: () => {},
  wallet: 0,
  setWallet: () => {},
};

InformationPage.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
  boughtItems: PropTypes.arrayOf(PropTypes.string),
  setBoughtItems: PropTypes.func,
  wallet: PropTypes.number,
  setWallet: PropTypes.func,
};

export default InformationPage;

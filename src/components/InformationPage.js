import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../static/styles/InformationPage.css';

function InformationPage({ item }) {
  const [articleCount, setArticleCount] = useState(1);
  const minimumArticleCount = 1;
  const maximumArticleCount = 10;

  const decrement = () => {
    setArticleCount(Math.max(articleCount - 1, minimumArticleCount));
  };

  const increment = () => {
    setArticleCount(Math.min(articleCount + 1, maximumArticleCount));
  };

  return (
    <div className="info-section">
      <div className="description-block">
        <p id="description">{item.description.substring(0, 50)}</p>
        {item.description.length > 50 && '...'}
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
      <div className="total-price-tag">
        Prix total :&nbsp;
        <span id="total-price">
          {articleCount * item.price}
        </span>
        ₽
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
};

InformationPage.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default InformationPage;

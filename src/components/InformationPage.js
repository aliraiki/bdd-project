import React, { useState } from 'react';
import PropTypes from 'prop-types';

function InformationPage({ item }) {
  const [articleCount, setArticleCount] = useState(1);

  return (
    <div>
      <div id="name">{item.name}</div>
      <div>
        <p id="description">{item.description.substring(0, 50)}</p>
        ...
      </div>
      <div id="price">{item.price}</div>

      <span data-testid="article-count">{articleCount}</span>
      <button
        type="button"
        data-testid="increment"
        onClick={() => {
          setArticleCount(articleCount + 1);
        }}
      >
        +
      </button>

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

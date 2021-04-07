import React from 'react';
import PropTypes from 'prop-types';
import '../static/styles/Catalog.css';

function Catalog({ items }) {
  if (items.length === 0) return <p>Aucun article n&apos;est disponible</p>;

  return (
    <div id="catalog">
      {items.map((item) => (
        <div key={item.id} className="item">
          <img className="article-image" alt={item.name} src={item.image} />
          <hr className="separator" />
          <div className="article-name">
            {item.name}
          </div>
          <div className="price-tag">
            <div className="article-price">
              {item.price}
            </div>
            ₽
          </div>
        </div>
      ))}
    </div>
  );
}

Catalog.defaultProps = {
  items: [],
};

Catalog.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  })),
};

export default Catalog;

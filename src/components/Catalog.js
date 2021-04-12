import React from 'react';
import PropTypes from 'prop-types';
import '../static/styles/Catalog.css';
import InformationPage from './InformationPage';

function Catalog({
  items, boughtItems, setBoughtItems, wallet, setWallet,
}) {
  const itemsToDisplay = items.filter(item => item.price <= wallet);
  if (itemsToDisplay.length === 0) return <p>Aucun article n&apos;est disponible</p>;

  return (
    <div id="catalog">
      {itemsToDisplay.map((item) => (
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
          <InformationPage
            item={item}
            boughtItems={boughtItems}
            setBoughtItems={setBoughtItems}
            wallet={wallet}
            setWallet={setWallet}
          />
        </div>
      ))}
    </div>
  );
}

Catalog.defaultProps = {
  items: [],
  boughtItems: [],
  setBoughtItems: () => {},
  wallet: 0,
  setWallet: () => {},
};

Catalog.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  })),
  boughtItems: PropTypes.arrayOf(PropTypes.string),
  setBoughtItems: PropTypes.func,
  wallet: PropTypes.number,
  setWallet: PropTypes.func,
};

export default Catalog;

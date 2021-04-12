import React from 'react';
import PropTypes from 'prop-types';
import InformationPage from './InformationPage';

// Ce composant ne sert à peu près à rien pour l'instant.

function ResultPage({
  items, boughtItems, setBoughtItems, wallet, setWallet,
}) {
  return (
    <div>
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

ResultPage.defaultProps = {
  items: [],
  boughtItems: [],
  setBoughtItems: () => {},
  wallet: 0,
  setWallet: () => {},
};

ResultPage.propTypes = {
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

export default ResultPage;

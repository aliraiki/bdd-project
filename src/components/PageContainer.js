import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InformationPage from './InformationPage';
import '../static/styles/PageContainer.css';

function PageContainer(
  {
    items, boughtItems, setBoughtItems, wallet, setWallet,
  },
) {
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.floor(items.length / 10) + 1;
  const pages = [...Array(numberOfPages).keys()];
  // Génère une liste des entiers entre 0 et numberOfPages - 1.

  return (
    <div>
      <div className="items-container">
        {items.slice(10 * currentPage, 10 * currentPage + 10).map((item) => (
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
      <div className="page-numbers">
        <span>Pages de résultat : </span>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            type="button"
            datatest-id="page_button"
            key={page}
            className={(page === currentPage) ? 'page-number-active' : 'page-number'}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

PageContainer.defaultProps = {
  items: [],
  boughtItems: [],
  setBoughtItems: () => {},
  wallet: 0,
  setWallet: () => {},
};

PageContainer.propTypes = {
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

export default PageContainer;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResultPage from './ResultPage';

function PageContainer(
  {
    items, boughtItems, setBoughtItems, wallet, setWallet,
  },
) {
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.floor(items.length / 10) + 1;
  console.log(numberOfPages);
  const pages = [...Array(numberOfPages).keys()];
  // Génère une liste des entiers entre 0 et numberOfPages - 1.

  return (
    <div>
      <ResultPage
        items={items.slice(10 * currentPage, 10 * currentPage + 9)}
        boughtItems={boughtItems}
        setBoughtItems={setBoughtItems}
        wallet={wallet}
        setWallet={setWallet}
      />
      <div className="page-numbers">
        {pages.map((page) => (
          <button onClick={() => setCurrentPage(page)} type="button">
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

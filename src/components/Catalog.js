import React from 'react';
import PropTypes from 'prop-types';
import '../static/styles/Catalog.css';
import InformationPage from './InformationPage';
import PageContainer from './PageContainer';

function Catalog({
  items, boughtItems, setBoughtItems, wallet, setWallet,
}) {
  if (items.length === 0) return <p>Aucun article n&apos;est disponible</p>;

  return (
    <div id="catalog">
      <PageContainer
        items={items}
        boughtItems={boughtItems}
        setBoughtItems={setBoughtItems}
        wallet={wallet}
        setWallet={setWallet}
      />
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

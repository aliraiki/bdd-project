import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Catalog from './components/Catalog';
import newProduct from './utils/newProduct';
import pokeballImage from './static/images/pokeball.png';
import superballImage from './static/images/superball.png';
import potionImage from './static/images/potion.png';
import reanimationImage from './static/images/reanimation.png';
import antidoteImage from './static/images/antidote.png';

import './App.css';

const availableItems = [
  newProduct(1, 'Poke Ball', 'Small description', 200, pokeballImage),
  newProduct(2, 'Super Ball', 'Une description qui dépasse 50 caractères et qui devra être coupé lors de l\'affichage de la description du produit', 400, superballImage),
  newProduct(3, 'Potion', 'Small description', 200, potionImage),
  newProduct(4, 'Reanimation', 'Small description', 250, reanimationImage),
  newProduct(5, 'Antidote', 'Small description', 150, antidoteImage),
  newProduct(6, 'Poke Ball', 'Small description', 200, pokeballImage),
  newProduct(7, 'Super Ball', 'Small description', 400, superballImage),
  newProduct(8, 'Potion', 'Small description', 200, potionImage),
  newProduct(9, 'Reanimation', 'Small description', 250, reanimationImage),
  newProduct(10, 'Antidote', 'Small description', 150, antidoteImage),
  newProduct(11, 'Poke Ball', 'Small description', 200, pokeballImage),
  newProduct(12, 'Super Ball', 'Small description', 400, superballImage),
  newProduct(13, 'Potion', 'Small description', 200, potionImage),
  newProduct(14, 'Reanimation', 'Small description', 250, reanimationImage),
  newProduct(15, 'Antidote', 'Small description', 150, antidoteImage),
];

function App({ initialAmountOfMoney, items }) {
  const [boughtItems, setBoughtItems] = useState([]);
  const [wallet, setWallet] = useState(initialAmountOfMoney);

  return (
    <div className="App">
      <header className="App-header">
        <h5 className="bought-items" data-testid="bought-items">
          Liste des articles achetés :&nbsp;
          {boughtItems.map((item) => (
            <span key={item} className="bought-item">
              {item}
              ,&nbsp;
            </span>
          ))}
        </h5>
        <h6 className="money-left">
          💵 Argent restant :&nbsp;
          <span data-testid="money-left">{wallet}</span>
          &nbsp;₽
          💵
        </h6>

        <Catalog
          items={items}
          boughtItems={boughtItems}
          setBoughtItems={setBoughtItems}
          wallet={wallet}
          setWallet={setWallet}
        />
      </header>
    </div>
  );
}

App.defaultProps = {
  initialAmountOfMoney: 1000,
  items: availableItems,
};

App.propTypes = {
  initialAmountOfMoney: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
  })),
};

export default App;

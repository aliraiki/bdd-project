import React, { useState } from 'react';
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
  newProduct(2, 'Super Ball', 'Small description', 400, superballImage),
  newProduct(3, 'Potion', 'Small description', 200, potionImage),
  newProduct(4, 'Reanimation', 'Small description', 250, reanimationImage),
  newProduct(5, 'Antidote', 'Small description', 150, antidoteImage),
];

function App() {
  const [boughtItems, setBoughtItems] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <div data-testid="bought-items">
          Liste des articles achetés :
          {boughtItems}
        </div>
        <Catalog items={availableItems} boughtItems={boughtItems} setBoughtItems={setBoughtItems} />
      </header>
    </div>
  );
}

export default App;

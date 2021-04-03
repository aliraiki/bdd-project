import React from 'react';
import Catalog from './components/Catalog';
import newProduct from './utils/newProduct';
import './App.css';

const availableItems = [
  newProduct(1, 'Produit 1'),
  newProduct(2, 'Produit 2'),
  newProduct(3, 'Produit 3'),
  newProduct(4, 'Produit 4'),
  newProduct(5, 'Produit 5'),
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Catalog items={availableItems} />
      </header>
    </div>
  );
}

export default App;

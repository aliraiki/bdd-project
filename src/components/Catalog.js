import React from 'react';

function Catalog({ items }) {
  return (
    items.map((item) => (
      <div key={item.name} className="item">{item.name}</div>
    ))
  );
}

export default Catalog;

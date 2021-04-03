import React from 'react';

function Catalog({ items }) {
  if (items.length === 0) return <p>Aucun article n&apos;est disponible</p>;
  return (
    items.map((item) => (
      <div key={item.id} className="item">{item.name}</div>
    ))
  );
}

export default Catalog;

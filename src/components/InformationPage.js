import React from 'react';
import PropTypes from 'prop-types';

function InformationPage({ item }) {
  return <p id="description">{item.description.substring(0, 50)}</p>;
}

InformationPage.defaultProps = {
  item: {
    id: 0,
    name: '',
    description: '',
    price: 0,
  },
};

InformationPage.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default InformationPage;

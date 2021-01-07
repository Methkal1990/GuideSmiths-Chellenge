import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.style.css';

const Card = ({ phone, history, match }) => {
  const { name, id } = phone;
  return (
    <div
      className='card-container'
      onClick={() => history.push(`${match.url}phone/${id}`)}
    >
      <div className='card-image-box'>
        <img src={phone.imageUrl} alt={`phone ${name}`} />
      </div>
      <h2>{name}</h2>
    </div>
  );
};

export default withRouter(Card);

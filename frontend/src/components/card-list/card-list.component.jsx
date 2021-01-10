import React from 'react';

import Card from '../card/card.component';

import './card-list.style.css';

const CardList = ({ phones }) => {
  return (
    <>
      {phones.length ? (
        <div className='card-list'>
          {phones.map((phone) => (
            <Card key={phone.id} phone={phone} />
          ))}
        </div>
      ) : (
        <div>No Results. Create new Phones data</div>
      )}
    </>
  );
};

export default CardList;

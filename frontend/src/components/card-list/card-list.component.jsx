import React from 'react';

import  Card  from '../card/card.component';

import './card-list.style.css';

export const CardList = ({phones}) => {
    
    return (
        <div className="card-list">
            {phones.map(phone => (
         <Card key={phone.name} phone={phone}/>
        ))}
        </div>
    );
};




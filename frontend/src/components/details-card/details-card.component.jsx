import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { LoaderLarge } from '../loader/loader.component';

import axios from 'axios';

import './details-card.style.css';

const DetailsCard = ({ match, history }) => {
  const [phone, setPhone] = useState({});
  const phoneid = match.params.phoneid;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/phones/${phoneid}`)
      .then((response) => setPhone({ ...response.data.data }));
  }, [phoneid]);

  const deletePhone = async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/phones/${id}`);
    history.push('/');
  };

  const {
    name,
    price,
    manufacturer,
    description,
    platform,
    color,
    imageUrl,
  } = phone;
  return (
    <>
      {phone ? (
        <div className='phone-card'>
          <div className='phone-card-header'>
            <div
              onClick={() => history.push(`${match.url}/edit`)}
              className='phone-card-edit'
            >
              Edit
            </div>
            <div onClick={() => deletePhone(phoneid)}>Delete</div>
            <div className='phone-card-close' onClick={() => history.push('/')}>
              X
            </div>
          </div>
          <div className='card-image-box'>
            <img src={imageUrl} alt={name} />
          </div>
          <div className='phone-card-name'>{name}</div>
          <div className='phone-card-content'>
            <div>Price : {price}</div>
            <div>Color: {color}</div>
            <div>Manufacturer: {manufacturer}</div>
            <div>Platform: {platform}</div>
            <div>Description: {description}</div>
          </div>
        </div>
      ) : (
        <LoaderLarge />
      )}
    </>
  );
};

export default withRouter(DetailsCard);

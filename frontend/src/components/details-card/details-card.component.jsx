import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { LoaderLarge } from '../loader/loader.component';

import axios from 'axios';

import './details-card.style.css';

const DetailsCard = ({ match, history }) => {
  const [phone, setPhone] = useState({});
  const [loading, setLoading] = useState(true);
  const phoneid = match.params.phoneid;

  useEffect(() => {
    axios
      .get(`/api/v1/phones/${phoneid}`)
      .then((response) => {
        setPhone({ ...response.data.data });
        setLoading(false);
      })
      .catch((err) => {
        history.push('/');
      });
  }, [phoneid]);

  const deletePhone = async (id) => {
    await axios.delete(`/api/v1/phones/${id}`);
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
      {loading ? (
        <LoaderLarge />
      ) : (
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
            <p>
              Price : <span>{price}</span>
            </p>
            <p>
              Color: <span>{color}</span>
            </p>
            <p>
              Manufacturer: <span>{manufacturer}</span>
            </p>
            <p>
              Platform: <span>{platform}</span>
            </p>
            <p>
              Description:
              <br /> <span>{description}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(DetailsCard);

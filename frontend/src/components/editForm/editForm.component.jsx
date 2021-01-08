import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './editForm.styles.css';
import { LoaderLarge } from '../loader/loader.component';

const EditForm = ({ history, phoneid }) => {
  const [phone, setPhone] = useState({});

  useEffect(() => {
    axios
      .get(`/api/v1/phones/${phoneid}`)
      .then((res) => setPhone(res.data.data));
  }, [phoneid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      color,
      manufacturer,
      platform,
      price,
      lunch,
      description,
    } = e.target;

    const updatedData = {
      name: name.value,
      color: color.value,
      platform: platform.value,
      price: parseInt(price.value),
      lunch: lunch.value,
      description: description.value,
      manufacturer: manufacturer.value,
    };
    await axios.put(
      `/api/v1/phones/${phoneid}`,
      updatedData
    );
    history.push('/');
  };

  return (
    <div>
      {phone ? (
        <form onSubmit={handleSubmit} className='form-box'>
          <div className='form__group field'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='phone name'
              value={phone.name || ''}
              onChange={(e) => setPhone({ ...phone, name: e.target.value })}
              className='form__field'
              required
            />
            <label htmlFor='name' className='form__label'>
              Name
            </label>
          </div>
          <div className='form__group field'>
            <input
              type='text'
              name='color'
              id='color'
              placeholder='phone color'
              value={phone.color || ''}
              onChange={(e) => setPhone({ ...phone, color: e.target.value })}
              className='form__field'
              required
            />
            <label htmlFor='color' className='form__label'>
              Color
            </label>
          </div>
          <div className='form__group field'>
            <input
              type='text'
              name='lunch'
              id='lunch'
              placeholder='phone lunch year'
              value={phone.lunch || ''}
              onChange={(e) => setPhone({ ...phone, lunch: e.target.value })}
              className='form__field'
              required
            />
            <label htmlFor='lunch' className='form__label'>
              Lunch
            </label>
          </div>
          <div className='form__group field'>
            <input
              type='text'
              name='manufacturer'
              id='manufacturer'
              placeholder='phone manufacturer name'
              value={phone.manufacturer || ''}
              onChange={(e) =>
                setPhone({ ...phone, manufacturer: e.target.value })
              }
              className='form__field'
              required
            />
            <label htmlFor='manufacturer' className='form__label'>
              Manufacturer
            </label>
          </div>
          <div className='form__group field'>
            <input
              type='text'
              name='platform'
              id='platform'
              placeholder='phone platform'
              value={phone.platform || ''}
              onChange={(e) => setPhone({ ...phone, platform: e.target.value })}
              className='form__field'
              required
            />
            <label htmlFor='platform' className='form__label'>
              Platform
            </label>
          </div>
          <div className='form__group field'>
            <input
              type='number'
              name='price'
              id='price'
              placeholder='phone price'
              value={phone.price || ''}
              onChange={(e) => setPhone({ ...phone, price: e.target.value })}
              className='form__field'
              required
            />
            <label htmlFor='price' className='form__label'>
              Price $
            </label>
          </div>
          <div className='form__group field textarea-margin'>
            <label htmlFor='description' className='form__label'>
              Description
            </label>
            <textarea
              name='description'
              id='description'
              value={phone.description || ''}
              onChange={(e) =>
                setPhone({ ...phone, description: e.target.value })
              }
              className='field textarea'
              required
            />
          </div>
          <input type='submit' className='submit' />
        </form>
      ) : (
        <LoaderLarge />
      )}
    </div>
  );
};

export default EditForm;

import axios from 'axios';

import './create-form.styles.css';

const CreateForm = ({ history }) => {
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

    const phone = {
      name: name.value,
      color: color.value,
      platform: platform.value,
      price: price.value,
      lunch: lunch.value,
      description: description.value,
      manufacturer: manufacturer.value,
    };

    await axios.post('/api/v1/phones', phone);
    history.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form-box'>
        <div className='form__group field'>
          <input
            type='text'
            className='form__field'
            name='name'
            id='name'
            placeholder='phone name'
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
            className='field textarea'
            required
          ></textarea>
        </div>
        <input type='submit' className='submit' />
      </form>
    </div>
  );
};

export default CreateForm;

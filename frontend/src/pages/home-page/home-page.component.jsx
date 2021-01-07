import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home-page.style.css';

import { CardList } from '../../components/card-list/card-list.component';
import { LoaderLarge } from '../../components/loader/loader.component';

const HomePage = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/phones')
      .then((response) => setPhones([...response.data.data]));
  }, []);

  return (
    <div className='home-page'>
      <h1>Phones Catalog</h1>

      {phones.length ? <CardList phones={phones} /> : <LoaderLarge />}
    </div>
  );
};

export default HomePage;
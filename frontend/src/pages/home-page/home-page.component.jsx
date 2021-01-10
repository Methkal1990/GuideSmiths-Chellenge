import React from 'react';
import axios from 'axios';
import './home-page.style.css';

import CardList from '../../components/card-list/card-list.component';
import { LoaderLarge } from '../../components/loader/loader.component';
import AddButton from '../../components/add-button/add-button.component';

const HomePage = ({ history }) => {
  const [phones, setPhones] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get('/api/v1/phones')
      .then((response) => {
        setPhones([...response.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='home-page'>
      <h1>Phones Catalog</h1>

      <AddButton history={history} />

      {loading ? <LoaderLarge /> : <CardList phones={phones} />}
    </div>
  );
};

export default HomePage;

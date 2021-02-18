import React from 'react';
import axios from 'axios';
import './home-page.style.css';

import CardList from '../../components/card-list/card-list.component';
import { LoaderLarge } from '../../components/loader/loader.component';
import AddButton from '../../components/add-button/add-button.component';
import Search from '../../components/search/search.component';

const HomePage = ({ history }) => {
  const [phones, setPhones] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    axios
      .get('/api/v1/phones')
      .then((response) => {
        setSearchTerm('');
        setPhones([...response.data.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredPhones = phones.filter((phone) =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='home-page'>
      <h1 className='home-page__title'>Phones Catalog</h1>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <AddButton history={history} />

      {loading ? <LoaderLarge /> : <CardList phones={filteredPhones} />}
    </div>
  );
};

export default HomePage;

import React from 'react';
import './search.styles.css';

const Search = ({ setSearchTerm, searchTerm }) => {
  return (
    <input
      type='search'
      className='search__input'
      placeholder='Find an awesome phone...'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;

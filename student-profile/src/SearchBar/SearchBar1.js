import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar1 = () => {
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(console.log(searchValue));
  };
  return (
    <Test>
      <input type="text" onChange={(e) => searchItems(e.target.value)} />
    </Test>
  );
};

const Test = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-height: 10vh;
  position: sticky;
  top: 0;
  input {
    width: 100%;
    padding: 1rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    outline: none;
    font-size: 30px;
  }
`;

export default SearchBar1;

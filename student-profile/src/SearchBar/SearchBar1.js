import React from 'react';
import styled from 'styled-components';

const SearchBar1 = () => {
  return (
    <Test>
      <input value="" type="text" />
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
`;

export default SearchBar1;

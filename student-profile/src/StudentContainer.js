import React from 'react';
import styled from 'styled-components';
import Student from './student';
import SearchBar1 from './SearchBar/SearchBar1';

const Container = () => {
  return (
    <StudentContainer>
      <SearchBar1 />
      <Student />
    </StudentContainer>
  );
};

const StudentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Container;

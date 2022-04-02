import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';

const Container = () => {
  return (
    <StudentContainer>
      <Profile />
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

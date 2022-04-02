import React from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import Profile from './Profile';

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile />
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export default App;

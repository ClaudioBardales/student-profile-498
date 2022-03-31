import React from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';
import StudentContainer from './StudentContainer';
function App() {
  return (
    <Container>
      <GlobalStyle />
      <StudentContainer />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export default App;

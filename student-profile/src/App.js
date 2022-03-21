import React from 'react';
import GlobalStyle from './globalStyles';
import Student from './student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalStyle />
        <Student />
      </header>
    </div>
  );
}

export default App;

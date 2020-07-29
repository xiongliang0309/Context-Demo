import React from 'react';

import HooksContext from './HooksContext';
import ClassContext from './ClassContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HooksContext />
          <ClassContext />
      </header>
    </div>
  );
}

export default App;

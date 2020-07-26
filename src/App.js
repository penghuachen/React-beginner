import React from 'react';
import './App.css';

import Person from './Person';

const App = () => {
  return (
    <div className="App">
      <Person name="Bill" age="29" />
      <Person name="Jerry" age="20" />
      <Person id="0" name="Chen" age="24">
        Test text.
      </Person>
    </div>
  );
}

export default App;

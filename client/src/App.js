import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
      </Router>
    </div>
  );
}

export default App;

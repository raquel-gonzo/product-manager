import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import UpdateProd from './views/UpdateProd';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="/:id" />
        <UpdateProd path="/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;

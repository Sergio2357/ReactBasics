import React from 'react';
import asimetrix from './images/asimetrix.png';
import './App.css';
import Tutorials from './Tutorials'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={asimetrix} />
      </header>
      <div className="container">
        <Tutorials/>
      </div>
    </div>
  );
}

export default App;

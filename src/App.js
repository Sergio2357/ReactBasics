import React from 'react';
import asimetrix from './images/asimetrix.png';
import './App.css';
import TutCard from './TutCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={asimetrix} />
      </header>
      <div className="container">
        <TutCard/>
      </div>
    </div>
  );
}

export default App;

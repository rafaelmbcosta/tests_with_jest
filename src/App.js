import React from 'react';
import './App.css';
import CountComponentFunction from './components/CountComponentFunction';
import CountComponentClass from './components/CountComponentClass';

function App() {
  return (
    <div className="App">
      <h1> Hello Jest/Enzyme </h1>
      <hr/>
      <CountComponentFunction />
      <hr/>
      <CountComponentClass />
    </div>
  );
}

export default App;

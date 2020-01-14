import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './components/Jumbotron';
import MainGameContainer from './components/MainGameContainer'

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <MainGameContainer />
    </div>
  );
}

export default App;

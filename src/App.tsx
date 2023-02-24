import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBlock from './components/MainBlock';
import SimpleSlider from './components/SimpleSlider';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <MainBlock/> */}
      <SimpleSlider/>
    </div>
  );
}

export default App;

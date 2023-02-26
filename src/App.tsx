import React from 'react';
import './App.css';
import Contant1 from './components/Contant1';
import Contant2 from './components/Contant2';
import Contant3 from './components/Contant3';
import Header from './components/Header';
//import MainBlock from './components/MainBlock';
import SimpleSlider from './components/SimpleSlider';





function App() {
    
  return (
    <div className="App">
      <Header/>
      <SimpleSlider/>
      <Contant1/>
      <Contant2/>
      <Contant3/>
    </div>
  );
}

export default App;

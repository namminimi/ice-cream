import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Join from './pages/Join';


function App() {
    
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<Join/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

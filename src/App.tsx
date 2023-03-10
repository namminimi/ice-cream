import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom';
import Join from './pages/member/Join';
import Login from './pages/member/Login';
import FindId from './pages/member/FindId';
import FindPass from './pages/member/FindPass';


function App() {
    
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<><Main/><Footer/></>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/findId' element={<FindId/>}/>
        <Route path='/findPass' element={<FindPass/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

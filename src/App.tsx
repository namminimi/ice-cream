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
import EditPass from './pages/member/EditPass';
import ProductContainer from './containers/ProductContainer';
import ProductDetailContainer from './containers/ProductDetailContainer';
import SearchContainer from './containers/SearchContainer';


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
        <Route path='/editPass' element={<EditPass/>}/>
        <Route path='/iceCreamList' element={<><ProductContainer/><Footer/></>}/>
        <Route path='/productDetail/:no' element={<><ProductDetailContainer/><Footer/></>}/>
        <Route path='/SearchPage/:title' element={<><SearchContainer/><Footer/></>}/>
      </Routes>
      
    </div>
  );
}

export default App;

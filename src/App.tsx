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
import SelectBrContainer from './containers/SelectBrContainer';
import NoticeContainer from './containers/NoticeContainer';
import WriteNotice from './pages/WriteNotice';
import NoticeDetailContainer from './containers/NoticeDetailContainer';
import EditNoticeContainer from './containers/EditNoticeContainer';
import CartContainer from './containers/CartContainer';
import MyPageContainer from './containers/MyPageContainer';
import PersonalDataContainer from './containers/PersonalDataContainer';
import AddProduct from './pages/AddProduct';


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
        <Route path='/iceCreamList/:brand' element={<><SelectBrContainer/><Footer/></>}/>
        <Route path='/notice' element={<><NoticeContainer/><Footer/></>}/>
        <Route path='/writeNotice' element={<WriteNotice/>}/>
        <Route path='/notice/:no' element={<><NoticeDetailContainer/><Footer/></>}/>
        <Route path='/editNotice/:no' element={<><EditNoticeContainer/><Footer/></>}/>
        <Route path='/myPageCart/:id' element={<><CartContainer/><Footer/></>}/>
        <Route path='/myPage/:id' element={<><MyPageContainer/><Footer/></>}/>
        <Route path='/myPageEdit/:id' element={<><PersonalDataContainer/><Footer/></>}/>
        <Route path='/addProduct' element={<><AddProduct/><Footer/></>}/>
      </Routes>
      
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rootState } from '../moduls';
import { setLogin, setLogOut } from '../moduls/loginM';
import { getCookie, removeCookie } from '../util/cookie';
import { get_select } from '../moduls/brand';
//import "./Header.scss"


const HeaderDiv = styled.header`
    width:100%;
    background-color: #fff;
    position: fixed;
    top:0;
    left: 0;
    font-size: 18px;
    z-index: 2;
    .logo{
        width: 10%;
        margin: 8px auto;
        img{
            width: 100%;
        }
    }
`
const NavDiv = styled.div`
    display:flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    align-items: center;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    padding: 0px 60px;
    .menu{
        display: flex;
        justify-content: space-between;
        width: 15%;
        margin-left: 50px;
        @media screen and (max-width: 1450px) {
            width: 20%;  
        }
        @media screen and (max-width: 1200px) {
            width: 22%;  
            margin-left: 0px 
        }
       
        li{
            list-style: none;
        }
        .navList {
            position: relative;
            width: 100px;
            height: 20px;
            text-align: center;
            cursor: pointer;
            ul{
                width: 100px;
                position: absolute;
                opacity: 0;
                top: -100px;
                left: 0;
                transition: 0.8s;
                
                li{
                    padding: 10px 5px;
                    font-size: 16px;
                    cursor: pointer;
                    &:hover{
                        background-color: #ccc;
                        color:black;
                    }
                }
            }
            &:hover {
                    .productBrand{
                        background-image: linear-gradient(to top, #fdfbfb 0%, #ebedee 100%);
                        opacity: 1;
                        top: 35px;
                    }
                }
        
        }
    }
    .join{
        display: flex;
        justify-content: space-between;
        width: 15%;
        margin-right: 10px;
        
        li{
            list-style: none;
            cursor: pointer;
            ul{
                width: 100px;
                position: absolute;
                opacity: 0;
                z-index: 1;
                top: 50px;
                right: 240px;
                transition: 0.8s;
                li{
                    padding: 10px 5px;
                    font-size: 16px;
                    cursor: pointer;
                    
                    &:hover{
                        background-color: #ccc;
                        color:black;
                    }
                }
            }
            &:hover ul{
                background-image: linear-gradient(to top, #fdfbfb 0%, #ebedee 100%);
                opacity: 1;
                top: 150px;
                }
        }
        li:not(:nth-child(1)) {
            cursor: pointer;
        }
    }
    .join2{
        display: flex;
        justify-content: space-between;
        width: 10%;
        margin-right: 10px;
        @media screen and (max-width: 1450px) {
            width: 13%;  
        }
        @media screen and (max-width: 1200px) {
            width: 17%;  
        }
        li{
            list-style: none;
            
        }
        li:not(:nth-child(1)) {
            cursor: pointer;
        }
    }
`;

const Header = () => {
    const {isLogin} = useSelector((state : rootState )=>state.loginM)
    const onToggle = (brandList:string) => dispatch(get_select(brandList))
    const username = getCookie("userNickName")
    const userId = getCookie("userId")
    const dispatch = useDispatch();
    const logoutClick = ()=>{
        removeCookie('userNickName')
        removeCookie('userId')
        dispatch(setLogOut())
        alert("로그아웃")
    }
    useEffect(()=>{
        const loop = setInterval(()=>{
            if(username){
                dispatch(setLogin())
            }else {
                dispatch(setLogOut())
                clearInterval(loop)
            }
        }, 3000)
    },[username, dispatch])
    return (
        <HeaderDiv>
            <div className='logo'>
                <Link to="/"><img src="images/logo4.png"></img></Link>
            </div>
            <NavDiv >
                <ul className='menu' >
                    <li><Link to="/">홈</Link></li>
                    <li className='navList'>
                        <div className='productList' >제품</div>
                        <ul className='productBrand'>
                            <li value="전체" onClick={()=>onToggle("전체")}><Link to="/iceCreamList/전체">전체</Link></li>
                            <li value="롯대제과" onClick={()=>onToggle("롯대제과")}><Link to="/iceCreamList/롯대제과">롯대제과</Link></li>
                            <li value="빙그레" onClick={()=>onToggle("빙그레")}><Link to="/iceCreamList/빙그레">빙그레</Link></li>
                            <li value="해태" onClick={()=>onToggle("해태")}><Link to="/iceCreamList/해태">해태</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/notice">공지사항</Link></li>
                </ul>
                <ul className= {isLogin && username ? 'join' : 'join2'}>
                    { isLogin && username ? 
                    <>
                        <li>
                            <div>{username}님 반갑습니다</div>
                            <ul>
                                <li onClick={logoutClick}>로그아웃</li>
                                <li><Link to={`/mypage/${userId}`}>마이페이지</Link></li>
                                <li><Link to={`/myPageCart/${userId}`}>장바구니</Link></li>
                            </ul>
                        </li>   
                        {isLogin && userId == "admin" ? <li><Link to='/addProduct'>상품등록</Link></li> : null}
                    </>:
                    <>
                        <li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li> 
                    </>
                }
                </ul>
            </NavDiv>
        </HeaderDiv>
    );
};

export default Header;
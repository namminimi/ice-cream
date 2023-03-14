import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rootState } from '../moduls';
import { setLogin, setLogOut } from '../moduls/loginM';
import { getCookie, removeCookie } from '../util/cookie';
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
        width: 25%;
        li{
            list-style: none;
        }
        .navList {
            position: relative;
            width: 100px;
            text-align: center;
            cursor: pointer;
            ul{
                width: 100px;
                position: absolute;
                opacity: 0;
                z-index: 1;
                top: -20px;
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
            &:hover ul{
                background-image: linear-gradient(to top, #fdfbfb 0%, #ebedee 100%);
                opacity: 1;
                top: 35px;
                }
        }
    }
    .join{
        display: flex;
        justify-content: space-between;
        width: 10%;
        margin-right: 10px;
        li{
            list-style: none;
            cursor: pointer;
        }
    }
`;

const Header = () => {
    const {isLogin} = useSelector((state : rootState )=>state.loginM)
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
                        <Link to="/iceCreamList"><div>제품</div></Link> 
                        <ul>
                            <li>롯데제과</li>
                            <li>빙그레</li>
                            <li>해테</li>
                        </ul>
                    </li>
                    <li>공지사항</li>
                </ul>
                <ul className='join'>
                    { isLogin && username ? 
                    <>
                        <li onClick={logoutClick}>로그아웃</li>
                        {isLogin && userId == "admin" ? <li>상품등록</li> : <li>마이페이지</li>}
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
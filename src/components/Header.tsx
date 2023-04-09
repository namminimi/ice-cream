import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rootState } from '../moduls';
import { setLogin, setLogOut } from '../moduls/loginM';
import { getCookie, removeCookie } from '../util/cookie';
import { get_select } from '../moduls/brand';
import { get_myPage_select } from '../moduls/myPage';
//import "./Header.scss"


const HeaderDiv = styled.header`
    width:100vw;
    background-color: #fff;
    position: fixed;
    top:0;
    left: 0;
    font-size: 18px;
    z-index: 2;
    .logo{
        width: 10%;
        height: 80px;
        margin: 8px auto;
        @media screen and ( max-width: 1582px) {
            width: 15%;
        }
        @media screen and ( max-width: 1260px) {
            width: 15%;
        }
        @media screen and (max-width: 1006px) {
            width: 25%;
        }
        @media screen and (max-width: 762px) {
            width: 25%;
        }
        @media screen and (max-width: 622px) {
            width: 40%;
        }
        @media screen and (max-width: 476px) {
            width: 40%;
        }
        img{
            max-width: 100%;
        }
    }
`
const NavDiv = styled.div`
    display:flex;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    padding: 0px 60px;
    @media screen and (max-width: 1260px) {
            padding: 0px 30px;   
        }
    @media screen and (max-width: 476px) {
            padding: 0px 20px;  
        }   
    .menu{
        display: flex;
        justify-content: space-between;
        width: 15%;
        margin-left: 50px;
        @media screen and (max-width: 1582px) {
            width: 20%;  
        }
        @media screen and (max-width: 1260px) { 
            width: 25%;  
            margin-left: 0px 
        }
        @media screen and (max-width: 1006px) {
            width: 30%;
        }
        @media screen and (max-width: 762px) {
            width: 35%;
        }
        @media screen and (max-width: 622px) {
            width: 40%;
        }
        @media screen and (max-width: 476px) {
            width: 45%;
        }
        li{
            list-style: none;
            @media screen and (max-width: 622px) {
                font-size: 15px;
            }
            @media screen and (max-width: 476px) {
                font-size: 15px;
            } 
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
                @media screen and (max-width: 476px) {
                    width: 70px;
                    left: 15px;
                }
                li{
                    padding: 10px 5px;
                    font-size: 16px;
                    cursor: pointer;
                    &:hover{
                        background-color: #ccc;
                        color:black;
                    }
                    
                    @media screen and (max-width: 476px) {
                        font-size: 14px;
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
        width: 13%;
        align-items: center;
        @media screen and (max-width: 1582px) {
            width: 13%;  
        }
        @media screen and (max-width: 1260px) {
            width: 15%;
            margin-right: 0px;  
        }
        @media screen and (max-width: 1006px) {
            width: 18%;
        }
        @media screen and (max-width: 762px) {
            width: 25%;
        }
        @media screen and (max-width: 622px) {
            width: 25%;
        }
        @media screen and (max-width: 476px) {
            width: 30%;
        } 
        li{
            list-style: none;
            cursor: pointer;
            @media screen and (max-width: 622px) {
                font-size: 15px;
            }
            @media screen and (max-width: 476px) {
                font-size: 14px;
            }
            div {
                width: 80%;
                @media screen and (max-width: 1582px) {
                    width: 90%;  
                }
            } 
            .joinList{
                width: 100px;
                position: absolute;
                opacity: 0;
                z-index: 1;
                top: 50px;
                right: 200px;
                transition: 0.8s;
                @media screen and (max-width: 1582px) {
                    right: 160px  
                }
                @media screen and (max-width: 1260px) {
                    right: 120px
                }
                @media screen and (max-width: 1006px) {
                    right: 110px
                }
                @media screen and (max-width: 762px) {
                    right: 120px
                }
                @media screen and (max-width: 622px) {
                    right: 100px;
                    width: 80px;
                }
                @media screen and (max-width: 476px) {
                    right: 80px;
                    width: 80px;
                } 
                li{
                    padding: 10px 5px;
                    font-size: 16px;
                    text-align: center;
                    cursor: pointer;
                    @media screen and (max-width: 622px) {
                        font-size: 14px;
                    }
                    @media screen and (max-width: 476px) {
                        font-size: 14px;
                    }  
                    &:hover{
                        background-color: #ccc;
                        color:black;
                    }
                }
            }
            &:hover ul{
                background-image: linear-gradient(to top, #fdfbfb 0%, #ebedee 100%);
                opacity: 1;
                top: 145px;
                }
        }
        li:not(:nth-child(1)) {
            cursor: pointer;
        }
        .joinList2 {
            width: 70%;
        }
    }
    .join2{
        display: flex;
        justify-content: space-between;
        width: 10%;
        margin-right: 10px;
        @media screen and (max-width: 1582px) {
            width: 15%;  
        }
        @media screen and (max-width: 1260px) {
            width: 14%;
            margin-right: 0px;  
        }
        @media screen and (max-width: 1006px) {
            width: 20%;
        }
        @media screen and (max-width: 762px) {
            width: 25%;
        }
        @media screen and (max-width: 622px) {
            width: 25%;
        }
        @media screen and (max-width: 476px) {
            width: 30%;
        } 
        li{
            list-style: none;
            @media screen and (max-width: 622px) {
                font-size: 15px;
            } 
            @media screen and (max-width: 476px) {
                font-size: 15px;
            }  
        }
        li:not(:nth-child(1)) {
            cursor: pointer;
        }
    }
`;

const Header = () => {
    const {isLogin} = useSelector((state : rootState )=>state.loginM)
    const onToggle = (brandList:string) => dispatch(get_select(brandList))
    const onToggle2 = (id:number) => dispatch(get_myPage_select(id))
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
                            <ul className='joinList'>
                                <li onClick={logoutClick}>로그아웃</li>
                                <li onClick={()=>onToggle2(2)}><Link to={`/mypage/${userId}`}>마이페이지</Link></li>
                                <li onClick={()=>onToggle2(1)}><Link to={`/myPageCart/${userId}`}>장바구니</Link></li>
                            </ul>
                        </li>   
                        {isLogin && userId == "admin" ? <li className='joinList2'><Link to='/addProduct'>상품등록</Link></li> : null}
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
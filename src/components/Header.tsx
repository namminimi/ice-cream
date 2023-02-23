import React from 'react';
import styled from 'styled-components';
//import "./Header.scss"

const HeaderDiv = styled.header`
    width:100%;
    background-color: #fff;
    position: fixed;
    height: 150px;
    top:0;
    left: 0;
    font-size: 18px;
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
    }
    .join{
        display: flex;
        justify-content: space-between;
        width: 10%;
        margin-right: 10px;
        li{
            list-style: none;
        }
    }
`;
const Header = () => {
    return (
        <HeaderDiv>
            <div className='logo'>
                <img src="images/logo4.png"></img>
            </div>
            <NavDiv >
                <ul className='menu'>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>공지사항</li>
                </ul>
                
                <ul className='join'>
                    <li>회원가입</li>
                    <li>로그인</li>
                </ul>
            </NavDiv>
        </HeaderDiv>
    );
};

export default Header;
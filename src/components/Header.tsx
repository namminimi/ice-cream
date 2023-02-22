import React from 'react';
import "./Header.scss"


const Header = () => {
    return (
        <header>
            <div>
                <img src="images/logo.jpg"></img>
            </div>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>공지사항</li>
            </ul>
            <ul>
                <li>회원가입</li>
                <li>로그인</li>
            </ul>
        </header>
    );
};

export default Header;
import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img
                src='https://st.depositphotos.com/1757583/2169/i/450/depositphotos_21696885-stock-photo-yin-yang-symbol.jpg'/>

            <div className={style.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
import React from 'react';
import styles from './Navbar.module.css'
import { NavLink, useLocation } from 'react-router-dom';
const Navbar = () => {
    const { pathname } = useLocation()
    const bool = pathname.split('/').includes('favorites');
    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar_wrapper}>
                <NavLink className="link" to="/" >
                    НА ГЛАВНУЮ
                    {/* <img src="./icons/cake.png" alt="" className={`${styles.navbar_link_img}`} /> */}
                </NavLink>
                <NavLink className="link" to="/children">ДЕТСКИЕ</NavLink>
                <NavLink className="link" to="/birthday">НА ДЕНЬ РОЖДЕНИЯ</NavLink>
                <NavLink className="link" to="/annivarsary">НА ЮБИЛЕЙ</NavLink>
                <NavLink className="link" to="/wedding">СВАДЕБНЫЕ</NavLink>
                <NavLink className="link" to="/festive">ПРАЗДНИЧНЫЕ</NavLink>
                <NavLink className="link" to="/corporate">КОРПОРОТИВНОЕ</NavLink>
                <NavLink className="link" to="/bento">БЕНТО</NavLink>
            </div>
            <div className={styles.favorites_wrapper}>
                <NavLink to="favorites">
                    <img src={`../icons/${bool ? "heart_black" : "heart_grey"}.png`} alt="" />
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;

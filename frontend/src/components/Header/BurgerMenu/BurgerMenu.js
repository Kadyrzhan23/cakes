import React from 'react';
import styles from './BurgerMenu.module.css'
import { NavLink } from 'react-router-dom';
const BurgerMenu = ({toggle , setToggle}) => {
    return (
        <div className={`${styles.wrapper} ${toggle ? styles.burger_active : ''}`}>
            <NavLink to="/" className="burger-link" onClick={()=> setToggle(!toggle)}>
                <div className={styles.item}>
                <div className={styles.item_title}>НА ГЛАВНУЮ</div>
                    <div className={styles.item_img}>
                        <img src="../icons/links/main.png" alt="" />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/children" className="burger-link" onClick={()=> setToggle(!toggle)}>
                <div className={styles.item}>
                    <div className={styles.item_title}>ДЕТСКИЕ</div>
                    <div className={styles.item_img}>
                        <img src="../icons/links/children.png" alt="" />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/birthday" className="burger-link" onClick={()=> setToggle(!toggle)}>
                <div className={styles.item}>
                <div className={styles.item_title}>НА ДЕНЬ РОЖДЕНИЯ</div>
                    <div className={styles.item_img}>
                        <img src="../icons/links/birthday.png" alt="" />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/annivarsary" className="burger-link" onClick={()=> setToggle(!toggle)}>
                <div className={styles.item}>
                <div className={styles.item_title}>НА ЮБИЛЕЙ</div>
                    <div className={styles.item_img}>
                        <img src="../icons/links/anniversary.png" alt="" />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/wedding" className="burger-link" onClick={()=> setToggle(!toggle)}>
                <div className={styles.item}>
                <div className={styles.item_title}>СВАДЕБНЫЕ</div>
                    <div className={styles.item_img}>
                        <img src="../icons/links/wedding.png" alt="" />
                    </div>
                </div>
            </NavLink>
            <NavLink to="festive" className="burger-link" onClick={()=> setToggle(!toggle)}>
                <div className={styles.item}>
                <div className={styles.item_title}>ПРАЗДНИЧНЫЕ</div>
                    <div className={styles.item_img}>
                        <img src="../icons/links/festive.png" alt="" />
                    </div>
                </div>
            </NavLink>
            <NavLink to="/corporate" className="burger-link" onClick={()=> setToggle(!toggle)}>
                <div className={styles.item}>
                <div className={styles.item_title}>КОРПОРОТИВНОЕ</div>
                    <div className={styles.item_img}>
                        <img src="../icons/links/korporative.png" alt="" />
                    </div>
                </div>
            </NavLink>
            <NavLink to="bento" className="burger-link" onClick={()=> setToggle(!toggle)}>
                <div className={styles.item}>
                <div className={styles.item_title}>БЕНТО</div>
                    <div className={styles.item_img}>
                        <img src="../icons/links/bento.png" alt="" />
                    </div>
                </div>
            </NavLink>
            
        </div>
    );
}

export default BurgerMenu;

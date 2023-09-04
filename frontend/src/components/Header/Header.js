import React from 'react';
import styles from './Header.module.css'
import Navbar from './Navbar/Navbar';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu/BurgerMenu';
const Header = () => {
    const [burgerBool, setBurgerBool] = useState(false)
    function burgerToggle() {
        setBurgerBool(!burgerBool)
    }
    return (
        <div className={styles.wrapper}>
            <BurgerMenu toggle={burgerBool} setToggle={setBurgerBool}/>
            <div 
            className={`${burgerBool ? styles.burger_is_active_wrapper : ''}`}
            onClick={()=> burgerToggle()}>

            </div>
            <div className={styles.top}>
                <p className={styles.top_text}>При заказе до 500 000cум - предоплата не нужно
                    <img src="./icons/heart.png" alt="" className={styles.top_image} />
                </p>
            </div>
            <div className={styles.centre}>
                <div
                    className={styles.centre_left}
                    onClick={() => burgerToggle()}>  {/* кнопка бургера */}
                    <div className={styles.burger_btn_wrapper}>
                        <div className={`${styles.burger_btn_item} ${burgerBool ? styles.burger_active : ''}`}></div>
                        <div className={`${styles.burger_btn_item} ${burgerBool ? styles.burger_active : ''}`}></div>
                        <div className={`${styles.burger_btn_item} ${burgerBool ? styles.burger_active : ''}`}></div>
                    </div>
                </div>
                <div className={styles.logo_wrapper}>
                    <img src="./icons/cake-lab.svg" alt="" />
                </div>
                <div className={styles.centre_right}>
                    <div className={styles.toggle_modal}>
                        <a href="#">Вам презвонить?</a>
                    </div>
                    <div className={styles.contacts_wrapper}>
                        <a href='tel:+74999554899' className={styles.contacts_left}>
                            <img src="./icons/call.png" alt="" />
                        </a>
                        <div className={styles.contacts_right}>
                            <p className={styles.contacts_title}>
                                с 10.00 до 20.00 без выходных
                            </p>
                            <a className={styles.contacts_tel} href="tel:+74999554899"> +7 (499) 955-48-99</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <Navbar />
            </div>
        </div>
    );
}

export default Header;

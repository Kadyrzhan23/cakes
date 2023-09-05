import React from 'react';
import styles from './Section_03.module.css'
import { NavLink } from 'react-router-dom'
const Section03 = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <div className={styles.top}>
                    ВЫГОДНО
                </div>
                <div className={styles.center}>
                    Попробуй торт <br /> перед заказом бесплатно
                </div>
                <NavLink to="#">
                    <div className={styles.bottom}>
                        ХОЧУ НА ДЕГУСТАЦИЮ
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Section03;

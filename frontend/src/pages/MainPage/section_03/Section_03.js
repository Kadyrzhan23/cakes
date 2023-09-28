import React from 'react';
import styles from './Section_03.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
const Section03 = () => {
    const navigate = useNavigate()
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
                    <div 
                    onClick={()=> navigate('/tasting')}
                    className={styles.bottom}>
                        ХОЧУ НА ДЕГУСТАЦИЮ
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Section03;

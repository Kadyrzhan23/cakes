import React from 'react';
import styles from './Footer.module.css'
const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Контакты</p>
            <div className={styles.info}>
                <div className={styles.rows}><p className={styles.name}>Телефон:</p> <a href='tel:+74999554992' className={styles.text}>+7 (499) 955-49-92</a></div>
                <div className={styles.rows}><p className={styles.name}>Адрес:</p> <p className={styles.text}> Москва , ул. Мясницкая, 13,стр. 18, м. Чистые пруды</p></div>
                <div className={styles.rows}><p className={styles.name}>Электронная почта:</p> <p className={styles.text}>info@cakes.ru</p></div>
                <div className={styles.rows}><p className={styles.name}>Время работы:</p> <p className={styles.text}>Ежедневно с 10.00-20.00 <b >Без выходных</b> </p></div>
            </div>
        </div>
    );
}

export default Footer;
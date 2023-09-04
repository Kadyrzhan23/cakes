import React from 'react';
import styles from './MainPage.module.css'
import Top from './Top/Top';
import Section01 from './section_01/Section_01';
const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Top/>
            <Section01/>
        </div>
    );
}

export default MainPage;

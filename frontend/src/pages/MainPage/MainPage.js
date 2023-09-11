import React from 'react';
import styles from './MainPage.module.css'
import Top from './Top/Top';
import Section01 from './section_01/Section_01';
import Section02 from './section_02/Section_02';
import Section03 from './section_03/Section_03';
import Section04 from './section_04/Section_04';
import Section05 from './section_05/Section_05';
const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Top/>
            <Section01/>
            <Section02/>
            <Section03/>
            <Section04/>
            <Section05/>
        </div>
    );
}

export default MainPage;

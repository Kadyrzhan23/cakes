import React from 'react';
import styles from './BirthdayCakes.module.css'
import { useEffect } from 'react';
import Section01 from './section-01/section_01';
import Section02 from './section-02/section_02';
const BirthdayCakes = () => { //День рождения
    useEffect(()=>{
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 1);
    },[])
    return ( 
        <div className={styles.wrapper}>
            <Section01/>
            <Section02/>
        </div>
    );
}

export default BirthdayCakes;

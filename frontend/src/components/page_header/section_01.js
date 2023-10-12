import React from 'react';
import styles from './section_01.module.css'
const Section01 = ({title,text,background}) => {
    return (
        <div 
        className={styles.wrapper}
        style={{background:`url(${background})no-repeat center top`}}
        >
            <div className={styles.parent}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.text}>
                    {text}
                </div>
            </div>
        </div>
    );
}

export default Section01;

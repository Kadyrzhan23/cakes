import React from 'react';
import styles from './Cake.module.css';
import { useLocation } from 'react-router-dom';
const Cake = () => {
    const location = useLocation().state
    const img = location.img.split('').filter((img,index)=> index !== 0 && true).join('')
    console.log(img)
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.left_in_left}
                style={{background:`url(http://localhost:3000${img})`}}>
                    
                </div>
                <div className={styles.left_in_right}>

                </div>
            </div>
            <div className={styles.right}>

            </div>
        </div>
    );
}

export default Cake;

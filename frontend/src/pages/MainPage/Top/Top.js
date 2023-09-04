import React, { useEffect } from 'react';
import styles from './Top.module.css'
const Top = () => {


    async function getImagesTop() {
        let res = await fetch('/api?query=7')
        let data = await res.json()
        console.log(data)
    }
    useEffect(() => {
        // getImagesTop()
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.desktop_ultrawide}>
                <div className={styles.left}>
                    <div className={styles.left_top}>

                    </div>
                    <div className={styles.left_bottom}>

                    </div>
                </div>
                <div className={styles.right}>

                </div>
            </div>
            <div className={styles.desktop}>

            </div>

        </div>
    );
}

export default Top;

import React from 'react';
import styles from './section_06.module.css'
import { useState } from 'react';
const Section06 = () => {
    const [switchState, setSwitchState] = useState(false)
    return (
        <div className={styles.wrapper}>

            {
                switchState ?
                    <div className={styles.top_wrapper} >
                        <div className={styles.discount_card}>
                            <div className={styles.discount_title}>
                                <div className={styles.title}>КАРТА СО СКИДКОЙНА ПОВТОРНЫЙ ЗАКАЗ</div>
                                <div className={styles.text}>Выдается каждому клиенту</div>
                            </div>
                            <div className={styles.discount_image}>
                                <img src="./pages/main/section-06/discount-card.png" alt="" />
                            </div>
                        </div>
                    </div> :
                    <div className={styles.bottom_wrapper}>
                        <div className={styles.insta_slide}>
                            <div className={styles.insta_slide_item}>
                                <p>ПОДПИСЫВАЙТЕСЬ НА НАШ ИНСТАГРАМ</p>
                                <a href="https://www.instagram.com/_cakes.ru/" target='_blanc'>@cakes.ru</a>
                            </div>
                        </div>
                    </div>
            }
            <div className={styles.bottom}>
                <div className={styles.switch_wrapper}>
                    <div
                        className={`${styles.switch} ${switchState && styles.switch_active}`}
                        onClick={() => setSwitchState(true)}>
                    </div>
                    <div
                        className={`${styles.switch} ${!switchState && styles.switch_active}`}
                        onClick={() => setSwitchState(false)}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section06;

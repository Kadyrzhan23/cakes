import React from 'react';
import styles from './Section_02.module.css'
const Section02 = () => {
    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.body}> */}


            <div className={styles.top}>
                <div className={styles.top_item}>ПОСТОЯННЫЕ СКИДКИ</div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom_item}>
                    <div className={styles.bottom_item_top}>
                        <img src="https://cakes.ru/wp-content/themes/cakes/images/permanent-discounts/icon-zakaz.png" alt="" />
                    </div>
                    <div className={styles.bottom_item_bottom}>
                        <div>
                            <p className={styles.bottom_title}>ЗАБЛАГОВРЕМЕННЫЙ ЗАКАЗ</p>
                            <p className={styles.bottom_text}>Если вы делаете заказ торта за 20 дней</p>
                            <p className={styles.bottom_text}>и более, мы предоставим скидку 3%</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom_item}>
                    <div className={styles.bottom_item_top}>
                        <img src="https://cakes.ru/wp-content/themes/cakes/images/permanent-discounts/icon-weight.png" alt="" />
                    </div>
                    <div className={styles.bottom_item_bottom}>
                        <div className={styles.div}>
                            <p className={styles.bottom_title}>СКИДКИ ПО ВЕСУ</p>
                            <p className={styles.bottom_text}>Скидка - 500р при заказе торта 6 кг</p>
                            <p className={styles.bottom_text}>Скидка - 900р при заказе торта 8 кг</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom_item}>
                    <div className={styles.bottom_item_top}>
                        <img src="https://cakes.ru/wp-content/themes/cakes/images/permanent-discounts/icon-night.png" alt="" />
                    </div>
                    <div className={styles.bottom_item_bottom}>
                        <div>
                            <p className={styles.bottom_title}>СКИДКА В НОЧНОЕ ВРЕМЯ</p>
                            <p className={styles.bottom_text}>Скидка 2% при заказе</p>
                            <p className={styles.bottom_text}>с 20.00 до 09.00</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default Section02;

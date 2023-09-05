import React from 'react';
import styles from './Section_01.module.css'
const Section01 = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.desktop}>

                <div className={styles.top}>
                    <div className={styles.top_item}>
                        <div className={styles.top_item_body}>
                            <div className={styles.top_item_left}>
                                <p className={styles.top_item_title}>30</p>
                                <p className={styles.top_item_text}>доллар</p>
                            </div>
                            <div className={styles.top_item_right}>
                                <div className={styles.top_item_title}>
                                    СТОИМОСТЬ ЗА 1КГ
                                </div>
                                <div className={styles.top_item_text}>
                                    Минимальный вес торта - 2кг
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.top_item}>
                        <div className={styles.top_item_body}>
                            <div className={styles.top_item_left}>
                                <p className={styles.top_item_title}>1-2</p>
                                <p className={styles.top_item_text}>дня</p>
                            </div>
                            <div className={styles.top_item_right}>
                                <div className={styles.top_item_title}>
                                    СРОК ИЗГОТОВЛЕНИЯ
                                </div>
                                <div className={styles.top_item_text}>
                                    Любых тортов
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.top_item}>
                        <div className={styles.top_item_body}>
                            <div className={styles.top_item_left}>
                                <p className={styles.top_item_title}>0</p>
                                <p className={styles.top_item_text}>доллар</p>
                            </div>
                            <div className={styles.top_item_right}>
                                <div className={styles.top_item_title}>
                                    БЕСПЛАТНАЯ ДОСТАВКА
                                </div>
                                <div className={styles.top_item_text}>
                                    Для тортов от 5кг
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.centre}>
                    <div className={styles.centre_item}></div>
                    <div className={styles.centre_item}></div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottom_item}></div>
                    <div className={styles.bottom_item}></div>
                    <div className={styles.bottom_item}></div>
                </div>
            </div>
        </div>
    );
}

export default Section01;

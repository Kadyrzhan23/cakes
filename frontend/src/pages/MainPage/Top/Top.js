import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Top.module.css'
const Top = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.wrapper}>
            <div className={styles.desktop_ultrawide}>
                <div className={styles.left}>
                    <div className={styles.left_top}>
                        <div className={styles.left_top_in}>
                            <div className={styles.item_a}>
                                <div className={styles.title}>
                                    Видео
                                </div>
                                <div className={styles.text}>
                                    тортов, которое <br /> мы сделали
                                </div>
                            </div>
                            <div
                                className={styles.item_b}
                                onClick={() => navigate('/video-tortov')}>
                                ПЕРЕЙТИ
                            </div>
                        </div>
                    </div>
                    <div className={styles.left_bottom}>
                        <div className={styles.left_bottom_in}>
                            <div className={styles.item_c}>
                                <div className={styles.title}>
                                    Подборки
                                </div>
                                <div className={styles.text}>
                                    тортов на разные поводы
                                </div>
                            </div>
                            <div
                                className={styles.item_d}
                                onClick={() => navigate('/podborki')}>
                                ПЕРЕЙТИ
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_in}>
                        <div className={styles.title}>
                            -20%
                        </div>
                        <div className={styles.text}>
                            Вкусный торт <br />
                            на заказ с доставкой <br />
                            до вашей двери
                        </div>
                        <div
                            className={styles.btn}
                            onClick={() => navigate('/sale')}>
                            ПЕРЕЙТИ
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.desktop}>
                <div className={styles.desktop_in}>
                    <div className={styles.title}>20%</div>
                    <div className={styles.text}>Вкусный торт на заказ<br />
                        с доставкой до вашей двери</div>
                <div className={styles.btn}>
                    ПЕРЕЙТИ
                </div>
                </div>
            </div>

        </div>
    );
}

export default Top;

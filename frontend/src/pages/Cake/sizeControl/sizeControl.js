import React from 'react';
import styles from './sizeControl.module.css'
const SizeControl = ({ bool, setBool, imgPath, tier, selectedSize, setSeledSize }) => {
    const sizes = [2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    function btnToggle() {
        setBool(!bool)
    }
    return (
        <div className={styles.wrapper}>
                <div className={styles.block_control}>
                    <div
                        className={styles.sizes_btn_wrapper}
                        style={{ left: `${bool ? 0 : -266}px` }}>
                        {
                            sizes.map((size, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            tier === 1 && index === 3 || tier > 1 && index === 7 ? <div
                                                className={`${styles.large_btn_control} ${selectedSize === index ? styles.selected_size : ''}`}
                                                onClick={() => setSeledSize(index)}>
                                                <div className={styles.large_text}>{size} кг</div>
                                                <div className={styles.small_text}>на фото</div>
                                            </div> : <div
                                                className={`${styles.btn_control} ${selectedSize === index ? styles.selected_size : ''}`}
                                                onClick={() => setSeledSize(index)}
                                            >
                                                <div className={styles.large_text}>{size}</div>
                                                <div className={styles.small_text}>кг</div>
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                        {/* <img
                            src={`${window.location.origin}/pages/cake/check-mark.png`}
                            alt=""
                            className={`${styles.check_mark}`} /> */}
                    </div>
                </div>
                <div
                    className={styles.btn_control_btn}
                    onClick={() => btnToggle()}>
                    <img
                        style={{ transform: `rotate(${bool ? 180 : 360}deg)` }}
                        src={`${imgPath}/pages/cake/arrow.png`}
                        alt="" />
                </div>
            </div>
    );
}

export default SizeControl;


import React from 'react';
import styles from './change_filling_popup.module.css'
import { useState } from 'react';
const ChangeFillingPopup = ({arr , setSelectedFilling}) => {
    const [selectedCard, setSelectredCard] = useState(1)
    function changeFilling() {
        setSelectedFilling(arr[selectedCard])
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.left}>
                {
                    arr.map((btn, index) => {
                        return (
                            <div key={index}
                                className={`${styles.btn} ${selectedCard === index && styles.btn_active}`}
                                onClick={() => setSelectredCard(index)}>
                                {btn.title}
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.right}>
                <div className={styles.selected_image}
                    style={{ backgroundImage: `url(${window.location.origin}/pages/cake/fillings${arr[selectedCard].bigImagePath})` }}>
                        <div className={styles.row}>
                            <p className={styles.card_title}>{arr[selectedCard].title}</p>
                            <button onClick={()=> changeFilling()}
                            className={styles.change_btn}>
                                ВЫБРАТЬ
                                </button>
                        </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.text_1}>
                        <span className={styles.title}>
                            Описания:
                        </span>
                        {arr[selectedCard].description}
                    </div>
                    <div className={styles.text_2}>
                        <span className={styles.title}>
                            Состав:
                        </span>
                        {arr[selectedCard].compound}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChangeFillingPopup;

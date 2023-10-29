import React from 'react'
import styles from './choose_filling.module.css'
import { useState } from 'react'
export default function Choose_filling({ setBool, arr, setArr, setSelectedFilling, setFillingPopup }) {
    // const fillings = 
    function go() {
        let res = [...arr]
        const temp = res.splice(0, 1)
        res.push(temp[0])
        setArr(res)
        setSelectedFilling(res[1])
    }

    function to() {
        let res = [...arr]
        const temp = res.splice(res.length - 1, 1)
        res.unshift(temp[0])
        setArr(res)
        setSelectedFilling(res[1])
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.header_title}>
                    Выберите начинку:
                </p>
                <p className={styles.header_text}
                    onClick={() => setBool(true)}>
                    Все начинки
                </p>
            </div>
            <div className={styles.images_wrapper}>
                <div className={styles.images_body}>
                    {
                        arr.map((image, index) => {
                            return (<div
                                key={index}
                                className={`${styles.card} ${index === 1 && styles.selected_card}`}
                                style={{ backgroundImage: `url(${`http://localhost:3000/pages/cake/fillings/${image.path}`})` }}>
                                {
                                    index === 1 && <>
                                        <button onClick={() => to()}
                                            className={`${styles.slide_btn} ${styles.btn_left_slide}`} >
                                            <img
                                                src={`${window.location.origin}/pages/cake/arrow-left.png`}
                                                alt="" />
                                        </button>
                                        <button onClick={() => go()}
                                            className={`${styles.slide_btn} ${styles.btn_right_slide}`} >
                                            <img
                                                src={`${window.location.origin}/pages/cake/arrow-right.png`}
                                                alt="" />
                                        </button>
                                        {
                                            index === 1 && <div className={styles.card_title_wrapper}>
                                                {image.title}
                                                <div
                                                onClick={()=> setFillingPopup(true)} className={styles.link}>Подробнее {`>`}</div>
                                            </div>
                                        }
                                    </>
                                }
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import styles from './Block_right.module.css'
import { useState } from 'react'
export default function Block_right({ data }) {
    //listing-do  listing-ot
    const [bool, setBool] = useState(false)
    const left_background = `${window.location.origin}/pages/cake/listing-${bool ? 'ot' : 'do'}.png`
    let arr = [
        {title:'ОФОРМЛЕНИЕ',text:'как на фото'},
        {title:'НАЧИНКА',text:'по выбору'},
        {title:'ФИГУРКИ',text:'как на торте'},
        {title:'УПАКОВКА',text:'бесплатно'},
        {title:'ФОТО',text:'перед доставкой'}
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <p className={styles.text_center}>Цена за торт с весом {data.tier === 1 ? '4' : '8'} кг</p>
                <p className={styles.large_text}>{data.tier === 1 ? 4 * data.price : 8 * data.price}</p>
                <button className={styles.btn}>ОФОРМИТЬ ЗАКАЗ</button>
                <p className={styles.small_text}>Заказать по тел.: +7 (499) 955-48-14</p>
            </div>
            <div className={styles.center}>
                <div className={styles.center_top}>
                    В СТОИМОСТЬ ВХОДИТ {bool ? 'ОТ' : 'ДО'} 4 КГ <img onClick={()=> setBool(!bool)}
                        className={styles.arrow} src={`${window.location.origin}/pages/cake/arrow_bottom.png`}
                        style={{transform:`rotate(${bool ? '0': '180'}deg)`}}
                        alt="" />
                </div>
                <div className={styles.center_left }
                
                    style={{ backgroundImage: `url(${left_background})` }}>

                </div>
                <div className={styles.center_right}>
                    {
                        arr.map((elem,index)=> <div key={index} className={`${styles.right_elem} ${!bool && index === 0 || !bool && index === 2 ? styles.opacity : ''}`}>
                            <div className={styles.elem_title}>{elem.title}</div>
                            <div className={styles.elem_text}>{elem.text}</div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

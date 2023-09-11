import React, { useEffect } from 'react';
import styles from './Section_04.module.css'
import { useState } from 'react';
import { useGetCardsQuery } from '../../../store';
const Section04 = () => {
    const [cardsName, setCardsName] = useState('wedding')
    const { data, isSuccess } = useGetCardsQuery(cardsName)
    const links = [
        { nameRu: 'СВАДЕБНЫЕ', nameEn: 'wedding' },
        { nameRu: 'ДЕТСКИЕ', nameEn: 'children' },
        { nameRu: 'ЛЮБИМЫЕ', nameEn: 'favorite' },
        { nameRu: 'ПРАЗДНИЧНЫЕ', nameEn: 'festive' },
        { nameRu: 'ЛУЧШИЕ', nameEn: 'best' },
    ]

    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header_title}>
                    ПОПУЛЯРНЫЕ КАТЕГОРИИ
                </div>
                <div className={styles.navbar_body}>
                    <div className={styles.navbar}>
                        {
                            links.map((link, index) => <div
                                key={index}
                                className={styles.navbar_link}
                                onClick={() => setCardsName(link.nameEn)}
                                style={{textDecoration:cardsName === link.nameEn ? 'underline' : 'none',color:link.nameEn ? '' : 'none'}}
                            >{link.nameRu}</div>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.catalog_body}>
                <div className={styles.catalog_left}></div>
                <div className={styles.catalog_right}>
                    {isSuccess ?
                        data.map((card, index) => <Card key={index} title={card.title} img={card.img} />) :
                        <div className={styles.loader_wrapper}><h2>Loading...</h2></div>
                    }
                    <div className={`${styles.btn} ${styles.btn_left}`}>
                        <img src="./icons/arrow_left.png" alt="" />
                    </div>
                    <div className={`${styles.btn} ${styles.btn_right}`}>
                        <img src="./icons/arrow_right.png" alt="" />
                    </div>
                </div>
            </div>
            <img src="./pages/main/section-4torty-muzhu.jpg" alt="" />
        </div>
    );
}

const Card = ({ img, title }) => {
    let path = './pages/main/section-4/'
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={path + img} alt="" />
            </div>
            <div className={styles.card_info}>
                <div>
                    <p className={styles.card_title}>Торты</p>
                    <p className={styles.card_text}>{title}</p>
                    <div className={styles.card_line}></div>
                </div>

            </div>

        </div>
    )
}

export default Section04;

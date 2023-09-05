import React, { useEffect } from 'react';
import styles from './Section_04.module.css'
import { useState } from 'react';
import { useGetCardsQuery } from '../../../store';
const Section04 = () => {
    const [cardsName, setCardsName] = useState('wedding')
    const { data , isSuccess } = useGetCardsQuery(cardsName)
    console.log(data)
    const links = [
        { nameRu: 'СВАДЕБНЫЕ', nameEn: 'wedding' },
        { nameRu: 'ДЕТСКИЕ', nameEn: 'children' },
        { nameRu: 'ЛЮБИМЫЕ', nameEn: 'favorite' },
        { nameRu: 'ПРАЗДНИЧНЫЕ', nameEn: 'festive' },
        { nameRu: 'ЛУЧШИЕ', nameEn: 'best' },
    ]
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    let cards = []
    if (width > 1280) cards = Array(6).fill(null)
    else if (width < 1280 && width > 960) cards = Array(4).fill(null)
    else if (width < 960 && width > 580) cards = Array(3).fill(null)
    else cards = Array(2).fill(null)
    async function getCard(str) {
        let res = await fetch(`/api?page=main&query=cards&collection=${str}`)
        const data = await res.json()
        console.log(data)
    }
    useEffect(() => {
        // getCard('wedding')
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header_title}>
                    ПОПУЛЯРНЫЕ КАТЕГОРИИ
                </div>
                <div className={styles.navbar_body}>
                    <div className={styles.navbar}>
                        {
                            links.map((link, index) => <a key={index} className={styles.navbar_link}>{link.nameRu}</a>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.catalog_body}>
                <div className={styles.catalog_left}></div>
                <div className={styles.catalog_right}>
                    {   isSuccess ?
                        data.map((card, index) => <Card key={index} title={card.title} img={card.img} />):
                        <h2>Loading...</h2>
                    }
                </div>
            </div>
                <img src="./pages/main/section-4torty-muzhu.jpg" alt="" />
        </div>
    );
}

const Card = ({img,title}) => {
    let path = './pages/main/section-4/wedding/'
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>
                <img src={path + img} alt="" />
            </div>
            <div className={styles.card_info}>
                {title}
            </div>

        </div>
    )
}

export default Section04;

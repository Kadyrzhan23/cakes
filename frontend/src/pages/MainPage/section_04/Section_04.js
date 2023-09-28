import React from 'react';
import styles from './Section_04.module.css'
import { useState } from 'react';
import { useGetCardsQuery } from '../../../store';
import { useNavigate } from 'react-router-dom';
const Section04 = () => {
    const [cardsName, setCardsName] = useState('wedding')
    const { data, isSuccess } = useGetCardsQuery(cardsName)
    const [left, setLeft] = useState(0)
    const links = [
        { nameRu: 'СВАДЕБНЫЕ', nameEn: 'wedding' },
        { nameRu: 'ДЕТСКИЕ', nameEn: 'children' },
        { nameRu: 'ЛЮБИМЫЕ', nameEn: 'favorite' },
        { nameRu: 'ПРАЗДНИЧНЫЕ', nameEn: 'festive' },
        { nameRu: 'ЛУЧШИЕ', nameEn: 'best' },
    ]
    const width = window.innerWidth
    let offset;
    let minOffset;
    let beforeTheLastOne;
    let lastPoint;
    if (width > 1280) {
        offset = 891
        minOffset = 596
        beforeTheLastOne = 1782
        lastPoint = 454
    }
    else if (width < 1280 && width > 960) {
        offset = 681
        minOffset = 454
        beforeTheLastOne = 0
        lastPoint = 454
    } else if(width < 960 && width > 600){
        offset = 573
        minOffset = 573
        beforeTheLastOne = 1146
        lastPoint = 573
    }
    else {
        offset = 382
        lastPoint = 764
    }

    function moveCatalog(bool){
        console.log(left)
        if (bool) {
            if (left === 0) setLeft(lastPoint)
            else if (left === minOffset) setLeft(0)
            else setLeft(left - offset)
        } else {
            if (left === lastPoint) setLeft(0)
            else if (left === beforeTheLastOne) setLeft(left + minOffset)
            else setLeft(left + offset)
        }
    }

    // const [width, setWidth] = useState(window.innerWidth)
    // window.addEventListener('resize', () => setWidth(window.innerWidth))
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
                                style={{color:link.nameEn === cardsName ? 'black' : ''}}
                            >{link.nameRu}</div>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.catalog_body}>
                    <div 
                    className={`${styles.btn} ${styles.btn_left}`}
                    onClick={()=> moveCatalog(true)}>
                        <img src="./icons/arrow_left.png" alt="" />
                    </div>
                    <div 
                    className={`${styles.btn} ${styles.btn_right}`}
                    onClick={()=> moveCatalog(false)}>
                        <img src="./icons/arrow_right.png" alt="" />
                    </div>
                <div className={styles.catalog_left}></div>
                <div className={styles.catalog_right}>
                    <div className={styles.catalog_wrapper}
                    style={{ "right": left + 'px' }}>
                    {isSuccess ?
                        data.map((card, index) => <Card key={index} title={card.title} img={card.img} path={card["query-path"]} />) :
                        <div className={styles.loader_wrapper}><h2>Loading...</h2></div>
                    }
                    </div>
                </div>
            </div>
            <img src="./pages/main/section-4torty-muzhu.jpg" alt="" />
        </div>
    );
}

const Card = ({ img, title ,path}) => {
    let imgPath = './pages/main/section-4/'
    const navigate = useNavigate()
    return (
        <div className={styles.card} onClick={()=> navigate(`/categoreis/${path}`) }>
            <div className={styles.card_img}>
                <img src={imgPath + img} alt="" />
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

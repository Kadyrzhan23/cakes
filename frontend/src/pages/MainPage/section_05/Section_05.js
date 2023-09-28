import React from 'react';
import styles from './Section_05.module.css'
import { useState } from 'react';
import { useGetmainBestCakesQuery } from '../../../store';

const Section05 = () => {
    const width = window.innerWidth
    let offset;
    let minOffset;
    let beforeTheLastOne;
    let lastPoint;
    if (width > 1280) {
        offset = 891
        minOffset = 596
        beforeTheLastOne = 1782
        lastPoint = 2378
    }
    else if (width < 1280 && width > 960) {
        offset = 681
        minOffset = 450
        beforeTheLastOne = 1362
        lastPoint = 1812
    } else if(width < 960 && width > 600){
        offset = 573
        minOffset = 573
        beforeTheLastOne = 1146
        lastPoint = 1719
    }
    else {
        offset = 386.5
        lastPoint = 1932.5
    }
    const [left, setLeft] = useState(0)
    const [query, setQuery] = useState('popular')
    const { data, isSuccess } = useGetmainBestCakesQuery(query)
    const links = [
        { nameRu: 'САМЫЕ ПОПУЛЯРНЫЕ', nameEn: 'popular' },
        { nameRu: 'НОВЫЕ', nameEn: 'news' },
        { nameRu: 'РЕКОМЕНДУЕМ', nameEn: 'recommend' },
    ]
    function moveCatalog(bool) {
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
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header_title}>
                    ЛУЧШИЕ ТОРТЫ
                </div>
                <div className={styles.header_navbar}>
                    <div className={styles.links_wrapper}>
                        {
                            links.map((link, index) => <div
                                key={index}
                                className={`${styles.links} ${query === link.nameEn && styles.active_link}`}
                                onClick={() => setQuery(link.nameEn)}>{link.nameRu}</div>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.btn_wrapper}>
                <div
                    className={`${styles.btn} ${styles.btn_left}`}
                    onClick={() => moveCatalog(true)}
                ><img src="./icons/arrow_left.png" alt="" />
                </div>
                <div
                    className={`${styles.btn} ${styles.btn_right}`}
                    onClick={() => moveCatalog(false)}>
                    <img src="./icons/arrow_right.png" alt="" />
                </div>
            </div>
            <div className={styles.catalog_body}>
                <div className={styles.catalog_wrapper}>
                <div className={styles.catalog}
                    style={{ "right": left + 'px' }}
                >
                    {isSuccess ?
                        data.map((card, index) => <Card key={index} title={card.title} img={card.img} price={card.price} />) :
                        <h2>Loading...</h2>
                    }
                </div>
            </div>
            </div>
        </div>
    );
}

export default Section05;



const Card = ({ title, img, price }) => {
    let path = './pages/main/section-05/'
    const [orderBool, setOrderbool] = useState(false)
    return (
        <div
            className={styles.card}
            onMouseOver={() => setOrderbool(true)}
            onMouseOut={() => setOrderbool(false)}>
            <div className={styles.card_img}>
                <img src={path + img} alt="" />
            </div>
            <div className={styles.card_info}>
                <p className={styles.card_title}>{title}</p>
                <p className={styles.card_price}>{price}руб/кг</p>
            </div>
            <div
                className={styles.card_btn}
                style={{ "top": orderBool ? -145 + 'px' : 50 +'px' }}>
                ЗАКАЗАТЬ
            </div>
        </div>
    )
}

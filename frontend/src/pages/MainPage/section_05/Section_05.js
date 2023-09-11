import React from 'react';
import styles from './Section_05.module.css'

const Section05 = () => {
    const arr = Array(10).fill(null);
    console.log(arr)
    const links = [
        { nameRu: 'ССАМЫЕ ПОПУЛЯРНЫЕ', nameEn: 'popular' },
        { nameRu: 'НОВЫЕ', nameEn: 'news' },
        { nameRu: 'РЕКОМЕНДУЕМ', nameEn: 'recommend' },
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.header_title}>
                    ЛУЧШИЕ ТОРТЫ
                </div>
                <div className={styles.header_navbar}>
                    <div className={styles.links_wrapper}>
                        {
                            links.map((link, index) => <div className={styles.link}>{link.nameRu}</div>)
                        }
                    </div>
                </div>
            </div>
            <div className={styles.catalog_body}>
                <div className={styles.catalog}>
                    {
                        arr.map((card, index) => <Card key={index} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Section05;



const Card = () => {

    return (
        <div className={styles.card}>

        </div>
    )
}

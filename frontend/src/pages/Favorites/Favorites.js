import React from 'react';
import styles from './Favorites.module.css'
import Card from '../../components/Card/Card'
import { useSelector } from 'react-redux';
const Favorites = () => {
    const favorites = useSelector(state => state.favorites.favorites)
    console.log(favorites)
    return (
        <div className={styles.wrapper}>
            {
                favorites.length > 0 ? <>
                    {
                        favorites.map((card) => <Card
                            title={card.title}
                            price={card.price}
                            id={card.id}
                            img={card.img}
                            key={card.id} />)
                    }
                </> : <h2>Вы не выбрали ни одного торта</h2>
            }
        </div>
    );
}

export default Favorites;

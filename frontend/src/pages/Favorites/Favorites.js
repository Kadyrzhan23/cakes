import React from 'react';
import styles from './Favorites.module.css'
import { useSelector } from 'react-redux';
const Favorites = () => {
    const favorites = useSelector(state => state.favorites.favorites)
    console.log(favorites)
    return (
        <div>
            <h2>Favorites</h2>
        </div>
    );
}

export default Favorites;

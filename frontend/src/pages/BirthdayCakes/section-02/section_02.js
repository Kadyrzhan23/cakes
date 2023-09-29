import React , { useState , useMemo}from 'react';
import { useGetPageBirthdayQuery } from '../../../store/cakesApi';
import styles from './Section_02.module.css'
import Card from '../../../components/Card/Card'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../../../store/favoriteSlice';
const Section02 = () => { 
    const favorites = useSelector(state => state.favorites.favorites)
    console.log(favorites)
    const { data, isSuccess } = useGetPageBirthdayQuery()
    const [res, setRes] = useState([])
    const [value , setValue] = useState('')
    if (isSuccess && res.length === 0) {
        setRes(data)
    }
    function change(e) {
        const value = +e.target.value
        setRes(data.filter((item)=> item.tier === value))
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.control_block}>
                <label htmlFor="">
                    Ярусы:
                    <select name="" id="" onChange={(e)=> change(e)}>
                        <option value="">все</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </label>
            </div>
            <div className={styles.card_wrapper}>
                {
                    isSuccess ? res.map((item, index) => {
                        return (
                            <Card title={item.title} price={item.price} id={item.id} img={item.img} key={index}/>
                        )
                    }) : <h2>Loading...</h2>
                }
            </div>
        </div>
    );
}

export default Section02;

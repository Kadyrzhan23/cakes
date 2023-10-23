import React, { useState } from 'react';
import styles from './Section_02.module.css'
import Card from '../Card/Card'
import { useLocation } from 'react-router-dom';
import PopupFormEditCard from '../EditCard/PopupFormEditCard';
const Section02 = ({ data, isSuccess }) => {
    // const { data, isSuccess } = useGetPageBirthdayQuery()
    const { pathname } = useLocation()
    const [res, setRes] = useState([])
    if (isSuccess && res.length === 0) {
        setRes(data)
    }
    function change(e) {
        const value = +e.target.value
        setRes(data.filter((item) => item.tier === value))
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.control_block}>
                <div><strong>Сортировка</strong></div>
                <label htmlFor="">
                    Ярусы
                    <select name="" id="select" className={styles.select_css} onChange={(e) => change(e)}>
                        <option value="">все</option>
                        <option value="1">1</option>
                        {
                            pathname !== '/bento' && <>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </>
                        }
                    </select>
                </label>
            </div>
            <div className={styles.card_wrapper}>
                {
                    isSuccess ? res.map((item, index) => {
                        return (
                            <Card
                                title={item.title}
                                price={item.price}
                                id={item.id}
                                img={item.img}
                                key={index}
                                dirName={item.dirName}
                            />
                        )
                    }) : <h2>Loading...</h2>
                }
            </div>
            <PopupFormEditCard data={data}/>
        </div>
    );
}

export default Section02;

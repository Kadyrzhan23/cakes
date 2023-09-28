import React , { useState , useMemo}from 'react';
import { useGetPageBirthdayQuery } from '../../../store/cakesApi';
import styles from './Section_02.module.css'
const Section02 = () => {
    const { data, isSuccess } = useGetPageBirthdayQuery()
    const [res, setRes] = useState([])
    const [value , setValue] = useState('')
    if (isSuccess && res.length === 0) {
        console.log('length of res')
        setRes(data)
    }
    function change(e) {
        const value = +e.target.value
        setRes(data.filter((item)=> item.tier === value))
    }
    console.log(value)
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
            <div>
                {
                    isSuccess ? res.map((item, index) => {
                        return (
                            <div key={index}>{item.title}  = {item.tier}</div>
                        )
                    }) : <h2>Loading...</h2>
                }
            </div>
        </div>
    );
}

export default Section02;

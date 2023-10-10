import React from 'react';
import styles from './CorporateCakes.module.css'
import { useEffect } from 'react';
const Corporatecakes = () => {

    useEffect(()=>{
        setTimeout(function(){
            window.scrollTo(0, 0);
        }, 1);
    },[])
    return (
        <div>
            <h2>Corporate</h2>
        </div>
    );
}

export default Corporatecakes;

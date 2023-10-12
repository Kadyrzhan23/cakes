import React from 'react';
import styles from './FestiveCakes.module.css'
import Section01 from '../../components/page_header/section_01'
import Section02 from '../../components/page_container/section_02'
import { useGetPageForCategoryQuery } from '../../store/cakesApi';
const FestiveCakes = () => {  //Празничные
    const {data,isSuccess} = useGetPageForCategoryQuery('festive')
    const background = `http://localhost:3000/static/media/prazd-cake.76875d6fff720e083311.jpg`
    const title = `Праздничные торты`
    const text = ``
    return (
        <div className={styles.wrapper}>
            <Section01
            background={background}
            title={title}/>
            <Section02 data={data} isSuccess={isSuccess}/>
        </div>
    );
}

export default FestiveCakes;

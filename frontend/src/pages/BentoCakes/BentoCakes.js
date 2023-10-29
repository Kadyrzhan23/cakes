import React from 'react';
import styles from './Bentocakes.module.css'
import Section01 from '../../components/page_header/section_01';
import Section02 from '../../components/page_container/section_02';
import { useGetPageForCategoryQuery } from '../../store/cakesApi';
import PopupFormEditCard from '../../components/EditCard/PopupFormEditCard';
const BentoCakes = () => {
    const background = `${window.location.origin}/pages/bento/cupcake.jpg`
    const title = `Бенто-торты`
    const { data, isSuccess } = useGetPageForCategoryQuery('bento')
    return (
        <div className={styles.wrapper}>
            <Section01
            background={background}
            title={title}/>
            <Section02
            data={data}
            isSuccess={isSuccess}/>
            {/* <PopupFormEditCard/> */}
        </div>
    );
}

export default BentoCakes;

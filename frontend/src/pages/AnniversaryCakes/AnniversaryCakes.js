import React from 'react';
import styles from './AnniversaryCakes.module.css'
import Section01 from '../../components/page_header/section_01'
import Section02 from '../../components/page_container/section_02'
import { useGetPageForCategoryQuery } from '../../store/cakesApi';
const AnniversaryCakes = () => {  //Юбилей
    const {data , isSuccess} = useGetPageForCategoryQuery('anniversary');
    const background = `${window.location.origin}/pages/anniversary/yubiley-cake-header.jpeg`
    const title = `Торты на Юбилей`
    const text = `Для любого торта на юбилей можно заменить цифры или поздравительную надпись. Как правило, цифры делаются из мастики или используются деревянные топперы, которые приобретаются отдельно. Часто для тортов на юбилей используется декор в виде фотопечати. Заказать торт на юбилей можно с коллажем из нескольких фотографий именинника.`
    return (
        <div className={styles.wrapper}>
            <Section01
                background={background}
                title={title}
                text={text} />
            <Section02 data={data} isSuccess={isSuccess} />
        </div>
    );
}

export default AnniversaryCakes;

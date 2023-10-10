import React from 'react';
import styles from './WeddingCakes.module.css'
import Section01 from '../../components/page_header/section_01'
import Section02 from '../../components/page_container/section_02'
import { useGetPageForCategoryQuery } from '../../store/cakesApi';
const WeddingCakes = () => { //Свадебные
    const {data,isSuccess} = useGetPageForCategoryQuery('wedding')
    const background = `http://localhost:3000/static/media/wedding-cake.0aaa14f662c1729226a0.jpg`
    const title = `Свадебные торты`
    const text = `Небольшие советы перед заказом торта на свадьбу в Москве. Приезжайте на бесплатную дегустацию, чтобы попробовать начинки и обсудить детали заказа с кондитерами. Возможно изготовление по вашему эскизу. Для украшения можно использовать сезонные ягоды и живые цветы. По желанию заказчика подставка для торта может быть взята в аренду. В зависимости от ингредиентов и вариантов оформления, вес свадебного торта рассчитывается со скидками.`
    return (
        <div className={styles.wrapper}>
            <Section01 
            background={background}
            title={title}
            text={text}/>
            <Section02 
            data={data}
            isSuccess={isSuccess}/>
        </div>
    );
}

export default WeddingCakes;

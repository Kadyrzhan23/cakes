import React from 'react';
import styles from './BirthdayCakes.module.css'
import { useEffect } from 'react';
import Section01 from '../../components/page_header/section_01';
import Section02 from '../../components/page_container/section_02';
import { useGetPageForCategoryQuery } from '../../store/cakesApi';
// import asd from "../../../public/pages/birthday/section-01/rozhdenija-cake.jpg"
const BirthdayCakes = () => { //День рождения
    const {data,isSuccess} = useGetPageForCategoryQuery('birthday')
    const background = `${window.location.origin}/pages/birthday/section-01/rozhdenija-cake.jpg`
    const title = `Торты на День Рождения`
    const text = `Небольшая подсказка, чтобы быстро заказать торт на день рождения: на сайте созданы категории с популярными тортами для мужчин и женщин. Можно искать по увлечениям и хобби, а можно по профессии. Если именинник увлекается спортом, то смотрите торты в категории Спорт, а различные автомобили в категории Машин. Для каждого торта вы можете выбрать покрытие или добавить поздравительную надпись, а еще совершенно бесплатно попробовать начинки на дегустации.`
    
    useEffect(() => {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 1);
    }, [])
    return (
        <div className={styles.wrapper}>
            <Section01
                background={background}
                title={title}
                text={text} />
            <Section02
            isSuccess={isSuccess}
            data={data} />
        </div>
    );
}

export default BirthdayCakes;

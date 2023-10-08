import React from 'react';
import styles from './BirthdayCakes.module.css'
import { useEffect } from 'react';
import Section01 from '../../components/page_header/section_01';
import Section02 from '../../components/page_container/section_02';
import { useGetPageBirthdayQuery } from '../../store/cakesApi';
const BirthdayCakes = () => { //День рождения
    const {data,isSuccess} = useGetPageBirthdayQuery()
    const background = `http://localhost:3000/static/media/rozhdenija-cake.79d9a971c2150b2e805c.jpg`
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

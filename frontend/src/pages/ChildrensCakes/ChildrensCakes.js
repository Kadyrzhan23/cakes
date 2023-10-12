import React from 'react';
import styles from './ChildrensCakes.module.css'
import { useEffect } from 'react';
import Section01 from '../../components/page_header/section_01'
import Section02 from '../../components/page_container/section_02'
import { useGetPageForCategoryQuery } from '../../store/cakesApi';
const ChildrensCakes = () => { //Детские
    const {data , isSuccess} = useGetPageForCategoryQuery('children')
    console.log(data)
    const background = `http://localhost:3000/static/media/children-cake.5255c24ece58fe21b532.jpg`
    const title = `Детские торты`
    const text = `На заметку родителям! Форма торта может быть любая: круглая, квадратная или 3D. Дополнить декор можно кремовыми рюшами, свечами, фигурками малышей и аппликациями из мастики. На 1 годик добавляют зверей из мастики. Очень красиво смотрятся воздушные шары, часто заказывают детски торт с цифрами и данными момента рождения. Для мальчика можно выбрать фигурки машин ярких расцветок. Для девочки — бантики, платья, нежные цветы, куклы.`
    useEffect(()=> {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 1);
    },[])
    return (
        <div className={styles.wrapper}>
            <Section01
            text={text}
            title={title}
            background={background}/>
            <Section02
            data={data}
            isSuccess={isSuccess}/>
        </div>
    );
}

export default ChildrensCakes;

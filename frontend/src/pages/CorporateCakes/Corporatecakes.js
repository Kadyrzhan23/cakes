import React from 'react';
import styles from './CorporateCakes.module.css'
import { useEffect } from 'react';
import Section01 from '../../components/page_header/section_01'
import Section02 from '../../components/page_container/section_02'
import { useGetPageForCategoryQuery } from '../../store/cakesApi';
const Corporatecakes = () => {
    const background = `http://localhost:3000/static/media/corp-cake.3eaa924ab934c51e7701.jpg`
    const title = `Корпоративные торты`
    const { data, isSuccess } = useGetPageForCategoryQuery('corporate')
    useEffect(() => {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, []);
    }, [])
    return (
        <div className={styles.wrapper}>
            <Section01
                background={background}
                title={title} />
            <Section02
                data={data}
                isSuccess={isSuccess} />
        </div>
    );
}

export default Corporatecakes;

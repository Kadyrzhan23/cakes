import React from 'react';
import styles from './Video.module.css'
import { useGetAllProductsQuery } from '../../store/cakesApi';
const Video = () => {
    const {data,isSuccess } = useGetAllProductsQuery()
    console.log(data)
    return (
        <div>
            <h2>Videos</h2>
        </div>
    );
}

export default Video;

import React from 'react';
import styles from './Category.module.css'
import { useParams } from 'react-router-dom';
const Category = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h2>Category</h2>
        </div>
    );
}

export default Category;

import React from 'react';
import styles from './Layout.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { getDataFromLocalStorage } from '../../store/favoriteSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataFromLocalStorage())
        
    }, []);
    return (
        <div >
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;

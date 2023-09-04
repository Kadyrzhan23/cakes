import React from 'react';
import styles from './Layout.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
const Layout = () => {
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

import React from 'react';
import Header from '../Components/Share/Header';
import Footer from '../Components/Share/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};  

export default Main;
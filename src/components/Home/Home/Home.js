import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainHome from '../MainHome/MainHome';
import OrderNow from './OrderNow/OrderNow';
import Adbar from '../AdBar/Adbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainHome></MainHome>
            <OrderNow></OrderNow>
            <Adbar></Adbar>
        </div>
    );
};

export default Home;
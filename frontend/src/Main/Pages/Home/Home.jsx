import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

const Home = () => {
    return (
        <div className='w-screen h-screen bg-blue-300'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Home;
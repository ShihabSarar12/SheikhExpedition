import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar';

const Adminpanel = () => {
    return (
        <div className="flex h-screen w-screen">
            <Navbar />
            <div className='w-full h-full flex justify-center'>
                <Outlet />
            </div>
        </div>
    );
};

export default Adminpanel;

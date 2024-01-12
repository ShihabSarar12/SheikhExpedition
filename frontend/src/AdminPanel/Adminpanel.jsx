import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar';

const Adminpanel = () => {
    return (
        <div className="flex h-screen w-screen  bg-slate-300">
            <Navbar />
            <div className='w-full h-full flex justify-center'>
                <Outlet />
            </div>
        </div>
    );
};

export default Adminpanel;

import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar';

const Adminpanel = () => {
    return (
        <div className="flex h-screen w-screen bg-slate-300">
            <Navbar />
            <div className='flex-1 overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default Adminpanel;

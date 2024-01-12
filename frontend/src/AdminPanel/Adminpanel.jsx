import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './Navbar/Navbar';

const Adminpanel = () => {
    return (
        <div className="flex h-screen">
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Adminpanel;

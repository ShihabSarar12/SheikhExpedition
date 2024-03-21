// Adminpanel.jsx
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Adminpanel = () => {
    return (
        <div className="flex h-screen w-screen bg-slate-200">
            <Navbar />
            <div className="flex flex-col w-full overflow-hiddenj">
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Adminpanel;

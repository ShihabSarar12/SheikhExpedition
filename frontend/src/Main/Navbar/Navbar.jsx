import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex flex-col items-center fixed left-0 top-0">
            <div className="w-screen h-20 bg-transparent flex justify-between items-center px-8 md:px-20">
                <div className="text-white font-semibold text-lg">
                    Sheikh Expediting
                </div>
                <div className="flex gap-6 text-lg font-semibold text-white">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/news">News</Link>
                    <Link to="/contacts">Contact</Link>
                </div>
            </div>
            <hr className="w-5/6 h-1 divide-white" />
        </div>
    );
};

export default Navbar;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faSquareFacebook,
    faSquareXTwitter,
} from '@fortawesome/free-brands-svg-icons';

const HeroPage = () => {
    return (
        <div className="w-screen h-screen bg-slate-400 flex gap-10">
            <div className="w-48 h-full flex justify-center items-center flex-col gap-4">
                <FontAwesomeIcon
                    className="text-white"
                    icon={faSquareFacebook}
                    size="xl"
                />
                <FontAwesomeIcon
                    className="text-white"
                    icon={faSquareXTwitter}
                    size="xl"
                />
                <FontAwesomeIcon
                    className="text-white"
                    icon={faInstagram}
                    size="xl"
                />
            </div>
            <div className="w-full h-full flex flex-col justify-center gap-28">
                <h1 className="text-6xl text-white font-extrabold">
                    Architecture is our passion, design is our art...
                </h1>
                <p className="text-xl font-medium text-white">
                    Architects offer designs and planning services for buildings{' '}
                    <br />
                    landscapes, and interiors.
                </p>
            </div>
            <div className="w-48 h-full flex items-end">
                <h4 className="mb-20 text-white font-medium text-lg">
                    scroll down --{'> '}
                </h4>
            </div>
        </div>
    );
};

export default HeroPage;

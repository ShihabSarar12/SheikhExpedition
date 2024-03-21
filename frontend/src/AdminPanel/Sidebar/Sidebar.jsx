import React, { useContext, createContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Others/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faGripLinesVertical,
} from '@fortawesome/free-solid-svg-icons';

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);

    return (
        <div>
            <div
                className={`h-screen ${
                    expanded ? 'w-64 duration-500' : 'w-16 duration-300'
                }`}
            >
                <nav className="h-full flex flex-col bg-slate-800  shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <Link to="/dashboard">
                            <img
                                src={logo}
                                className={`cursor-pointer duration-500 w-5/6 ${
                                    expanded && 'rotate-[360deg]'
                                }`}
                                alt=""
                            />
                        </Link>
                        <button
                            onClick={() => setExpanded(curr => !curr)}
                            className="p-1.5  rounded-lg bg-orange-300 hover:bg-orange-400"
                        >
                            {expanded ? (
                                <FontAwesomeIcon icon={faArrowLeft} />
                            ) : (
                                <FontAwesomeIcon icon={faArrowRight} />
                            )}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>
                        <ul className="flex-1 px-1 font-bold">{children}</ul>
                    </SidebarContext.Provider>

                    <div className="border-t flex p-3">
                        <img
                            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                            alt=""
                            className="w-10 h-10 rounded-md"
                        />
                        <div
                            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}
                        >
                            <div className="leading-4">
                                <h4 className="font-semibold text-white">
                                    John Doe
                                </h4>
                                <span className="text-xs text-white">
                                    johndoe@gmail.com
                                </span>
                            </div>
                            <FontAwesomeIcon icon={faGripLinesVertical} />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export function SidebarItem({ icon, text, active, alert, to }) {
    const { expanded } = useContext(SidebarContext);

    const renderLinkOrSpan = content => {
        return to ? <Link to={to}>{content}</Link> : <span>{content}</span>;
    };

    return (
        <div to={to} className="group">
            <li
                className={`
        flex  rounded-md p-4 cursor-pointer hover:bg-orange-400 text-black-300 text-semi-bold items-center gap-x-4 
        relative py-4 px-4 my-1
        font-medium 
        transition-colors group
        ${
            active
                ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                : 'hover:text-black text-white'
        }
    `}
            >
                {renderLinkOrSpan(icon)}
                <span
                    className={`overflow-hidden transition-all ${
                        expanded ? 'w-52 ml-3' : 'w-0'
                    }`}
                >
                    {renderLinkOrSpan(text)}
                </span>
                {alert && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-amber-700 ${
                            expanded ? '' : 'top-2'
                        }`}
                    />
                )}

                {!expanded && (
                    <div
                        className={`
            absolute left-full rounded-md px-2 py-1 ml-3
           bg-yellow-200 text-sm 
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            z-10 
        `}
                    >
                        {renderLinkOrSpan(text)}
                    </div>
                )}
            </li>
        </div>
    );
}

// className={` ${
//   expanded ? "w-64" : "w-16 "
// } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}

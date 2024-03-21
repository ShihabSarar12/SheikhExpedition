import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MemberTable from './MemberTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Members = () => {
    const members = useLoaderData();
    const [index, setIndex] = useState({
        start: 0,
        end: 10,
    });
    if (!members) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="border-t-8 border-blue-500 border-solid animate-spin rounded-full h-16 w-16"></div>
            </div>
        );
    }
    const prevPage = () => {
        setIndex(prev => ({
            start: prev.start === 0 ? 0 : prev.start + 10,
            end: prev.start === 0 ? 10 : prev.end + 10,
        }));
    };
    const nextPage = () => {
        //TODO have to define length for pagination
        setIndex(prev => ({
            start:
                prev.start < members.length - 10
                    ? prev.start + 10
                    : members.length,
            end: prev.start < members.length ? prev.start + 10 : members.length,
        }));
    };

    return (
        <div className="container mx-auto px-4 md:p-8 lg:p-12">
            <h1 className="text-5xl font-extrabold mb-8 text-center">
                Team Members
            </h1>
            <div className="text-blue-500 text-2xl hover:text-blue-700 flex items-center mb-6">
                <FontAwesomeIcon icon={faPlusCircle} />
                <Link to="/add-member">Add Member</Link>
            </div>
            <div className="w-[950px] h-auto">
                <MemberTable members={members.slice(index.start, index.end)} />
            </div>
            <button onClick={prevPage}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>
        </div>
    );
};

export default Members;

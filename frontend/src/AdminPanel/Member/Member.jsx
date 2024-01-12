import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MemberItem from './MemberItem';

const Members = () => {
    const members = useLoaderData();

    if (!members) {
        return <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-16 w-16"></div>
    </div>; 
    }

    return (
        <div className="container mx-auto px-4 md:p-8 lg:p-12">
            <h1 className="text-5xl font-extrabold mb-8 text-center">
                Team Members
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {members.map((member) => (
                    <MemberItem key={member.TeamMemberID} member={member} />
                ))}
            </div>
        </div>
    );
};

export default Members;

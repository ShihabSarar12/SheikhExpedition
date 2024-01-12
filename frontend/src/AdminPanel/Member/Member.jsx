import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MemberItem from './MemberItem';

const Members = () => {
    const members = useLoaderData();

    if (!members) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="border-t-8 border-blue-500 border-solid animate-spin rounded-full h-16 w-16"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:p-8 lg:p-12">
            <h1 className="text-5xl font-extrabold mb-8 text-center">Team Members</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((member) => (
                    <MemberItem
                        key={member.TeamMemberID}
                        member={member}
                        className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
                    />
                ))}
            </div>
        </div>
    );
};

export default Members;

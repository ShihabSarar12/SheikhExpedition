import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import MemberItem from './MemberItem';
import { PlusCircle } from 'lucide-react';

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
 ziyad
            <h1 className="text-5xl font-extrabold mb-8 text-center">Team Members</h1>

            <Link to="/add-member" className="text-blue-500 text-2xl hover:text-blue-700 flex items-center pb-4">
                    <PlusCircle size={26} className=" text-center" />
                    Add Member
                </Link>
 ziyad
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

import React from 'react';
import { useLoaderData } from "react-router-dom";
import MemberItem from './MemberItem';

const Members = () => {
    const members = useLoaderData();

    return (
        <div className="mx-auto p-4">
            <h1 className="text-center text-3xl font-bold mb-4 ">
                Members Page
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {members.map(member => (
                    <MemberItem key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
};

export default Members;

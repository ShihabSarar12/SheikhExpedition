import React from 'react';
import { Link } from 'react-router-dom';

const MemberItem = ({ member }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md transition-transform transform hover:scale-105 flex flex-col h-full">
            {member.TeamMemberImage && (
                <div className="mb-4">
                    <img
                        src={`../assests/Members/${member.TeamMemberImage}`}
                        alt="Team Member"
                        className="w-full h-40 object-cover rounded-md"
                    />
                </div>
            )}
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{member.TeamMemberName}</h2>
                <div className="mb-4">
                    <p className="text-sm text-gray-700">Position: {member.TeamMemberPosition}</p>
                    <p className="text-sm text-gray-700">Contact: {member.TeamMemberContact}</p>
                    <p className="text-sm text-gray-700">Email: {member.TeamMemberEmail}</p>
                </div>
            </div>
            <div className="mt-auto">
                <Link to={`/team-members/${member.TeamMemberID}`} className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default MemberItem;

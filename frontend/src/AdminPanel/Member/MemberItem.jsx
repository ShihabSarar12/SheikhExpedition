import React from 'react';
import { Link } from 'react-router-dom';

const MemberItem = ({ member }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md relative">
            {member.TeamMemberImage && (
                <div className="mt-4">
                    <img
                        src={`../assests/Members/${member.TeamMemberImage}`}
                        alt="Team Member"
                        className="max-w-full h-auto"
                    />
                </div>
            )}
            <h2 className="text-xl font-bold mb-4">{member.TeamMemberName}</h2>
            <div className="mt-4">
                <p className="mb-2">Position: {member.TeamMemberPosition}</p>
                <p className="mb-2">Contact: {member.TeamMemberContact}</p>
                <p className="mb-2">Email: {member.TeamMemberEmail}</p>
            </div>
            <Link to={`/team-members/${member.TeamMemberID}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
                    See More
                </button>
            </Link>
        </div>
    );
};

export default MemberItem;

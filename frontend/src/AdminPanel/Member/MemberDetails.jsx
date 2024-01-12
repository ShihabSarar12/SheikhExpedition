import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TeamMemberDetails = () => {
    const { id } = useParams();
    const [teamMember, setteamMember] = useState(null);

    useEffect(() => {
        const fetchTeamMemberDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/teammembers/${id}`);
                const data = await response.json();
                setteamMember(data);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        fetchTeamMemberDetails();
    }, [id]);


    if (!teamMember) {
        return <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-16 w-16"></div>
    </div>; 
    }

    return (
        <div className='p-4 mx-auto my-auto '>
            <h1 className="text-2xl font-bold mb-4">{teamMember.TeamMemberName}</h1>
            {teamMember.TeamMemberImage && (
                <img
                    src={`../assests/Members/${teamMember.TeamMemberImage}`}
                    alt="Team Member"
                    className="max-w-full h-auto"
                />
            )}
            <p className="mb-2">Position: {teamMember.TeamMemberPosition}</p>
            <p className="mb-2">Contact: {teamMember.TeamMemberContact}</p>
            <p className="mb-2">Email: {teamMember.TeamMemberEmail}</p>
        </div>
    );
};

export default TeamMemberDetails;

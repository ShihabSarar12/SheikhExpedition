import React, { useState, useEffect } from 'react';
import MemberItem from './MemberItem';

const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'http://localhost:8080/teammembers',
                );
                const data = await response.json();
                setMembers(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4 ml-64 mr-64 ">
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

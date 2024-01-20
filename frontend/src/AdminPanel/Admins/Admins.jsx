import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Admins = () => {
    const admins = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-3'>
            {admins.map((admin, index) =>{
                const { AdminUserName, AdminEmail } = admin;
                return (
                    <div className='bg-slate-400'>
                        <h2 key={index}>Admin User: {AdminUserName}</h2>
                        <p>{AdminEmail}</p>
                    </div>
                )  
            })}
        </div>
    );
};

export default Admins;
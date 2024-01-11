import React, { useState, useEffect } from 'react';
import ownerInfoData from '../Others/owner_info.json';

const Dashboard = () => {
    const [ownerInfo, setOwnerInfo] = useState(ownerInfoData);
    const [editMode, setEditMode] = useState(false);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };

    const handleCancelClick = () => {
        setOwnerInfo(ownerInfoData);
        setEditMode(false);
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setOwnerInfo(prevInfo => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    return (
        <div className="container mx-auto p-4 md:p-8 lg:p-12 ml-64 mr-64">
            <h1 className="text-center text-3xl font-bold mb-4 ">
                Dashboard Page
            </h1>
            {ownerInfo && (
                <div className="bg-white p-4 md:p-6 lg:p-8 rounded-md shadow-md">
                    <h2 className="text-xl font-bold mb-4">
                        Owner Information
                    </h2>
                    {editMode ? (
                        <div>
                            <p>
                                Name:{' '}
                                <input
                                    type="text"
                                    name="name"
                                    value={ownerInfo.name}
                                    onChange={handleInputChange}
                                    className="border p-2 rounded-md w-full"
                                />
                            </p>
                            <p>
                                Mobile Number:{' '}
                                <input
                                    type="text"
                                    name="mobileNumber"
                                    value={ownerInfo.mobileNumber}
                                    onChange={handleInputChange}
                                    className="border p-2 rounded-md w-full"
                                />
                            </p>
                            <p>
                                Email:{' '}
                                <input
                                    type="text"
                                    name="email"
                                    value={ownerInfo.email}
                                    onChange={handleInputChange}
                                    className="border p-2 rounded-md w-full"
                                />
                            </p>
                            <p>
                                Company Name:{' '}
                                <input
                                    type="text"
                                    name="companyName"
                                    value={ownerInfo.companyName}
                                    onChange={handleInputChange}
                                    className="border p-2 rounded-md w-full"
                                />
                            </p>
                            <div className="flex flex-col md:flex-row mt-4">
                                <button
                                    onClick={handleSaveClick}
                                    className="bg-green-500 text-white py-2 px-4 rounded-md mb-2 md:mb-0 md:mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancelClick}
                                    className="bg-gray-500 text-white py-2 px-4 rounded-md"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <p>Name: {ownerInfo.name}</p>
                            <p>Mobile Number: {ownerInfo.mobileNumber}</p>
                            <p>Email: {ownerInfo.email}</p>
                            <p>Company Name: {ownerInfo.companyName}</p>
                            <button
                                onClick={handleEditClick}
                                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
                            >
                                Edit
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dashboard;

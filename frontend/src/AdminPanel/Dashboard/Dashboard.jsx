import React, { useState } from "react";
import ownerInfoData from "../Others/owner_info.json";

const Dashboard = () => {
  const [ownerInfo, setOwnerInfo] = useState(ownerInfoData);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Perform any save actions if needed
    setEditMode(false);
  };

  const handleCancelClick = () => {
    // Reset ownerInfo to the original data
    setOwnerInfo(ownerInfoData);
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOwnerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 md:p-8 lg:p-12">
      <h1 className="text-5xl font-extrabold mb-8 text-center">Dashboard</h1>
      {ownerInfo && (
        <div className="bg-slate-100 p-6 rounded-md shadow-md flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Owner Information</h2>
            {editMode ? (
              <form>
                <div className="mb-6">
                  <label className="block text-lg font-semibold mb-2" htmlFor="name">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={ownerInfo.name}
                    onChange={handleInputChange}
                    className="border p-4 rounded-md w-full"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-lg font-semibold mb-2" htmlFor="mobileNumber">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={ownerInfo.mobileNumber}
                    onChange={handleInputChange}
                    className="border p-4 rounded-md w-full"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-lg font-semibold mb-2" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={ownerInfo.email}
                    onChange={handleInputChange}
                    className="border p-4 rounded-md w-full"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-lg font-semibold mb-2" htmlFor="companyName">
                    Company Name:
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={ownerInfo.companyName}
                    onChange={handleInputChange}
                    className="border p-4 rounded-md w-full"
                  />
                </div>
              </form>
            ) : (
              <div>
                <p className="mb-4">
                  <span className="text-2xl font-semibold">Name:</span> {ownerInfo.name}
                </p>
                <p className="mb-4">
                  <span className="text-2xl font-semibold">Mobile Number:</span>{" "}
                  {ownerInfo.mobileNumber}
                </p>
                <p className="mb-4">
                  <span className="text-2xl font-semibold">Email:</span> {ownerInfo.email}
                </p>
                <p className="mb-4">
                  <span className="text-2xl font-semibold">Company Name:</span>{" "}
                  {ownerInfo.companyName}
                </p>
                <button
                  onClick={handleEditClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded-md mt-8 transition-transform transform hover:scale-105"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
          {editMode && (
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={handleSaveClick}
                className="bg-green-500 hover:bg-green-700 text-white py-4 px-8 rounded-md mr-4 transition-transform transform hover:scale-105"
              >
                Save
              </button>
              <button
                onClick={handleCancelClick}
                className="bg-gray-500 hover:bg-gray-700 text-white py-4 px-8 rounded-md transition-transform transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

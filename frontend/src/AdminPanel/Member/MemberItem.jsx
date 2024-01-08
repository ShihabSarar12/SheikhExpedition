import React from "react";

const MemberItem = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">{member.name}</h2>
      <p className="mb-2">Description: {member.position}</p>
      <p className="mb-2">Start Date: {member.contactinfo}</p>
      <p className="mb-2">End Date: {member.role}</p>
    </div>
  );
};

export default MemberItem;

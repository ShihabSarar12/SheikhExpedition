import React from "react";
import MemberItem from "./MemberItem";

const Member = () => {
    const members = require('../Others/member.json');

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Members Page</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <MemberItem key={index} member={member} />
          ))}
        </div>
      </div>
    );
  };
  

export default Member;

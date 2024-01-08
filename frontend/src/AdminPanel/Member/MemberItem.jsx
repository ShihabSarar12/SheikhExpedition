import React, { useState, useEffect } from "react";

const MemberItem = ({ member }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:8080/teammembers/${member.TeamMemberID}`);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

       
        const { TeamMemberImage } = await response.json();
        const blob = new Blob([new Uint8Array(TeamMemberImage.data)], { type: 'image/png' });

        const imageUrl = URL.createObjectURL(blob);
        
        setImageSrc(imageUrl);
        console.log(TeamMemberImage);

      } catch (error) {
        console.error("Error fetching image:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchImage();
  }, [member.id]);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        <p>Error fetching image: {error}</p>
      </div>
    );
  }




  return (
    <div className="bg-white p-6 rounded-md shadow-md">
       {imageSrc && (
        <div className="mt-4">
          <img
            src={imageSrc}
            alt="Members"
            className="max-w-full h-auto"
          />
        </div>
      )}
      <h2 className="text-xl font-bold mb-4">{member.TeamMemberName}</h2>
      <p className="mb-2">Description: {member.TeamMemberPosition}</p>
      <p className="mb-2">Start Date: {member.TeamMemberContact}</p>
      <p className="mb-2">End Date: {member.TeamMemberEmail}</p>
    </div>
  );
};

export default MemberItem;

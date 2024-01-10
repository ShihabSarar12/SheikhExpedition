import React, { useState, useEffect } from "react";

const ProjectItem = ({ project }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchImage = async () => {
      try {
        const response = await fetch(`http://localhost:8080/projects/${project.ProjectID}`); //Database id
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
       
        const { ProjectImage } = await response.json();
        const blob = new Blob([new Uint8Array(ProjectImage.data)], { type: 'image/png' });

        const imageUrl = URL.createObjectURL(blob);
        
        setImageSrc(imageUrl);

      } catch (error) {
        console.error("Error fetching image:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    

    fetchImage();
  }, [project.ProjectID]);

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
            alt="Project"
            className="max-w-full h-auto"
          />
        </div>
      )}
      <h2 className="text-xl font-bold mb-4">{project.ProjectName}</h2>
      <p className="mb-2">Description: {project.ProjectDescription}</p>
      <p className="mb-2">Start Date: {project.StartDate}</p>
      <p className="mb-2">End Date: {project.EndDate}</p>
      <p className="mb-2">Budget: ${project.Budget}</p>
      <p>Status: {project.Status}</p>
    </div>
  );
};

export default ProjectItem;

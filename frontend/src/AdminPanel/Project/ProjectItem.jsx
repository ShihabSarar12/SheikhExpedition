import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
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

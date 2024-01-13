import React from 'react';
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
    const project = useLoaderData();

    if (!project) {
        return <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-16 w-16"></div>
    </div>; 
    }

    return (
        <div className=' p-4 mx-auto my-auto '>
            <h1 className="text-2xl font-bold mb-4">{project.ProjectName}</h1>
            {project.ProjectImage && (
                <img
                    src={`../assests/Projects/${project.ProjectImage}`}
                    alt="Project"
                    className="max-w-full h-auto"
                />
            )}
            <p className="mb-2">Full Description: {project.ProjectDescription}</p>
            <p className="mb-2">Start Date: {project.StartDate}</p>
            <p className="mb-2">End Date: {project.EndDate}</p>
            <p className="mb-2">Budget: {project.Budget}</p>
            <p>Status: {project.Status}</p>
        </div>
    );
};

export default ProjectDetails;

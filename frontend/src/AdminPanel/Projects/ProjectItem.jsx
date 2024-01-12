import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md relative">
            {project.ProjectImage && (
                <div className="mt-4">
                    <img
                        src={`../assests/Projects/${project.ProjectImage}`}
                        alt="Project"
                        className="max-w-full h-auto"
                    />
                </div>
            )}
            <h2 className="text-xl font-bold mb-4">{project.ProjectName}</h2>

            <div className="mt-4">
                <p className="mb-2">
                    Description: {project.ProjectDescription.substring(0, 10) + '...'}
                </p>
            </div>

            <Link to={`/projects/${project.ProjectID}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">
                See More
            </Link>
        </div>
    );
};

export default ProjectItem;

import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project, className }) => {
    return (
        <div className={`bg-white p-6 rounded-md shadow-md flex flex-col justify-between ${className}`}>
            <div>
                {project.ProjectImage && (
                    <div className="mb-4">
                        <img
                            src={`assests/ProjectImages/${project.ProjectImage}`}
                            alt="Project"
                            className="w-full h-32 object-cover rounded-md"
                        />
                    </div>
                )}
                <h2 className="text-2xl font-bold mb-2">{project.ProjectName}</h2>
                <div className="mb-4">
                    <p className="text-sm text-gray-700">
                        Description: {project.ProjectDescription.substring(0, 50) + '...'}
                    </p>
                </div>
            </div>
            <div className="mt-auto">
                <Link to={`/projects/${project.ProjectID}`} className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    See More
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;


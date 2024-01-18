import { Pen, Trash } from 'lucide-react';
import React from 'react';
import { useLoaderData,useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();
    const navigate = useNavigate('');

    const handleEdit = () => {
        const projectId = project.ProjectID;
        navigate(/update-project/${projectId});
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(
                http://localhost:8080/projects/${project.ProjectID},
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
            if (response.ok) {
                console.log('Project deleted successfully');
                navigate('/projects');
            } else {
                console.error('Error deleting project:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting project:', error.message);
        }
    };
    if (!project) {
        return (
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-16 w-16"></div>
            </div>
        );
    }
    return (
        <div className="p-4 mx-auto my-auto">
            <div className="flex justify-end mb-4">
                <button className="mx-2" onClick={handleEdit}>
                    <Pen size={24} color="#4CAF50" />
                </button>
                <button className="mx-2" onClick={handleDelete}>
                    <Trash size={24} color="#F44336" />
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-4">{project.ProjectName}</h1>
            {project.ProjectImage && (
                <img
                src={/assests/ProjectImages/${project.ProjectImage}}
                    alt="Project"
                    className="max-w-full h-auto"
                />
            )}

            <p className="mb-2">
                Full Description: {project.ProjectDescription}
            </p>
            <p className="mb-2">Start Date: {project.StartDate}</p>
            <p className="mb-2">End Date: {project.EndDate}</p>
            <p className="mb-2">Budget: {project.Budget}</p>
            <p>Status: {project.Status}</p>
        </div>
    );
};

export default ProjectDetails;
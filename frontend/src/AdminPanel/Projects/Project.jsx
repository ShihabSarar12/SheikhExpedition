import { useLoaderData } from "react-router-dom";
import ProjectItem from './ProjectItem';

const Projects = () => {
    const projects = useLoaderData();
    return (
        // TODO have to fix responsiveness design is broken with ml-64
        <div className="container mx-auto p-4 ml-64 mr-4">
            <h1 className="text-center text-3xl font-bold mb-4 ">
                Projects Page
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                {projects.map(project => (
                    <ProjectItem key={project.ProjectID} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

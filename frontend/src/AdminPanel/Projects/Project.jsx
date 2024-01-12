import { Link, useLoaderData } from "react-router-dom";
import ProjectItem from './ProjectItem';
import { PlusCircle } from "lucide-react";

const Projects = () => {
    const projects = useLoaderData();
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-center text-3xl font-bold mb-4 ">
                Projects Page
            </h1>
            <Link to="/add-project" className="text-blue-500 text-2xl hover:text-blue-700 flex items-center pb-4">
                    <PlusCircle size={26} className=" text-center" />
                    Add Project
                </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {projects.map(project => (
                    <ProjectItem key={project.ProjectID} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

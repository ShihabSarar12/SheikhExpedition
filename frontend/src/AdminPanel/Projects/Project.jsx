import { Link, useLoaderData } from "react-router-dom";
import ProjectItem from './ProjectItem';
import { PlusCircle } from "lucide-react";

const Projects = () => {
    const projects = useLoaderData();

    return (
        <div className="container mx-auto px-4 md:p-8 lg:p-12">
            <h1 className="text-5xl font-extrabold mb-8 text-center">Projects</h1>
            <Link
                to="/add-project"
                className="text-blue-500 text-xl hover:text-blue-700 flex items-center mb-4"
            >
                <PlusCircle size={20} className="mr-2" />
                Add Project
            </Link>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {projects.map(project => (
                    <ProjectItem
                        key={project.ProjectID}
                        project={project}
                        className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;

import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8080/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (

    <div className="container mx-auto p-4 ml-64 mr-4">
      <h1 className="text-center text-3xl font-bold mb-4 ">Projects Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {projects.map((project) => (
          <ProjectItem key={project.ProjectID} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

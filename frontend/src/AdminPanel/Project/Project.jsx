import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import ProjectItem from "./ProjectItem";
import Modal from "./AddProjectModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
    closeModal();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects Page</h1>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded grid place-items-center"
        onClick={openModal}
      > Add Project
        <Plus size={20} className="mr-2" />

      </button>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectItem key={project.ProjectID} project={project} />
        ))}

      </div>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        onAddProject={handleAddProject}
      >
      </Modal>
    </div>
  );
};

export default Projects;

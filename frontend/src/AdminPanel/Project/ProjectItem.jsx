import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const ProjectItem = ({ project }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/projects/${project.ProjectID}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        const blob = new Blob([new Uint8Array(data.image.data)], {
          type: "image/png",
        });

        const imageUrl = URL.createObjectURL(blob);

        setImageSrc(imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [project.ProjectID]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (loading) {
    return <div className="bg-white p-6 rounded-md shadow-md">Loading...</div>;
  }

  if (error) {
    return (
      <div className="bg-white p-6 rounded-md shadow-md">
        <p>Error fetching image: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md relative">
      {imageSrc && (
        <div className="mt-4">
          <img src={imageSrc} alt="Project" className="max-w-full h-auto" />
        </div>
      )}
      <h2 className="text-xl font-bold mb-4">{project.ProjectName}</h2>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal} imageURL={imageSrc}>
          <h1 className="text-2xl font-bold mb-4">{project.ProjectName}</h1>
          <p className="mb-2">Description: {project.ProjectDescription}</p>
          <p className="mb-2">Start Date: {project.StartDate}</p>
          <p className="mb-2">End Date: {project.EndDate}</p>
          <p className="mb-2">Budget: ${project.Budget}</p>
          <p>Status: {project.Status}</p>
        </Modal>
      )}

      <div className="mt-4">
        <p className="mb-2">Description: {project.ProjectDescription}</p>
        <p className="mb-2">Start Date: {project.StartDate}</p>
        <p className="mb-2">End Date: {project.EndDate}</p>
        <p className="mb-2">Budget: ${project.Budget}</p>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded absolute bottom-4 right-4"
        onClick={openModal}
      >
        See More
      </button>
    </div>
  );
};

export default ProjectItem;

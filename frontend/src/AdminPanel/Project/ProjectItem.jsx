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
        const { ProjectImage } = project;

        if (ProjectImage && ProjectImage.data && ProjectImage.data.length > 0) {
          const blob = new Blob([new Uint8Array(ProjectImage.data)], {
            type: "image/png",
          });

          const imageUrl = URL.createObjectURL(blob);

          setImageSrc(imageUrl);
        } else {
          setImageSrc(null);
        }
      } catch (error) {
        console.error("Error handling image:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [project]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md relative">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {imageSrc && (
        <div className="mt-4">
          <img src={imageSrc} alt="Project" className="max-w-full h-auto" />
        </div>
      )}
      <h2 className="text-xl font-bold mb-4">{project.ProjectName}</h2>

      <div className="mt-4">
        <p className="mb-2">
          Description: {project.ProjectDescription.substring(0, 10)}
        </p>
      </div>

      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal} imageURL={imageSrc}>
          <h1 className="text-2xl font-bold mb-4">{project.ProjectName}</h1>
          <p className="mb-2">Full Description: {project.ProjectDescription}</p>
          <p className="mb-2">Start Date: {project.StartDate}</p>
          <p className="mb-2">End Date: {project.EndDate}</p>
          <p className="mb-2">Budget: ${project.Budget}</p>
          <p>Status: {project.Status}</p>
        </Modal>
      )}
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

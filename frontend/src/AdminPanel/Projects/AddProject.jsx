import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProject = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        ProjectName: '',
        ProjectDescription: '',
        ProjectImage: '',
        StartDate: '',
        EndDate: '',
        Status: '',
        Budget: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const image = file.name;
            setFormValues({
                ...formValues,
                ProjectImage: image,
            });
            console.log(image);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                navigate('/projects');
            } else {
                console.error('Error adding project:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding project:', error.message);
        }
    };

    return (
        <div className="container mx-auto p-8 max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">Add Project</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="ProjectName" className="block text-sm font-medium text-gray-700">
                        Project Name
                    </label>
                    <input
                        type="text"
                        id="ProjectName"
                        name="ProjectName"
                        value={formValues.ProjectName}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="ProjectDescription" className="block text-sm font-medium text-gray-700">
                        Project Description
                    </label>
                    <textarea
                        id="ProjectDescription"
                        name="ProjectDescription"
                        value={formValues.ProjectDescription}
                        onChange={handleInputChange}
                        rows="4"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="ProjectImage" className="block text-sm font-medium text-gray-700">
                        Project Image
                    </label>
                    <input
                        type="file"
                        id="ProjectImage"
                        name="ProjectImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="StartDate" className="block text-sm font-medium text-gray-700">
                        Start Date
                    </label>
                    <input
                        type="date"
                        id="StartDate"
                        name="StartDate"
                        value={formValues.StartDate}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="EndDate" className="block text-sm font-medium text-gray-700">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="EndDate"
                        name="EndDate"
                        value={formValues.EndDate}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="Status" className="block text-sm font-medium text-gray-700">
                        Status
                    </label>
                    <input
                        type="text"
                        id="Status"
                        name="Status"
                        value={formValues.Status}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="Budget" className="block text-sm font-medium text-gray-700">
                        Budget
                    </label>
                    <input
                        type="number"
                        id="Budget"
                        name="Budget"
                        value={formValues.Budget}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProject;

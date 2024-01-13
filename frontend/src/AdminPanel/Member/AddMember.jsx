import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddMember = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formValues, setFormValues] = useState({
        TeamMemberName: '',
        TeamMemberImage: '',
        TeamMemberPosition: '',
        TeamMemberContact: '',
        TeamMemberEmail: '',
    });

    useEffect(() => {
        if (id) {
            fetchMemberDetails(id);
        }
    }, [id]);

    const fetchMemberDetails = async (memberId) => {
        try {
            const response = await fetch(`http://localhost:8080/teammembers/${memberId}`);
            const memberData = await response.json();

            setFormValues({
                ...memberData,
            });
        } catch (error) {
            console.error('Error fetching member details:', error);
        }
    };

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
                TeamMemberImage: image,
            });
            console.log(image);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const apiEndpoint = id ? `http://localhost:8080/teammembers/${id}` : 'http://localhost:8080/teammembers';
            const method = id ? 'PUT' : 'POST';

            const response = await fetch(apiEndpoint, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                navigate('/team-members');
            } else {
                console.error(`Error ${id ? 'updating' : 'adding'} team member:`, response.statusText);
            }
        } catch (error) {
            console.error(`Error ${id ? 'updating' : 'adding'} team member:`, error.message);
        }
    };

    return (
        <div className="container mx-auto p-8 max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">Add Team Member</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="TeamMemberName" className="block text-sm font-medium text-gray-700">
                        Team Member Name
                    </label>
                    <input
                        type="text"
                        id="TeamMemberName"
                        name="TeamMemberName"
                        value={formValues.TeamMemberName}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="TeamMemberImage" className="block text-sm font-medium text-gray-700">
                        Team Member Image
                    </label>
                    <input
                        type="file"
                        id="TeamMemberImage"
                        name="TeamMemberImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="TeamMemberPosition" className="block text-sm font-medium text-gray-700">
                        Team Member Position
                    </label>
                    <input
                        type="text"
                        id="TeamMemberPosition"
                        name="TeamMemberPosition"
                        value={formValues.TeamMemberPosition}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="TeamMemberContact" className="block text-sm font-medium text-gray-700">
                        Team Member Contact
                    </label>
                    <input
                        type="text"
                        id="TeamMemberContact"
                        name="TeamMemberContact"
                        value={formValues.TeamMemberContact}
                        onChange={handleInputChange}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>

                <div>
                    <label htmlFor="TeamMemberEmail" className="block text-sm font-medium text-gray-700">
                        Team Member Email
                    </label>
                    <input
                        type="text"
                        id="TeamMemberEmail"
                        name="TeamMemberEmail"
                        value={formValues.TeamMemberEmail}
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

export default AddMember;


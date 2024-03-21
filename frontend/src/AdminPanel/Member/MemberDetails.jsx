import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData, useNavigate } from 'react-router-dom';

const TeamMemberDetails = () => {
    const teamMember = useLoaderData();

    const navigate = useNavigate('');
    const handleEdit = () => {
        const { TeamMemberID } = teamMember;
        navigate(`/update-member/${TeamMemberID}`);
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(
                `http://localhost:8080/teammembers/${teamMember.TeamMemberID}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );

            if (response.ok) {
                console.log('member deleted successfully');
                navigate('/team-members');
            } else {
                console.error('Error deleting project:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting project:', error.message);
        }
    };

    if (!teamMember) {
        return (
            <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
                <div className="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-16 w-16"></div>
            </div>
        );
    }

    return (
        <div className="p-4 mx-auto my-auto ">
            <div className="flex justify-end mb-4">
                <button className="mx-2" onClick={handleEdit}>
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button className="mx-2" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-4">
                {teamMember.TeamMemberName}
            </h1>
            {teamMember.TeamMemberImage && (
                <img
                    src={`../assests/Members/${teamMember.TeamMemberImage}`}
                    alt="Team Member"
                    className="max-w-full h-auto"
                />
            )}
            <p className="mb-2">Position: {teamMember.TeamMemberPosition}</p>
            <p className="mb-2">Contact: {teamMember.TeamMemberContact}</p>
            <p className="mb-2">Email: {teamMember.TeamMemberEmail}</p>
        </div>
    );
};

export default TeamMemberDetails;

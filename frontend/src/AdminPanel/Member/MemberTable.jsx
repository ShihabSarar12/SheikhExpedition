import React from 'react';
import { Link } from 'react-router-dom';

const MemberTable = ({ members }) => {
    console.log(members);
    return (
        <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map(({ TeamMemberID, TeamMemberName, TeamMemberPosition, TeamMemberContact, TeamMemberEmail }) =>
                (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{TeamMemberName}</div>
                        <div className="text-sm opacity-50">Bronx, New York</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='w-48'>
                      {TeamMemberPosition.length > 15 ? TeamMemberPosition.slice(0, 15)+'...' : TeamMemberPosition}
                      <br/>
                      <span className="badge badge-ghost badge-sm">Sheikh Expediting</span>
                    </div>
                  </td>
                  <td>{TeamMemberContact}</td>
                  <td>{TeamMemberEmail.length > 15 ? TeamMemberEmail.slice(0, 15) + '...' : TeamMemberEmail}</td>
                  <th>
                    <Link to={`/team-members/${TeamMemberID}`} className="text-sm w-16 h-12 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                        Read More
                    </Link>
                  </th>
                </tr>
                )
            )}
          </tbody>
          <tfoot>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
};

export default MemberTable;
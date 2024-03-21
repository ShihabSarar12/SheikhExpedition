import React from 'react';
import Sidebar, { SidebarItem } from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDashboard,
    faBook,
    faFolder,
    faUsers,
    faGear,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <Sidebar>
            <SidebarItem
                icon={<FontAwesomeIcon icon={faDashboard} />}
                text="Dashboard"
                to="/dashboard"
            />
            <SidebarItem
                icon={<FontAwesomeIcon icon={faFolder} />}
                text="Projects"
                to="/projects"
            />
            <SidebarItem
                icon={<FontAwesomeIcon icon={faBook} />}
                text="Blogs"
                to="/blogs"
            />
            <SidebarItem
                icon={<FontAwesomeIcon icon={faUsers} />}
                text="Team"
                to="/team-members"
            />
            <SidebarItem
                icon={<FontAwesomeIcon icon={faUser} />}
                text="Admin"
                to="/admins"
            />
            <hr className="my-3" />
            <SidebarItem
                icon={<FontAwesomeIcon icon={faGear} />}
                text="Settings"
                to="/settings"
            />
        </Sidebar>
    );
};

export default Navbar;

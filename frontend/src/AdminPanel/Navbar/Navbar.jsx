import React from 'react';
import Sidebar, { SidebarItem } from '../Sidebar/Sidebar';
import {
    LayoutDashboard,
    Book,
    Folder,
    Users,
    LifeBuoy,
    Settings,
} from 'lucide-react';

const Navbar = () => {
    //TODO nav bar should be fixed in top-0 and left-0
    return (
        <div className="sticky top-0 left-0 h-screen">
            <Sidebar>
                <SidebarItem
                    icon={<LayoutDashboard size={20} />}
                    text="Dashboard"
                    to="/dashboard"
                />
                <SidebarItem
                    icon={<Folder size={20} />}
                    text="Projects"
                    to="/projects"
                />
                <SidebarItem
                    icon={<Book size={20} />}
                    text="Blogs"
                    to="/blogs"
                />
                <SidebarItem
                    icon={<Users size={20} />}
                    text="Team Members"
                    to="/teammembers"
                />
                <hr className="my-3" />
                <SidebarItem
                    icon={<Settings size={20} />}
                    text="Settings"
                    to="/settings"
                />
                <SidebarItem
                    icon={<LifeBuoy size={20} />}
                    text="Help"
                    to="/help"
                />
            </Sidebar>
        </div>
    );
};

export default Navbar;

import React from "react";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import {
  LayoutDashboard,
  Book,
  Folder,
  Users,
  LifeBuoy,
  Settings,
} from "lucide-react";

const Navbar = () => {
  return (
   
      <div className="fixed top-0 left-0 h-screen">
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
            to="/team-members"
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

import React from "react";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import {
  LayoutDashboard,
  Book,
  Folder,
  Users,
  Settings,
  User
} from "lucide-react";

const Navbar = () => {
  return (
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
        text="Team"
        to="/team-members"
      />
      <SidebarItem
        icon={<User size={20} />}
        text="Admin"
        to="/admins"
      />
      <hr className="my-3" />
      <SidebarItem
        icon={<Settings size={20} />}
        text="Settings"
        to="/settings"
      />
    </Sidebar>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
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
  );
};

export default Navbar;

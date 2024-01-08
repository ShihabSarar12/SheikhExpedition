import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./Dashboard/Dashboard";
import Projects from "./Project/Project";
import Blog from "./Blog/Blog";
import Settings from "./Settings/Settings";
import Help from "./Help/Help";
import Member from "./Member/Member";


const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blog/>}/>
          <Route path="/team-members" element={<Member/>} />
          <Route path="/help" element={<Help />} />
          <Route path="/settings" element={<Settings/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

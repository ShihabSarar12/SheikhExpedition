import { createBrowserRouter } from "react-router-dom";
import Adminpanel from "../Adminpanel";
import Dashboard from "../Dashboard/Dashboard";
import Projects from "../Projects/Project";
import Help from "../Help/Help";
import ProjectItem from "../Projects/ProjectItem";
import Blogs from "../Blog/Blog";
import BlogItem from "../Blog/BlogItem";
import Services from "../Services/Services";
import ServiceItem from "../Services/ServiceItem";
import Members from "../Member/Member";
import MemberItem from "../Member/MemberItem";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Adminpanel />,
        children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '*',
            element: <Help/> //TODO need to change this to no page found component
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/projects',
            loader: async () =>{
                return fetch(`http://localhost:8080/projects`);
            },
            element: <Projects />
        },
        {
            path: '/projects/:id',
            loader: async ({ params }) =>{
                return fetch(`http://localhost:8080/projects/${params.id}`);
            },
            element: <ProjectItem />
        },
        {
            path: '/blogs',
            loader: async () =>{
                return fetch(`http://localhost:8080/blogs`);
            },
            element: <Blogs />
        },
        {
            path: '/blogs/:id',
            loader: async ({ params }) =>{
                return fetch(`http://localhost:8080/blogs/${params.id}`);
            },
            element: <BlogItem />
        },
        {
            path: '/services',
            loader: async () =>{
                return fetch(`http://localhost:8080/services`);
            },
            element: <Services />
        },
        {
            path: '/services/:id',
            loader: async ({ params }) =>{
                return fetch(`http://localhost:8080/services/${params.id}`);
            },
            element: <ServiceItem />
        },
        {
            path: '/teammembers',
            loader: async () =>{
                return fetch(`http://localhost:8080/teammembers`);
            },
            element: <Members />
        },
        {
            path: '/teammembers/:id',
            loader: async ({ params }) =>{
                return fetch(`http://localhost:8080/teammembers/${params.id}`);
            },
            element: <MemberItem />
        },
        ]
    }
]);
import { createBrowserRouter } from "react-router-dom";
import Adminpanel from "../Adminpanel";
import Dashboard from "../Dashboard/Dashboard";
import Projects from "../Projects/Project";
import Blogs from "../Blog/Blog";
import Services from "../Services/Services";
import ServiceItem from "../Services/ServiceItem";
import Member from "../Member/Member";
import MemberDetails from "../Member/MemberDetails";
import ProjectDetails from "../Projects/ProjectDetails";
import BlogDetails from "../Blog/BlogDetails";
import AddBlog from "../Blog/AddBlog";
import AddProject from "../Projects/AddProject";
import AddMember from "../Member/AddMember";
import Admins from "../Admins/Admins";
import DefaultPage from "../DefaultPage/DefaultPage";
import Login from "../Login/Login";

export const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
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
            element: <DefaultPage /> //TODO need to change this to no page found component
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
            loader: async ({params}) =>{
                return fetch(`http://localhost:8080/projects/${params.id}`);
            },
            element: <ProjectDetails />
        },
        {
            path: '/add-project',
            element: <AddProject />
        },
        {
            path: '/update-project/:id',
            loader: async ({ params }) => {
                return fetch(`http://localhost:8080/projects/${params.id}`);
            },
            element: <AddProject />,
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
            element: <BlogDetails />
        },
        {
            path: '/add-blog', element: <AddBlog />
        },
        {
            path: '/update-blog/:id',
            loader: async ({ params }) => {
                return fetch(`http://localhost:8080/blogs/${params.id}`);
            },
            element: <AddBlog />,
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
            path: '/update-service/:id',
            loader: async ({ params }) => {
                return fetch(`http://localhost:8080/services/${params.id}`);
            },
            element: <AddBlog />,
        },
        {
            path: '/team-members',
            loader: async () =>{
                return fetch(`http://localhost:8080/teammembers`);
            },
            element: <Member />
        },
        {
            path: '/team-members/:id',
            loader: async ({params}) =>{
                return fetch(`http://localhost:8080/teammembers/${params.id}`);
            },
            element: <MemberDetails />
        },
        {
            path: '/add-member', element: <AddMember />
        },
        {
            path: '/update-member/:id',
            loader: async ({ params }) => {
                return fetch(`http://localhost:8080/teammembers/${params.id}`);
            },
            element: <AddMember />,
        },
        {
            path: '/admins',
            loader: async () =>{
                return fetch(`http://localhost:8080/admins`);
            },
            element: <Admins />
        }
        ]
    }
]);
import { createBrowserRouter } from 'react-router-dom';
import Adminpanel from '../AdminPanel/Adminpanel';
import Dashboard from '../AdminPanel/Dashboard/Dashboard';
import Projects from '../AdminPanel/Projects/Project';
import Blogs from '../AdminPanel/Blog/Blog';
import Services from '../AdminPanel/Services/Services';
import ServiceItem from '../AdminPanel/Services/ServiceItem';
import Member from '../AdminPanel/Member/Member';
import MemberDetails from '../AdminPanel/Member/MemberDetails';
import ProjectDetails from '../AdminPanel/Projects/ProjectDetails';
import BlogDetails from '../AdminPanel/Blog/BlogDetails';
import AddBlog from '../AdminPanel/Blog/AddBlog';
import AddProject from '../AdminPanel/Projects/AddProject';
import AddMember from '../AdminPanel/Member/AddMember';
import Admins from '../AdminPanel/Admins/Admins';
import DefaultPage from '../AdminPanel/DefaultPage/DefaultPage';
import Login from '../AdminPanel/Login/Login';
import Table from '../AdminPanel/Member/MemberTable';
import Home from '../Main/Pages/Home/Home';
import HeroPage from '../Main/Pages/HeroPage/HeroPage';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <HeroPage />,
            },
            {
                path: '/about',
                element: <div>About</div>,
            },
            {
                path: '/services',
                element: <div>Services</div>,
            },
            {
                path: '/projects',
                element: <div>Projects</div>,
            },
            {
                path: '/news',
                element: <div>News</div>,
            },
            {
                path: '/contacts',
                element: <div>Contacts</div>,
            },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    // {
    //     path: '/admin',
    //     element: <Adminpanel />,
    //     children: [
    //         {
    //             path: '/',
    //             element: <Dashboard />,
    //         },
    //         {
    //             path: '*',
    //             element: <DefaultPage />, //TODO need to change this to no page found component
    //             // element: <Table />
    //         },
    //         {
    //             path: '/dashboard',
    //             element: <Dashboard />,
    //         },
    //         {
    //             path: '/projects',
    //             loader: async () => {
    //                 return fetch(`http://localhost:8080/projects`);
    //             },
    //             element: <Projects />,
    //         },
    //         {
    //             path: '/projects/:id',
    //             loader: async ({ params }) => {
    //                 return fetch(`http://localhost:8080/projects/${params.id}`);
    //             },
    //             element: <ProjectDetails />,
    //         },
    //         {
    //             path: '/add-project',
    //             element: <AddProject />,
    //         },
    //         {
    //             path: '/update-project/:id',
    //             loader: async ({ params }) => {
    //                 return fetch(`http://localhost:8080/projects/${params.id}`);
    //             },
    //             element: <AddProject />,
    //         },
    //         {
    //             path: '/blogs',
    //             loader: async () => {
    //                 return fetch(`http://localhost:8080/blogs`);
    //             },
    //             element: <Blogs />,
    //         },
    //         {
    //             path: '/blogs/:id',
    //             loader: async ({ params }) => {
    //                 return fetch(`http://localhost:8080/blogs/${params.id}`);
    //             },
    //             element: <BlogDetails />,
    //         },
    //         {
    //             path: '/add-blog',
    //             element: <AddBlog />,
    //         },
    //         {
    //             path: '/update-blog/:id',
    //             loader: async ({ params }) => {
    //                 return fetch(`http://localhost:8080/blogs/${params.id}`);
    //             },
    //             element: <AddBlog />,
    //         },
    //         {
    //             path: '/services',
    //             loader: async () => {
    //                 return fetch(`http://localhost:8080/services`);
    //             },
    //             element: <Services />,
    //         },
    //         {
    //             path: '/services/:id',
    //             loader: async ({ params }) => {
    //                 return fetch(`http://localhost:8080/services/${params.id}`);
    //             },
    //             element: <ServiceItem />,
    //         },
    //         {
    //             path: '/update-service/:id',
    //             loader: async ({ params }) => {
    //                 return fetch(`http://localhost:8080/services/${params.id}`);
    //             },
    //             element: <AddBlog />,
    //         },
    //         {
    //             path: '/team-members',
    //             loader: async () => {
    //                 return fetch(`http://localhost:8080/teammembers`);
    //             },
    //             element: <Member />,
    //         },
    //         {
    //             path: '/team-members/:id',
    //             loader: async ({ params }) => {
    //                 return fetch(
    //                     `http://localhost:8080/teammembers/${params.id}`,
    //                 );
    //             },
    //             element: <MemberDetails />,
    //         },
    //         {
    //             path: '/add-member',
    //             element: <AddMember />,
    //         },
    //         {
    //             path: '/update-member/:id',
    //             loader: async ({ params }) => {
    //                 return fetch(
    //                     `http://localhost:8080/teammembers/${params.id}`,
    //                 );
    //             },
    //             element: <AddMember />,
    //         },
    //         {
    //             path: '/admins',
    //             loader: async () => {
    //                 return fetch(`http://localhost:8080/admins`);
    //             },
    //             element: <Admins />,
    //         },
    //     ],
    // },
]);

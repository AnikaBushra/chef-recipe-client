import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import SingleChef from "../components/SingleChef/SingleChef";
import Blog from "../components/Blog/Blog";
import PrivateRoute from "../components/PrivetRoute/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <PageNotFound></PageNotFound>
        ,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-chef-recipe-server-anikabushra.vercel.app/chefdata')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'chefdata/:id',
                element: <PrivateRoute><SingleChef></SingleChef></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-10-chef-recipe-server-anikabushra.vercel.app/chefdata/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    }
])
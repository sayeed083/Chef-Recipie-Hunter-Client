import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ChefRecipies from "../Pages/Home/Chef/ChefRecipies/ChefRecipies";
import Home from "../Pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([

    {
        path:'/',
        element : <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/viewrecipies/:rId',
                element: <PrivateRoute><ChefRecipies></ChefRecipies></PrivateRoute>,
                loader: ({params}) => fetch (`https://a-10-chef-recipe-server-sayeed083.vercel.app/singleChefRecipies/${params.rId}`)
            }
        ]
    }
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ChefRecipies from "../Pages/Home/Chef/ChefRecipies/ChefRecipies";
import Home from "../Pages/Home/Home/Home";


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
                element: <ChefRecipies></ChefRecipies>,
                loader: ({params}) => fetch (`http://localhost:5000/singleChefRecipies/${params.rId}`)
            }
        ]
    }
])

export default router;
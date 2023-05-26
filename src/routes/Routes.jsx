import { createBrowserRouter } from "react-router-dom";
import ChefDetails from "../components/ChefDetails/ChefDetails.jsx";
import Blog from "../components/Extra/Blog.jsx";
import ErrorPage from "../components/Extra/ErrorPage.jsx";
import Home from "../components/Home/Home.jsx";
import Login from "../components/Login/Login.jsx";
import Register from "../components/Login/Register.jsx";
import Main from "../layout/Main.jsx";
import PrivateRoute from "../PrivateRoute.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://meat-club-server-li-pon.vercel.app/allChef')
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
                path: 'blog',
                element: <Blog></Blog>

            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://meat-club-server-li-pon.vercel.app/allChef/${params.id}`)
            }
        ]
    }
]);

export default router;
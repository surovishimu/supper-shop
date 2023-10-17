import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Mycart from "../Pages/MyCart/Mycart";
import Login from "../Pages/Login/Login";



const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '//mycart',
                element: <Mycart></Mycart>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default myCreatedRouter;
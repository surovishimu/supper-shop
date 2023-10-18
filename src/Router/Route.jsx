import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Mycart from "../Pages/MyCart/Mycart";
import Login from "../Pages/Login/Login";
import SingleBrand from "../Pages/SingleBrand/SingleBrand";



const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/:id',
                element: <SingleBrand></SingleBrand>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/mycart',
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
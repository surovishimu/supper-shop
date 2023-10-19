import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import Mycart from "../Pages/MyCart/Mycart";
import Login from "../Pages/Login/Login";
import SingleBrand from "../Pages/SingleBrand/SingleBrand";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProductDetails from "../Pages/SingleBrand/ProductDetails";
import UpdateProduct from "../Pages/SingleBrand/UpdateProduct";



const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/:id',
                element: <SingleBrand></SingleBrand>,
                loader: () => fetch('/brand.json'),
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>,

            },
            {
                path: '/mycart',
                element: <Mycart></Mycart>,
                loader: () => fetch('http://localhost:5000/mycart')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/brands/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/updatebrand/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)


            }
        ]
    }
])

export default myCreatedRouter;
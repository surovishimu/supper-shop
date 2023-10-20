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
import Register from "../Pages/Login/Registration";
import PrivateRout from "../PrivateRoute/PrivateRoute";



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
                element: <PrivateRout><SingleBrand></SingleBrand></PrivateRout>,
                loader: () => fetch('/brand.json'),
            },
            {
                path: '/addproducts',
                element: <PrivateRout><AddProducts></AddProducts></PrivateRout>,

            },
            {
                path: '/mycart',
                element: <PrivateRout><Mycart></Mycart></PrivateRout>,
                loader: () => fetch('https://brand-shop-server-beta.vercel.app/mycart')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/brands/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('https://brand-shop-server-beta.vercel.app/products')
            },
            {
                path: '/updatebrand/:id',
                element: <PrivateRout> <UpdateProduct></UpdateProduct></PrivateRout>,
                loader: ({ params }) => fetch(`https://brand-shop-server-beta.vercel.app/products/${params.id}`)


            }

        ]
    }
])

export default myCreatedRouter;
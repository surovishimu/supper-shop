import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import UseAuth from "../Hooks/useAuth";




const MainLayout = () => {
    const { loading } = UseAuth();
    if (loading) return (
        <div className="flex justify-center">
            <span className="loading loading-spinner text-black loading-lg"></span>
        </div>
    );
    return (

        <div className="bg-white dark:bg-gray-900 font-Merriweather">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="bottom-right"></Toaster>
        </div>
    );
};

export default MainLayout;
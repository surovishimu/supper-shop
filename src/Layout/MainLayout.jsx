import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {

    return (

        <div className="bg-white dark:bg-gray-900 font-Merriweather">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="bottom-center"></Toaster>
        </div>
    );
};

export default MainLayout;
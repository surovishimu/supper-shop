import { useLoaderData } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";
import Banner from "../../Components/Header/Banner/Banner";
import Category from "../../Components/Brands/category";
import Feature from "../../Components/Brands/Feature";
import { Helmet } from "react-helmet-async";



const Home = () => {

    const brands = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>
                    Orchid Beauty | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Brands brands={brands}></Brands>
            <Category></Category>
            <Feature></Feature>
        </div>
    );

};

export default Home;
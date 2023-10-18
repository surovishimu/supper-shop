import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandDetails from "./BrandDetails";


const ProductDetails = () => {
    const [brand, setBrand] = useState({})
    const { id } = useParams();

    const brands = useLoaderData();

    useEffect(() => {
        const findProduct = brands?.find(brand => brand._id === id)
        setBrand(findProduct)
    }, [brands, id])
    
    return (

        <div>
            <BrandDetails brand={brand}> </BrandDetails>
        </div>
    );
};

export default ProductDetails;
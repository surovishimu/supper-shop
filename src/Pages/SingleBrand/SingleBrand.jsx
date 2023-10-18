import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const SingleBrand = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const brand = useLoaderData();
    useEffect(() => {
        const findCard = brand?.find(singlebrand => singlebrand.id == id)
        setProduct(findCard);
    }, [id, brand])

    console.log(product);
    return (
        <div>
            <div className="carousel w-full h-[70vh]">
                <div id="item1" className="carousel-item w-full">
                    <img src={product.slider_1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={product.slider_2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={product.slider_3} className="w-full" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>
        </div>
    );
};

export default SingleBrand;
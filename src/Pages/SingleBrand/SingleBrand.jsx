import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandWiseProduct from "./BrandWiseProduct";


const SingleBrand = () => {
    const [product, setProduct] = useState([]);
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    const brand = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
                setLoading(false);
            })


        const findCard = brand?.find(singlebrand => singlebrand.id == id)
        setProduct(findCard);
    }, [id, brand])

    const filteredProducts = brands.filter(brand => brand.brandName.toLowerCase() === product.brand_name.toLowerCase());

    console.log(filteredProducts);

    return (
        <>
            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <span className="loading loading-spinner loading-lg items-center"></span>
                </div>
            ) : (
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

                    {filteredProducts.length === 0 ? (
                        <div className="no-products-message text-2xl font-semibold text-center text-red-500 mt-20 mb-20">
                            Sorry! We are Out of Stock for This Brand
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            {filteredProducts.map(brand => (
                                <BrandWiseProduct key={brand._id} brand={brand}></BrandWiseProduct>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>

    );
};

export default SingleBrand;


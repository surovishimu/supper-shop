import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';


const BrandDetails = ({ brand }) => {
    const { image, name, price, details } = brand;

    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleAddToCart = () => {
        const mydata = { image, name, price, details };
        setLoading(true);

        fetch('http://localhost:5000/mycart', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mydata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added to the cart successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setCart([...cart, mydata]);
                }

            })
            .finally(() => {
                setLoading(false);
            });
    }
    return (

        <div className="card w-9/12 mx-auto lg:card-side bg-base-100 shadow-xl my-20">
            <div className="flex-1">
                <figure><img src={image} alt="Album" /></figure>
            </div>
            <div className="card-body flex-1">
                <h2 className="card-title text-2xl">{name}</h2>
                <p><span className="text-xl font-semibold">About This Product:</span>{details}</p>
                <p className="text-xl">Price:{price}</p>
                <div className="card-actions justify-end">
                    <Link to={'/mycart'}>

                        <button onClick={handleAddToCart} className="btn bg-amber-600 text-white hover:bg-amber-700">Add to Cart

                            {loading && <span className="loading loading-spinner loading-lg"></span>}</button></Link>
                </div>
            </div>
        </div>

    );
};
BrandDetails.propTypes = {
    brand: PropTypes.object.isRequired
}
export default BrandDetails;
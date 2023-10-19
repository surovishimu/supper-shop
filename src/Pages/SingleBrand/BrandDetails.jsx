import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const BrandDetails = ({ brand }) => {
    const { image, name, price, details } = brand;

    const [cart, setCart] = useState([]);

    const handleAddToCart = () => {
        const mydata = { image, name, price, details };

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
    }
    return (

        <div className="card w-9/12 mx-auto lg:card-side bg-base-100 shadow-xl my-20">
            <div className="flex-1">
                <figure><img src={image} alt="Album" /></figure>
            </div>
            <div className="card-body flex-1">
                <h2 className="card-title text-2xl">{name}</h2>
                <p>About This Product:{details}</p>
                <p className="text-xl">Price:{price}</p>
                <div className="card-actions justify-end">
                    <Link to={'/mycart'}>

                        <button onClick={handleAddToCart} className="btn bg-amber-600 text-white hover:bg-amber-700">Add to Cart</button></Link>
                </div>
            </div>
        </div>

    );
};

export default BrandDetails;
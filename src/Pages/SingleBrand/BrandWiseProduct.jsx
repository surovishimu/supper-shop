import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const BrandWiseProduct = ({ brand, brands, setBrands }) => {
    const { _id, image, name, brandName, type, description, price, rating } = brand;


    const renderRatingStars = () => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<span key={i} role="img" aria-label="Star">⭐</span>);
        }
        return stars;
    };

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-beta.vercel.app/products/${_id}`, {
                    method: "DELETE",
                })

                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = brands.filter(iteam => iteam._id !== _id);
                            setBrands(remaining);
                        }

                    })

            }



        })
    }
    return (
        <div className="px-10 flex flex-wrap ">
            <div className="card lg:card-side md:card-normal bg-base-100 shadow-2xl p-4 mt-10 mb-10">
                <figure className='flex-1 '><img src={image} alt="Movie" /></figure>
                <div className="card-body flex-1">
                    <h2 className="card-title font-bold text-black">{name}</h2>
                    <h2 className="text-lg font-semibold text-amber-500"><span className="text-xl font-bold text-black">Brans Name:</span>{brandName}</h2>
                    <h2><span >Type:</span>{type}</h2>
                    <p>
                        {description}
                    </p>
                    <h2>Price:{price}</h2>
                    <p>Rating:{renderRatingStars()}</p>

                    <div className='flex gap-2 mt-2'>
                        <Link to={`/brands/${_id}`}>
                            <button className="tooltip tooltip-left btn bg-orange-400 text-white hover:bg-orange-400 normal-case" data-tip="See Details"><AiOutlineEye className='text-xl'></AiOutlineEye></button>
                        </Link>
                        <Link to={`/updatebrand/${_id}`}>
                            <button className="tooltip tooltip-top btn bg-black text-white hover:bg-black normal-case" data-tip="Update Product"><BiPencil className='text-xl'></BiPencil></button>
                        </Link>

                        <button onClick={() => handleDelete(_id)} className="tooltip tooltip-right btn bg-red-500 text-white hover:bg-red-500 normal-case" data-tip="Delete Product"><AiOutlineDelete className='text-xl'></AiOutlineDelete></button>

                    </div>

                </div>
            </div>
        </div>
    );
};
BrandWiseProduct.propTypes = {
    brand: PropTypes.object.isRequired,
    brands: PropTypes.array.isRequired,
    setBrands: PropTypes.array.isRequired
}
export default BrandWiseProduct;
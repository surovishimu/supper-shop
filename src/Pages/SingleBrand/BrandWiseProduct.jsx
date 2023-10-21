import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import Rating from 'react-rating';


const BrandWiseProduct = ({ brand, brands, setBrands }) => {
    const { _id, image, name, brandName, type, description, price, rating } = brand;


    // const renderRatingStars = () => {
    //     const stars = [];
    //     for (let i = 1; i <= rating; i++) {
    //         stars.push(<span key={i} role="img" aria-label="Star">⭐</span>);
    //     }
    //     return stars;
    // };

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
                    <p className='flex '>Rating:
                        <Rating className='block font-sans text-xl font-normal leading-normal text-yellow-500 antialiased'
                            initialRating={rating}
                            emptySymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            readonly />
                    </p>

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

{/* <div className="">

</div> */}
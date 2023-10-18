import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandWiseProduct = ({ brand }) => {
    const { _id, image, name, brandName, type, description, price, rating } = brand;
    const renderRatingStars = () => {
        const stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<span key={i} role="img" aria-label="Star">⭐</span>);
        }
        return stars;
    };
    return (
        <div className="mt-20 mb-20 px-10 ">
            <div className="card card-side bg-base-100 shadow-2xl ">
                <figure><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-black">{name}</h2>
                    <h2 className="text-lg font-semibold text-amber-500"><span className="text-xl font-bold text-black">Brans Name:</span>{brandName}</h2>
                    <h2><span >Type:</span>{type}</h2>
                    <p>
                        {description}
                    </p>
                    <h2>Price:{price}</h2>
                    <p>Rating:{renderRatingStars()}</p>

                    <Link to={`/brands/${_id}`}>
                        <button className="btn bg-amber-500 text-white hover:bg-amber-700">show details</button>
                    </Link>
                    <button className="btn bg-amber-500 text-white hover:bg-amber-700">Update Product</button>

                </div>
            </div>
        </div>
    );
};
BrandWiseProduct.propTypes = {
    brand: PropTypes.object.isRequired
}
export default BrandWiseProduct;
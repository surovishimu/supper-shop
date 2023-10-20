import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const { id, brand_name, brand_img } = brand || {}
    return (
        <div className="card w-full card-compact bg-amber-100 shadow-xl rounded-none" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <figure><img className="w-full h-64 " src={brand_img} alt="Shoes" /></figure>
            <div className="card-body">
                <Link to={`/${id}`}><h2 className="card-title hover:underline cursor-pointer">{brand_name}</h2></Link>

            </div>
        </div>
    );
};
BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}
export default BrandCard;
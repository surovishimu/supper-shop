import PropTypes from 'prop-types';

const BrandCard = ({ brand }) => {
    const { brand_name, brand_img } = brand || {}
    return (
        <div className="card w-full card-compact bg-amber-100 shadow-xl rounded-none">
            <figure><img className="w-full h-64 " src={brand_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title hover:underline cursor-pointer">{brand_name}</h2>

            </div>
        </div>
    );
};
BrandCard.propTypes = {
    brand: PropTypes.object.isRequired
}
export default BrandCard;
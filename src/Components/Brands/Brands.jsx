import PropTypes from 'prop-types';
import BrandCard from './BrandCard';

const Brands = ({ brands }) => {

    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-semibold text-center my-10'>Our Featured Brands</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-20 mb-10'>
                {
                    brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                }
            </div>
        </div>
    );
};
Brands.propTypes = {
    brands: PropTypes.array.isRequired
}
export default Brands;


const BrandDetails = ({ brand }) => {
    const { image, name, price, details } = brand
    return (

        <div className="card w-9/12 mx-auto lg:card-side bg-base-100 shadow-xl">
            <div className="flex-1">
                <figure><img src={image} alt="Album" /></figure>
            </div>
            <div className="card-body flex-1">
                <h2 className="card-title">{name}</h2>
                <p>About This Product:{details}</p>
                <p className="text-xl">Price:{price}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-amber-600 text-white hover:bg-amber-700">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default BrandDetails;
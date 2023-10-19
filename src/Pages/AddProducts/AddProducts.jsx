import Swal from 'sweetalert2'

const AddProducts = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.shortDescription.value;
        const rating = form.rating.value;
        // console.log(image,name,brandName,type,price,description,rating);


        const myData = {
            image, name, brandName, type, price, description, rating
        }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(myData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset()
            })
    };

    return (
        <div className="max-w-md mx-auto mt-10 mb-10 p-4 bg-white rounded-lg shadow-md">
            <h1 className='text-2xl text-amber-500 font-bold mb-5 text-center'>Add Products from Featured Brands</h1>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 font-bold">
                            Image
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="brand" className="block text-gray-700 font-bold">
                            Brand Name
                        </label>
                        <select
                            id="brand"
                            name="brand"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                        >
                            <option value="Estée Lauder">Estée Lauder</option>
                            <option value="Chanel">Chanel</option>
                            <option value="Dior">Dior</option>
                            <option value="Avon">Avon</option>
                            <option value="Revlon">Revlon</option>
                            <option value="Aveeno">Aveeno</option>

                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-bold">
                            Type
                        </label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 font-bold">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="shortDescription" className="block text-gray-700 font-bold">
                            Short Description
                        </label>
                        <textarea
                            id="shortDescription"
                            name="shortDescription"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-gray-700 font-bold">
                            Rating
                        </label>
                        <input
                            type="text"
                            id="rating"
                            name="rating"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-amber-600 text-white py-2 px-4 rounded-md hover:bg-amber-700 focus:outline-none  w-full focus:bg-amber-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;

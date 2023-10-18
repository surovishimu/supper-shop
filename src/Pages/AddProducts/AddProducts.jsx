
const AddProducts = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to the server)
    };

    return (
        <div className="max-w-md mx-auto mt-10 mb-10 p-4 bg-white rounded-lg shadow-md">
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
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                        />
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
                        className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;

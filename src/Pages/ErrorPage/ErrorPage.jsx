import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="text-center">
                <h1 className="text-4xl text-red-500 font-bold mb-4">Oops! Something went wrong</h1>
                <p className="text-xl text-gray-600">We're sorry, but it seems there was an error.</p>
                <Link to={'/'}>

                    <button className="btn btn-neutral mt-5">Go Back to Home</button>
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;

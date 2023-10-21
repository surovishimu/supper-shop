import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import UseAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, handleUpdateprofile } = UseAuth();
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();

        // get field value from the form
        const name = event.target.name.value;
        const email = event.target.email.value;
        const img = event.target.img.value;
        const password = event.target.password.value;
        // console.log(name, email, img, password);

        // password validation
        if (password.length < 6) {
            toast.error('password must be at least 6 carecters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters');
            return;
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            toast.error('Your password should have at least one special character');
            return;
        }

        // create user

        createUser(email, password)
            .then(() => {
                handleUpdateprofile(name, img)
                    .then(() => {
                        toast.success('user created succesfully');
                        navigate('/')
                    })
            }

            )
            .catch(error => toast.error(error.message))
    }
    return (
        <>
            <Helmet>
                <title>
                    Orchid Beauty | Sign Up
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Register now!</h1>
                        <p className="py-6  text-amber-500 font-bold text-xl">
                            Create Your Account: Join Exclusive Brand Shopping</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name='img' placeholder="image url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type='password' name='password' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn bg-amber-500 text-white hover:bg-amber-700">Register</button>
                            </div>
                            <label className="label">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover">Please Login</Link>
                            </label>

                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
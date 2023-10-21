import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import UseAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';


const Login = () => {
    const { signInUser } = UseAuth();
    const navigate = useNavigate()
    const handleSignIn = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;



        //sign in 
        signInUser(email, password)

            .then(() => {
                toast.success(
                    "Loged in successfully",
                    {
                        duration: 6000,
                    }
                );
                navigate('/')

            })
            .catch(error => toast.error(error.message))

    }
    return (
        <>
            <Helmet>
                <title>
                    Orchid Beauty | Log in
                </title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <p className="py-6 text-amber-500 font-bold text-xl">Unlock Premium Shopping, Login to Your Account</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn bg-amber-500 text-white hover:bg-amber-700">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>

                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
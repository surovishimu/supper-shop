import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

// import { AiFillGoogleCircle } from 'react-icons/ai';
const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext);
    const handleSocialLogin = (media) => {
        media()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className="divider"></div>
            <div className="">
                <button onClick={() => handleSocialLogin(googleLogin)} className="btn  w-full md:text-lg text-sm normal-case btn-outline hover:bg-amber-500 hover:border-none"><img className="h-7" src="https://i.ibb.co/J3yZt7b/google.png" alt="" />Continue with Google</button>
            </div>
        </>
    );
};

export default SocialLogin;
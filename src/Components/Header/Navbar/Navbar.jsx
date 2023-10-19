import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import UseAuth from "../../../Hooks/useAuth";

const Navbar = () => {
    const { user, logOut } = UseAuth();
    const links = <>
        <li className="text-lg mr-2 font-semibold text-white" ><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-amber-600 font-semibold underline" : ""
        } to={'/'}>Home</NavLink></li>
        <li className="text-lg mr-2 font-semibold  text-white"><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-amber-600 font-semibold underline" : ""
        } to={'/addproducts'}>Add Product</NavLink></li>
        <li className="text-lg font-semibold  text-white"><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-amber-600 font-semibold underline" : ""
        } to={'/mycart'}>My Cart</NavLink></li>
    </>
    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className=""><Logo></Logo></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 px-1">
                    {links}
                </ul>
            </div>
            {/* <div className="navbar-end ">
                
            </div> */}
            <div className="navbar-end">
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm text-black btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button className="btn btn-sm  btn-ghost"
                                    onClick={logOut}
                                >Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <ul className=" flex ">
                            <li className="text-lg font-semibold  text-white">
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-amber-600 underline" : ""
                                } to={'/login'}>Login</NavLink>
                            </li>
                        </ul>
                }
            </div>
        </div>
    );
};

export default Navbar;
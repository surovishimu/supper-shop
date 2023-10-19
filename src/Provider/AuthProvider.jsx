import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Config/firebaseConfig";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    // google login

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // signOut

    const logOut = () => {
        return signOut(auth)
    }
    // profile update
    const handleUpdateprofile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });
    }, [])
    console.log(user);
    const authentications = {
        googleLogin,
        createUser,
        signInUser,
        logOut,
        handleUpdateprofile,
        user,
        loading
    }


    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.array.isRequired
}
export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const signUpUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    const loginWithGoogle = () => {
        setloading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const loginWithGigHub = () => {
        setloading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const login = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setloading(false)
            // console.log(currentUser);
        })
        return () => unsubscribe()
    }, [])

    const authInfo = { signUpUser, updateUser, login, user, loginWithGoogle, loginWithGigHub, logOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
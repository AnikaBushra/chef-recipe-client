import React, { createContext, useState } from 'react';
import { app } from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const loginWithGigHub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = { signUpUser, updateUser, login, user, loginWithGoogle, loginWithGigHub }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext } from 'react';
import { app } from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const signUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
        })
    }

    const authInfo = { signUpUser, updateUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
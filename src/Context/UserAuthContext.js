import React, { createContext, useEffect, useState } from "react";
import { getAuth, provider } from "../firebase/config";


export const UserAuthContext = createContext();

export const UserAuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const auth = getAuth();

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    const signInWithGoogle = () => {
        return auth.signInWithPopup(provider);
    }

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    useEffect(() => {
        if(currentUser){
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [currentUser])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })

        return() => {
            unsubscribe()
        }
    }, [])

    const value = {
        isAuthenticated,
        currentUser,
        login,
        logout,
        signup,
        signInWithGoogle,
      };

    return(
        <UserAuthContext.Provider value={value}>
            {children}
        </UserAuthContext.Provider>
    )
}
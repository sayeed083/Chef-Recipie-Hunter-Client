import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';


export const AuthContext = createContext(null)
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



      // -----------Special Providers----------- 

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()




      // -----------Google----------- 
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

      // -----------GitHub----------- 

    const loginWithGitHub = () => {
        return signInWithPopup (auth, githubProvider)
    } 



      // -----------Creating User For Email & Password Sign in----------- 
    const createUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
     }
     const signIn = (email, password) => {
      setLoading(true);
        return signInWithEmailAndPassword (auth, email, password);
     }

       // -----------Sign Out Toggle----------- 

     const logOut = () => {
      setLoading(true)
        return signOut(auth)
     }

       // -----------Observing User Change----------- 
     useEffect(()=> {
        const unsubscribed = onAuthStateChanged(auth, loggedUser => {
           console.log('Loggedin user auth-state observer', loggedUser); 
           setUser(loggedUser);
           setLoading(false);
        })
        return () => {
            unsubscribed()
        }

     },[])




  // -----------Created a global info for use the functions in different components----------- 

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        loginWithGoogle,
        loginWithGitHub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
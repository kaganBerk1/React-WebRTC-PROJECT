import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { auth, } from '../firebase.config';
import { signin,signout,signup } from '../services/AuthServices';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}
export  function AuthProvider({children}) {
    const [currentUser,setCurrentUser]=useState()

    useEffect(()=>{
        const logout= auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
        })

        return logout
    },[])






    const value={
        currentUser,
        signup,
        signin,
        signout
    }
    
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

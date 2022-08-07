import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../../firebase.config';


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

    async function signup(email,password){
        try{ 
            const user = await createUserWithEmailAndPassword(auth,email,password)
            return user
        }catch(err){
            console.log(err.message)
        }
    }
    async function signin(email,password){
        try{ 
            const user = await signInWithEmailAndPassword(auth,email,password)
            return user
        }catch(err){
            console.log(err.message)
        }
    }

    async function signout(email,password){
        try{ 
            await signOut(auth)
        }catch(err){
            console.log(err.message)
        }
    }





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

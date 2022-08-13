import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth,db} from '../../firebase.config';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    setDoc,
    onSnapshot
  } from "firebase/firestore";


/* const userCollectionRef = collection(DB, "users"); */

export const signup= async function(email,password){
    try{ 
        const user = await createUserWithEmailAndPassword(auth,email,password);  
        const userRef = doc(db,"users",user.user.uid)
        await setDoc(userRef,{
            userId:user.user.uid,
            name: "",
            about:"",
            profileImg:""
        })

        return user
    }catch(err){
        console.log(err.message)
    }
}
export const  signin= async function(email,password){
    try{ 
        const user = await signInWithEmailAndPassword(auth,email,password)
        return user
    }catch(err){
        console.log(err.message)
    }
}

export const signout =  async function (email,password){
    try{ 
        await signOut(auth)
    }catch(err){
        console.log(err.message)
    }
}
